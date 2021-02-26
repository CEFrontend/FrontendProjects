import java.util.ArrayList;

public class Tower
{
    private ArrayList<Bodenpersonal> fluglotsen = new ArrayList<Bodenpersonal>();
    private String bezeichnung;

    public Tower(ArrayList<Bodenpersonal> fluglotsen, String bezeichnung) {
        this.fluglotsen = fluglotsen;
        this.bezeichnung = bezeichnung;
    }

    public String getBezeichnung() {
        return bezeichnung;
    }

    public void setBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
    }
}
