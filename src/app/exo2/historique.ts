export class Historique {
  nombre1!: number;
  nombre2!: number;
  heure!: Date;
  operation!: string;
  resultat!: number;

  constructor(
    nombre1?: number,
    nombre2?: number,
    operation?: string,
    heure?: Date,
    resultat?: number
  ) {
    if (nombre1) this.nombre1 = nombre1;
    if (nombre2) this.nombre2 = nombre2;
    if (operation) this.operation = operation;
  }
}
