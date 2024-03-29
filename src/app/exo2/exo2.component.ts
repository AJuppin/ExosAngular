import { Component } from '@angular/core';
import { Historique } from './historique';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exo2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exo2.component.html',
  styleUrl: './exo2.component.css',
})
export class Exo2Component {
  historique: Historique = new Historique();
  historiques: Historique[] = [];

  constructor(private router: Router) {}

  calculate(form: NgForm): void {
    this.historique = new Historique(
      form.value.nombre1,
      form.value.nombre2,
      form.value.operation
    );
    this.historique.resultat = this.performOperation(this.historique);
    this.historique.heure = new Date();
    this.ajouterHistorique(this.historique);
  }

  performOperation(historique: Historique): number {
    switch (historique.operation) {
      case 'addition':
        return historique.nombre1 + historique.nombre2;
      case 'soustraction':
        return historique.nombre1 - historique.nombre2;
      case 'multiplication':
        return historique.nombre1 * historique.nombre2;
      case 'division':
        if (historique.nombre2 === 0) {
          console.error('Division par zéro !');
          return 0;
        } else {
          return historique.nombre1 / historique.nombre2;
        }
      default:
        console.error('Opération non valide !');
        return 0;
    }
  }

  ajouterHistorique(nouvelHistorique: Historique): void {
    this.historiques.push(nouvelHistorique);
  }

  supprimerHistorique(historique: Historique): void {
    const index = this.historiques.indexOf(historique);

    this.historiques.splice(index, 1);
  }

  afficherExo1() {
    this.router.navigateByUrl('exo1');
  }

  afficherExo3() {
    this.router.navigateByUrl('exo3');
  }
}
