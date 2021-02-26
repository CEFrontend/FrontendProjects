public class Gate
{
    private boolean isLandingMode;
    private Flugzeug flugzeug;
    private int maxGroesse;
    private int minGroesse;
    private String bezeichnung;

    public Gate(boolean isLandingMode, Flugzeug flugzeug, int maxGroesse, int minGroesse, String bezeichnung) {
        this.isLandingMode = isLandingMode;
        this.flugzeug = flugzeug;
        this.maxGroesse = maxGroesse;
        this.minGroesse = minGroesse;
        this.bezeichnung = bezeichnung;
    }

    public boolean isLandingMode() {
        return isLandingMode;
    }

    public void setLandingMode(boolean landingMode) {
        isLandingMode = landingMode;
    }

    public Flugzeug getFlugzeug() {
        return flugzeug;
    }

    public void setFlugzeug(Flugzeug flugzeug) {
        this.flugzeug = flugzeug;
    }

    public int getMaxGroesse() {
        return maxGroesse;
    }

    public void setMaxGroesse(int maxGroesse) {
        this.maxGroesse = maxGroesse;
    }

    public int getMinGroesse() {
        return minGroesse;
    }

    public void setMinGroesse(int minGroesse) {
        this.minGroesse = minGroesse;
    }

    public String getBezeichnung() {
        return bezeichnung;
    }

    public void setBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
    }
}
