package MiEjemploJava;

public class Persona {

        private String nombre;
        private int edad;
        private int nss;

        public Persona (){
        }

        public Persona(String nombre, int edad, int nss){
            this.nombre = nombre;
            this.edad = edad;
            this.nss = nss;
        }

        void caminar() {
            System.out.println("Camina");
        }

        void dormir() {
            System.out.println("Duerme");
        }
}

// package MiEjemploJava;
//
//public class EjemploPersona {
//
//    public static void main(String[] args) {
//        Persona p = new Persona();
//       p.setNombre("Dora");
//       p.setEdad(32);
//       p.setNss(14689);
//        System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
//        System.out.println("el valor de la variable de instancia p.edad -> " + p.getEdad());
//        System.out.println("el valor de la variable de instancia p.nss -> " + p.getNss());
//
//
//    }
//}
