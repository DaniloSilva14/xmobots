public class Aerodrome {
	private String name;
	private String city;
	private String description;
	private Date created_at;
	private List<Runway> runways = new ArrayList<>();
	
	public Aerodrome(String name, String city, String description, Date created_at, List<Runway> runways) {
		this.name = name;
		this.city = city;
		this.description = description;
		this.created_at = created_at;
		this.runways = runways;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public List<Runway> getRunways() {
		return runways;
	}

	public void setRunways(List<Runway> runways) {
		this.runways = runways;
	}
		
}
