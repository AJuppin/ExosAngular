import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exo1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.css',
})
export class Exo1Component {
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

  onSubmit(): void {
    this.generateMessage();
  }
}
