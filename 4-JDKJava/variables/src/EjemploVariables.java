public class EjemploVariables {
    public static void main(String[] args) {
        String nombre= "Edith";
        String saludo = "Hola este es un ejemplo de variables";
        System.out.println(saludo + " " + nombre);
        char espacio = '@';
        char caracter = 'a';
        System.out.println("espacio = " + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char valor maximo:" + Character.MAX_VALUE);
        System.out.println("char valor minimo:" + Character.MIN_VALUE);

        int numeroEntero = 2;
        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int valor maximo:" + Integer.MAX_VALUE);
        System.out.println("int valor minimo:" + Integer.MIN_VALUE);

        float numeroFloat = 1.5e-10f; //1.5e-10f
        System.out.println("numeroFloat = " + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo:" + Float.MAX_VALUE);
        System.out.println("float valor minimo:" + Float.MIN_VALUE);

        double numeroDouble = 3.444567E39;
        System.out.println("numeroDouble = " + numeroDouble);
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits: " +Double.SIZE);
        System.out.println("double valor maximo:" + Double.MAX_VALUE);
        System.out.println("double valor minimo:" + Double.MIN_VALUE);

        boolean valorBoolean = (3-2 == 4);
        System.out.println("varBoolean = " + valorBoolean);

        long valorLong = (1);
        System.out.println("Long es = " + valorLong);
        System.out.println("long corresponde en byte: " + Long.BYTES);
        System.out.println("long corresponde en bits: " + Long.SIZE);
        System.out.println("long valor maximo:" + Long.MAX_VALUE);
        System.out.println("long valor minimo:" + Long.MIN_VALUE);

        short valorShort = (1);
        System.out.println("Short es = " + valorShort);
        System.out.println("Short corresponde en byte: " + Short.BYTES);
        System.out.println("Short corresponde en bits: " + Short.SIZE);
        System.out.println("Short valor maximo:" + Short.MAX_VALUE);
        System.out.println("Short valor minimo:" + Short.MIN_VALUE);

        /* hacer lo mismo con Byte */

        var miVar = '2';
        System.out.println("miVar = " + miVar);








    }
}
