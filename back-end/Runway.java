public class Runway {
	private String designation;
	private Integer width;
	private Integer length;
	
	public Runway(String designation, Integer width, Integer length) {
		this.designation = designation;
		this.width = width;
		this.length = length;
	}
	
	public String getDesignation() {
		return designation;
	}
	
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	public Integer getWidth() {
		return width;
	}
	
	public void setWidth(Integer width) {
		this.width = width;
	}
	
	public Integer getLength() {
		return length;
	}
	
	public void setLength(Integer length) {
		this.length = length;
	}	
	
}
