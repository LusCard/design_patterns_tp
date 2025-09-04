export class InventarioViejo {
  private items: any[];

  constructor() {
    this.items = [];
  }

  agregarItem(item: any): void {
    this.items.push(item);
  }

  obtenerItems(): any[] {
    return this.items;
  }
  listarItems(): void {
    console.log("Items en el inventario viejo:");
    this.items.forEach((item) => {
      console.log(`- ${item}`);
    });
  }
}

interface InventarioNuevo {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): { nombre: string; tipo: string; estado: string }[];
}

export class AdaptadorInventario implements InventarioNuevo {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }
  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    const itemViejo = {
      nombre: nombre,
      tipo: tipo,
      estado: estado,
    };
    this.inventarioViejo.agregarItem(itemViejo);
  }

  listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    const itemsViejos = this.inventarioViejo.obtenerItems();
    return itemsViejos.map((item) => ({
      nombre: item.nombre,
      tipo: item.tipo,
      estado: item.estado,
    }));
  }
  mostrarTranformacion(): void {
    const itemsViejos = this.inventarioViejo.obtenerItems();
    const equiposNuevos = this.listarEquipos();

    console.log("Transformación de items viejos a equipos nuevos:");
    console.log("Viejos:", itemsViejos);
    console.log("Nuevos:", equiposNuevos);
  }
}
