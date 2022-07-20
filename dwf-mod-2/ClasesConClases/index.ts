// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getName() {
    return this.nombre;
  }
}

class Piso {
  nombre: string;
  departamentos: Departamento[];
  constructor(nombre: string) {
    this.nombre = nombre;
    this.departamentos = [];
  }
  pushDepartamento(nombre: Departamento) {
    this.departamentos.push(nombre);
  }
  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
}

class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, depto: Departamento) {
    const pisoEncontrado = this.pisos.find(
      (piso) => piso.nombre == nombreDePiso
    );
    pisoEncontrado.pushDepartamento(depto);
  }

  getDepartamentosByPiso(nombreDelPiso: string): Departamento[] {
    const departamentosPorPiso = this.pisos.find(
      (pisos) => pisos.nombre == nombreDelPiso
    );
    return departamentosPorPiso.getDepartamentos();
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
