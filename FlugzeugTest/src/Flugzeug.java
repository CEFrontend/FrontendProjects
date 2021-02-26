import java.util.ArrayList;

public class Flugzeug
{
    public ArrayList<Passagier> passagiere = new ArrayList<Passagier>();
    public int groesse;
    private ArrayList<FlugPersonal> crew = new ArrayList<FlugPersonal>();
    private FlugPersonal pilot;

    public Flugzeug(int groesse, FlugPersonal pilot) {
        this.groesse = groesse;
        this.pilot = pilot;
    }

    public void  setPassagiere(ArrayList<Passagier> p)
    {
        passagiere = p;
    }

    public void starten()
    {

    }

    public void landen(Gate g)
    {

    }



    public int getGroesse() {
        return groesse;
    }

    public void setGroesse(int groesse) {
        this.groesse = groesse;
    }

    public FlugPersonal getPilot() {
        return pilot;
    }

    public void setPilot(FlugPersonal pilot) {
        this.pilot = pilot;
    }
}
