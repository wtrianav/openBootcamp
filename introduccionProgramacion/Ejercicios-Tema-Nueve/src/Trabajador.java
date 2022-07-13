public class Trabajador extends Persona {

    public static void main(String[] args) {
    Trabajador trabajador = new Trabajador("Cristian Ramírez", 42, "3106325623", 10000);
    System.out.println("Hola mi nombre es " + trabajador.getNombre() + " tengo " + trabajador.getEdad() + " años y mi teléfono es " + trabajador.getTelefono());
    System.out.println("Actualmente mi salario es de $" + trabajador.getSalario());
    }

    // Atributos propios de la clase.
    private int salario;

    // Método constructor.
    public Trabajador(String nombre, int edad, String telefono, int salario) {
        super(nombre, edad, telefono);
        this.salario = salario;
    }

    // Métodos accesores y mutadores (gets y sets).
    public int getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }
}
