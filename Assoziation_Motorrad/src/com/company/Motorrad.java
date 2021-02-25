package com.company;

import java.util.ArrayList;

public class Motorrad {

    private Motor meinMotor;
    private ArrayList<Reifen> MotorradReifen;


    public Motorrad(Motor meinMotor, Reifen vorderreifen, Reifen hinterreifen) {
        this.meinMotor = meinMotor;

        MotorradReifen = new ArrayList<Reifen>();
        MotorradReifen.add(vorderreifen);
        MotorradReifen.add(hinterreifen);

    }

    public void gibInfoMotorrad() {
        System.out.println("Diese Methode wurde in der Klasse Motorrad aufgerufen");
        System.out.println("Motorrad: ");
        this.meinMotor.gibInfoMotor();
        System.out.println("Reifen 1: ");
        MotorradReifen.get(1).gibInfoReifen();
    }

    public ArrayList<Reifen> getMotorradReifen() {
        return MotorradReifen;
    }

    @Override
    public String toString() {
        return "Motorrad{" +
                "meinMotor=" + meinMotor +
                ", MotorradReifen=" + MotorradReifen +
                '}';
    }
}
