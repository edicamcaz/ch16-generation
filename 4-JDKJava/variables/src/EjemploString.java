public class EjemploString {
    public static void main(String[] args) {
        String curso = "Curso en Java";
        System.out.println("curso = " + curso);
        String nombre = "EdiCamCaz";
        String resultado = new String ("Curso en Java");
        System.out.println("resultado = " + resultado);

        boolean esigual = curso == resultado;
        System.out.println("esigual = " + esigual);

        esigual = curso.equals(resultado);
        System.out.println("esigual = " + esigual);

        String concat = curso + " con " + nombre;


    }
}
