import { Catedratico } from "./catedratico";
import { Alumno } from "./alumno";

export class Curso{
  id!: number;
  name!:string;
  catedratico!:Catedratico;
  alumnos!:Alumno[];
}
