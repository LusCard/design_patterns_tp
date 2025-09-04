export class Inventario {
  private static instancia: Inventario;
  private nombre: string;
  private tipo: string;
  private estado: string;

  private constructor() {
    this.nombre = "";
    this.tipo = "";
    this.estado = "";
  }
  public static getInstance(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }
  listarEquipo(): string {
    return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Estado: ${this.estado}`;
  }
}
