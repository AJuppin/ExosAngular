import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../exo3/transaction.service';
import { Transaction } from '../exo3/transaction';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService
  ) {}
  transaction!: Transaction;
  id!: number;

  ngOnInit(): void {
    this.getTransactionById();
  }

  getTransactionById(): void {
    let idNaN = this.route.snapshot.params['id'];
    let id = idNaN[4];
    // je n'ai pas trouvé de moyen de récuperer un id valide pour tous
    this.transactionService.getTransactionById(id).subscribe((transaction) => {
      this.transaction = transaction;
    });
  }

  goBack() {
    this.router.navigateByUrl('exo3');
  }
}
