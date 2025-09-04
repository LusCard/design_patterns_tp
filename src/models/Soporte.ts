interface Observador {
  actualizar(equipo: Equipo, estadoAnterior: string, estadoNuevo: string): void;
}

export class Soporte implements Observador {
  private nombre: string;
  constructor(nombre: string = "Soporte Técnico") {
    this.nombre = nombre;
  }

  actualizar(
    equipo: Equipo,
    estadoAnterior: string,
    estadoNuevo: string
  ): void {
    console.log(
      `Se ha notificado a ${
        this.nombre
      } que el ${equipo.obtenerNombre()} ha cambiado de estado: ${estadoAnterior} -> ${estadoNuevo}`
    );
  }
}

export class Equipo {
  private nombre: string;
  private tipo: string;
  private estado: string;
  private observadores: Observador[];

  constructor(nombre: string, tipo: string, estado: string = "disponible") {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
    this.observadores = [];
  }

  agregarObservador(observador: Observador): void {
    if (!this.observadores.includes(observador)) {
      this.observadores.push(observador);
    }
  }

  removerObservador(observador: Observador): void {
    const index = this.observadores.indexOf(observador);
    if (index > -1) {
      this.observadores.splice(index, 1);
    }
  }

  private notificarObservadores(
    estadoAnterior: string,
    estadoNuevo: string
  ): void {
    this.observadores.forEach((observador) => {
      observador.actualizar(this, estadoAnterior, estadoNuevo);
    });
  }

  cambiarEstado(nuevoEstado: string): void {
    const estadoAnterior = this.estado;
    this.estado = nuevoEstado;
    this.notificarObservadores(estadoAnterior, nuevoEstado);
  }

  obtenerNombre(): string {
    return this.nombre;
  }

  obtenerTipo(): string {
    return this.tipo;
  }

  obtenerEstado(): string {
    return this.estado;
  }

  obtenerInfoCompleta(): string {
    return `Equipo: ${this.nombre}, Tipo: ${this.tipo}, Estado: ${this.estado}`;
  }
}
