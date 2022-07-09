public class Cliente extends Persona {
    public static void main(String[] args) {
    Cliente cliente = new Cliente("Andrés Triana", 37, "3103586621", 5000);
    System.out.println("Hola mi nombre es " + cliente.getNombre() + " tengo " + cliente.getEdad() + " años y mi teléfono es " + cliente.getTelefono());
    System.out.println("Actualmente tengo un crédito de $" + cliente.getCredito());
    }

    // Atributos propios de la clase.
    private int credito;
    

    // Método constructor.
    public Cliente(String nombre, int edad, String telefono, int credito) {
        super(nombre, edad, telefono);
        this.credito = credito;
    }

    // Métodos accesores y mutadores (gets y sets).
    public int getCredito() {
        return credito;
    }

    public void setCredito(int credito) {
        this.credito = credito;
    }
}