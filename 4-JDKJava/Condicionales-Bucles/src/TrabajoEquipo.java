import java.util.Scanner;

public class TrabajoEquipo {

    public static void main(String[] args) {

        String valor = "";
        for (int i=0; i<5; i++){
            valor += "*";
            System.out.println(valor);
        }

        for(int espacios = 0, asteriscos = 5; asteriscos>0; espacios++, asteriscos -= 1){

            for(int i=0; i < espacios; i++){
                System.out.print("");
            }

            for(int j=asteriscos; j > 0; j--){
                System.out.print("*");
            }
            System.out.println("");
        }

        Scanner input = new Scanner(System.in);
        System.out.println("Número de estrellas");
        int estrellas = input.nextInt();
        System.out.println("Direccion 1 o 2");
        int direccion = input.nextInt();


        switch (direccion){
            case 1:
                String valor3 = "";
                for (int i=0; i<estrellas; i++){
                    valor3 += "*";
                    System.out.println(valor3);

                }

                break;
            case 2:
                String valor4 = "";
                for (int j=estrellas; j>0; j--){
                    for (int k=0; k<j; k++){
                        valor4 += "*";

                    }
                    System.out.println(valor4);
                    valor4 = "";


                }
                break;
        }
    }
}