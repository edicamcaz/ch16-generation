package com.ecc.j_interface;

public interface Test {
    int CONV = 8;
    void metodo1(int x);
    String metodo2(String s);
}

class Prueba implements Test {
    @Override
    public void metodo1(int x) {
        System.out.println("Hola metodo1 parametro x --> " + x);

    }

    @Override
    public String metodo2(String s) {
        return "este parametro es s -->" + s;
    }
    public void metodoPropio(){
        System.out.println(" soy el metodo propio");

    }
}