import java.util.ArrayList;

public class Flughafen
{
    public boolean blockModus;
    private ArrayList<Gate> gates = new ArrayList<Gate>();
    private ArrayList<Passagier> passagiere = new ArrayList<Passagier>();
    Tower tower;

    public Flughafen(boolean blockModus, Tower tower) {
        this.blockModus = blockModus;
        this.tower = tower;
    }

    public void flugzeugZuGate(Flugzeug f)
    {
        for (Gate item:gates)
        {
            if(item.getMaxGroesse() >= f.groesse && item.getMinGroesse() <= f.groesse )
                item.setFlugzeug(f);
        }
    }

    public void goToGate(ArrayList<Passagier> p)
    {
        for (Gate item:gates)
        {
            if(item.getFlugzeug() != null)
                if(item.getFlugzeug().groesse <= p.size());
                item.getFlugzeug().setPassagiere(p);
        }
    }

    public boolean landeFreigabe(Flugzeug f)
    {
        for (Gate item:gates)
        {
            if(item.getFlugzeug() == null)
            if(item.getMaxGroesse() >= f.groesse && item.getMinGroesse() <= f.groesse ) {
                item.setFlugzeug(f);
                return true;
            }
        }
        return false;
    }

    public void LandingMode(Gate g)
    {
        if(g.isLandingMode() == true) {
            g.setFlugzeug(null);
        }
        else
        {
            System.out.println("Landen nicht möglich");
            blockModus=true;
        }

    }

    public void startFreigabe(Gate g)
    {

        startingMode(g);
    }

    public void startingMode(Gate g)
    {
        if(g.isLandingMode() == false)
        { g.setFlugzeug(null);
        }
        else
        {
            System.out.println("Starten nicht möglich");
            blockModus=true;
        }

    }


    public boolean isBlockModus() {
        return blockModus;
    }

    public void setBlockModus(boolean blockModus) {
        this.blockModus = blockModus;
    }

    public Tower getTower() {
        return tower;
    }

    public void setTower(Tower tower) {
        this.tower = tower;
    }
}
