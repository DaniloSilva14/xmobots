import React, { useEffect, useState, useContext } from "react";
import Button from '@mui/material/Button';
import { ApplicationContext } from "../../contexts/application";

import "./styles.css"

const Upload = () => {
  const { aerodromesInput, aerodromesList } = useContext(ApplicationContext);

  const [selectedFile, setSelectedFile] = useState();
  const [aerodromes, setAerodromes] = useState([]);

  const regexDMS = new RegExp(/([0-9]{0,6})((\.[0-9]{0,2}S)|(\,[0-9]{0,2}S)|S)\/([0-9]{0,8})((\.[0-9]{0,2}W)|(\,[0-9]{0,2}W)|W)/g);
  
  function getAerodromes() {
    setAerodromes(aerodromesList);
  }

  function alterAerodromes(aerodromes) {
    let coord = [];
    coord = aerodromes;

    coord.forEach(item => {
      item.description = (item.description.match(regexDMS));
    })

    setAerodromes(coord)
    aerodromesInput(coord)
  }

  function chooseFile(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event){
    var obj = JSON.parse(event.target.result);
    alterAerodromes(obj.aerodromes)
  }

  useEffect(() => {
    let abortController = new AbortController();  
    
    getAerodromes();

    return () => {  
      abortController.abort();  
    }
  }, []);

  return (
    <div className="upload">
      <div className="form-upload">
        <h1>UPLOAD</h1>

        <input
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          id="button-file"
          value={selectedFile}
          onChange={(e) => chooseFile(e)}
        />
        <label htmlFor="button-file">
          <Button 
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="success"
            component="span">
            Upload
          </Button>
        </label> 
      
        {
          aerodromes &&
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cidade</th>
                <th>DMS</th>
                <th>Data de criação</th>
                <th>Qtd pistas</th>
              </tr>
            </thead>
            <tbody>
              {
                aerodromes && aerodromes.map((item, index) => (
                  <tr key={index}> 
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.description}</td>
                    <td>{item.created_at}</td>
                    <td>{item.runways.length}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default Upload