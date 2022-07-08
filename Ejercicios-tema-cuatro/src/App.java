public class App {
    public static void main(String[] args) {

        // Ejercicio de condicional if
        int numeroIf = -6;
        if(numeroIf > 0) {
            System.out.println("El número " + numeroIf + " es un número positivo");
        } else if(numeroIf < 0) {
            System.out.println("El número " + numeroIf + " es un número negativo");
        } else {
            System.out.println("El número es " + numeroIf);
        }

        // Ejercicio bucle while
        int numeroWhile = 0;
        while(numeroWhile < 3) {
            numeroWhile ++;
            System.out.println(numeroWhile);
        }

        // Ejercicio buble Do while
        int numberWhile = 3;

        do {
            numberWhile++;
            System.out.println(numberWhile);
        } while(numberWhile < 3);


        // Ejercicio buble for
        for(int numeroFor = 0; numeroFor <= 3; numeroFor++) {
            System.out.println(numeroFor);
        }

        // Ejercicio interruptor switch
        var estacion = "PRIMAVERA";

        switch(estacion) {
            case "VERANO":
                System.out.println("Es verano");
                break;
            case "INVIERNO":
                System.out.println("Es invierno");
                break;
            case "OTOÑO":
                System.out.println("Es otoño");
                break;
            case "PRIMAVERA":
                System.out.println("Es primavera");
                break;
            default:
                System.out.println("Debes escribir una estación del año");
        }
    }
}
