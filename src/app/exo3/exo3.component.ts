import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-exo3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css'],
})
export class Exo3Component implements OnInit {
  transactions: Transaction[] = [];

  constructor(
    private router: Router,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.AfficherAll();
  }

  AfficherAll() {
    this.transactionService
      .getAllTransactions()
      .subscribe((response) => (this.transactions = response));
    console.log(this.transactions);
  }

  afficherDetails() {
    this.router.navigateByUrl('details');
  }
}
