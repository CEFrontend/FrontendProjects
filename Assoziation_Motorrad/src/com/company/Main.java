package com.company;

public class Main {

    public static void main(String[] args) {



        Motorrad Harley = new Motorrad(new Motor(300, 9999),new Reifen(60, 10, "Winter") ,
                new Reifen(70, 10, "Winter"));

        //Harley.getMotorradReifen().get(0).gibInfoReifen();
        Harley.gibInfoMotorrad();
        System.out.println();
        System.out.println(Harley.toString());
   }
}
