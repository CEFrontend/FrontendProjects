package com.company;

public class Motor {

    private int leistung;
    private double hubraum;

    public Motor(int leistung, double hubraum) {
        this.leistung = leistung;
        this.hubraum = hubraum;
    }


    public int getLeistung() {
        return leistung;
    }

    public double getHubraum() {
        return hubraum;
    }

    public void gibInfoMotor(){
        System.out.println("Die Leistung des Motors ist: "+ this.leistung);
        System.out.println("Der Hubraum des Motors ist: "+ this.hubraum);
    }

    @Override
    public String toString() {
        return "Motor{" +
                "leistung=" + leistung +
                ", hubraum=" + hubraum +
                '}';
    }
}
