interface Equipo {
  tipo: string;
  marca: string;
  ram: string;
  procesador: string;
  estado: string;

  getDetalles(): string;
}

class Notebook implements Equipo {
  tipo: string;
  marca: string;
  ram: string;
  estado: string;
  procesador: string;

  constructor(marca: string, ram: string, estado: string, procesador: string) {
    this.tipo = "Notebook";
    this.marca = marca;
    this.ram = ram;
    this.estado = estado;
    this.procesador = procesador;
  }
  getDetalles(): string {
    return `Tipo: ${this.tipo}, Marca: ${this.marca}, RAM: ${this.ram}, Procesador: ${this.procesador}, Estado: ${this.estado}`;
  }
}

class PC implements Equipo {
  tipo: string;
  marca: string;
  ram: string;
  estado: string;
  procesador: string;

  constructor(marca: string, ram: string, estado: string, procesador: string) {
    this.tipo = "PC";
    this.marca = marca;
    this.ram = ram;
    this.estado = estado;
    this.procesador = procesador;
  }
  getDetalles(): string {
    return `Tipo: ${this.tipo}, Marca: ${this.marca}, RAM: ${this.ram}, Procesador: ${this.procesador}, Estado: ${this.estado}`;
  }
}

export class EquipoFactory {
  static crearEquipo(
    tipo: string,
    marca: string,
    ram: string,
    estado: string,
    procesador: string
  ): Equipo {
    if (tipo === "Notebook") {
      return new Notebook(marca, ram, estado, procesador);
    } else if (tipo === "PC") {
      return new PC(marca, ram, estado, procesador);
    }
    throw new Error("Tipo de equipo no reconocido");
  }
}
