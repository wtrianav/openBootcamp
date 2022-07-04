public class App {
    public static void main(String[] args) {
        int param1 = 35;
        int param2 = 45;
        int param3 = 54;
        suma(param1, param2, param3);

        Coche miCoche = new Coche();
        miCoche.IncrementarPuertas();
        System.out.println("Mi coche tiene " + miCoche.puertas + " puertas");

    }

    public static void suma(int a, int b, int c) {
        System.out.println(a + b + c);
    }
}

class Coche {
    public int puertas = 2;

    public void IncrementarPuertas() {
        this.puertas++;
    }
} 


