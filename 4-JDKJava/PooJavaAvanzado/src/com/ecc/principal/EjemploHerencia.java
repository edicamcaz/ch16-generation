package com.ecc.principal;

import com.ecc.herencia.BasePadre;
import com.ecc.herencia.Hija;
import com.ecc.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args){
        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);
        Object miObj = new BasePadre();
        System.out.println("Atributo de Clase Padre -> "+objB.getA());
        System.out.println("Atributo de Clase Hijo ->"+ho.getA());
    }
}
