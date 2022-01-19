import React, { useEffect, useState, useContext  } from "react";
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet'
import { ApplicationContext } from "../../contexts/application";

import "./styles.css"

const Maps = () => {
  const [aerocoord, setAerocoord] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  
  const { aerodromesList } = useContext(ApplicationContext);

  function getAerodromes() {
    if(aerodromesList == null) return;

    let arrCoord = [];

    aerodromesList.forEach(item => {
      let arr = item.description[0].split("/");
      let coord = dmsToArray(arr[0], arr[1]);
      arrCoord.push(coord);
    })

    setCoordinates(arrCoord);
    getCoordinates(arrCoord);
  }

  function dmsToArray(lat, long){
    let seconds = 0;
    let dmsLat = []
    dmsLat.push(Number(lat.slice(0, 2)))
    dmsLat.push(Number(lat.slice(2, 4)))
    seconds = lat.slice(4, lat.length-1)
    seconds = seconds.replace(",",".")
    dmsLat.push(Number(seconds))
    dmsLat.push(lat.slice(lat.length-1, lat.length))

    let dmsLong = []
    dmsLong.push(Number(long.slice(0, 3)))
    dmsLong.push(Number(long.slice(3, 5)))
    seconds = long.slice(5, long.length-1)
    seconds = seconds.replace(",",".")
    dmsLong.push(Number(seconds))
    dmsLong.push(long.slice(long.length-1, long.length))
    
    return {dmsLat, dmsLong}
  }

  function dmsToDecimal(lat, long) {
    // lat
    let seg = ((lat[1] * 60) + lat[2]) / 3600;
    let hour = lat[0] + seg;
    let newLat = hour;

    if(lat[3] === "S")
      newLat = newLat * (-1)

    // long
    seg = ((long[1] * 60) + long[2]) / 3600;
    hour = long[0] + seg;
    let newLong = hour;

    if(long[3] === "W")
      newLong = newLong * (-1)

    return {newLat, newLong};
  }

  function getCoordinates(coordinatesObj) {
    let newCordinates = [];

    coordinatesObj.forEach((item) => {
      newCordinates.push(dmsToDecimal(item.dmsLat, item.dmsLong))
    })    

    setAerocoord(newCordinates);  
  }

  useEffect(() => {
    let abortController = new AbortController();  
    
    getAerodromes();

    return () => {  
      abortController.abort();  
    }
  }, []);

  return (
    <MapContainer center={[-15.826691, -47.921822]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        aerocoord && aerocoord.map((item, index) => (
          <div key={index}>
            <Marker
              key={String("marker"+index)}
              position={[item.newLat, item.newLong]}
            />
            <Circle 
              key={String("circle"+index)}
              center={[item.newLat, item.newLong]}
              color="red"
              radius={5000}
            />
          </div>
        ))
      }
    </MapContainer>
  );
}

export default Maps