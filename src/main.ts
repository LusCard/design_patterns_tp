/* import { Inventario } from "./models/Inventario";
import { EquipoFactory } from "./models/EquipoFactory";
import { Soporte, Equipo } from "./models/Soporte";

const inventario = Inventario.getInstance();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipo());

const equipo1 = EquipoFactory.crearEquipo(
  "Notebook",
  "Dell",
  "16GB",
  "Nuevo",
  "Intel i7"
);
console.log(equipo1.getDetalles());

const equipo2 = EquipoFactory.crearEquipo(
  "PC",
  "HP",
  "32GB",
  "Usado",
  "AMD Ryzen 5"
);
console.log(equipo2.getDetalles());

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
 */

import {
  InventarioViejo,
  AdaptadorInventario,
} from "./models/AdaptadorInventario";
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
