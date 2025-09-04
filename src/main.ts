import { Inventario } from "./models/Inventario";
import { EquipoFactory } from "./models/EquipoFactory";
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
