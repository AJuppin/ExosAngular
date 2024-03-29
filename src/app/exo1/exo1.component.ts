import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exo1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.css',
})
export class Exo1Component {
  constructor(private router: Router) {}

  fontSize: number = 16;
  userName: string = '';
  selectedFont: string = '';
  fonts: string[] = ['Arial', 'Verdana', 'Helvetica', 'Times New Roman'];
  alignLeft: boolean = false;
  alignCenter: boolean = false;
  alignRight: boolean = false;

  generateMessageStyles(): any {
    return {
      'font-family': this.selectedFont,
      'font-size.px': this.fontSize,
      'text-align': this.getTextAlign(),
    };
  }

  getTextAlign(): string {
    if (this.alignLeft) return 'left';
    if (this.alignCenter) return 'center';
    if (this.alignRight) return 'right';
    return 'left'; // Par défaut, aligné à gauche
  }

  generateMessage(): string {
    let message = 'Hello ';
    if (this.userName) {
      message += this.userName.toUpperCase();
    }
    return message;
  }

  afficherExo2() {
    this.router.navigateByUrl('exo2');
  }

  afficherExo3() {
    this.router.navigateByUrl('exo3');
  }
}
