public class App {
    public static void main(String[] args) {
        Persona persona = new Persona("Andrés Triana", 37, "3103586621");
        System.out.println("Hola nombre es " + persona.getNombre() + " tengo " + persona.getEdad() + " años y mi teléfono es " + persona.getTelefono());


    }
}

class Persona {
    // Atributos propios de la clase
    private String nombre;
    private int edad;
    private String telefono;

    // Método constructor
    public Persona(String nombre, int edad, String telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }

    // Métodos accesores y mutadores (gets y sets)
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
