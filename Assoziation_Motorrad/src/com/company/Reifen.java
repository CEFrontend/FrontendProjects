package com.company;

public class Reifen {
    private double durchmesser;
    private double profiltiefe;
    private String jahreszeit;

    public Reifen(double durchmesser, double profiltiefe, String jahreszeit) {
        this.durchmesser = durchmesser;
        this.profiltiefe = profiltiefe;
        this.jahreszeit = jahreszeit;
    }

    public double getDurchmesser() {
        return durchmesser;
    }

    public double getProfiltiefe() {
        return profiltiefe;
    }

    public String getJahreszeit() {
        return jahreszeit;
    }

    @Override
    public String toString() {
        return "Reifen{" +
                "durchmesser=" + durchmesser +
                ", profiltiefe=" + profiltiefe +
                ", jahreszeit='" + jahreszeit + '\'' +
                '}';
    }

    public void gibInfoReifen() {
        System.out.printf("Durchmesser des Reifens: %f%n Profiltiefe des Reifens: %f%n Jahreszeit: %s", this.durchmesser, this.profiltiefe, this.jahreszeit);
    }
}
