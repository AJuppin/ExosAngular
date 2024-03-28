import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}
  transactions: Transaction[] = [];

  getAllTransactions(): Observable<Transaction[]> {
    const urls = Array.from(
      { length: 43 },
      (_, i) => `http://localhost:3000/${i}`
    );
    const requests = urls.map((url) => this.http.get<Transaction[]>(url));

    return forkJoin(requests).pipe(
      map((responses: any[]) =>
        responses.reduce(
          (acc: string, response: any) => acc.concat(response),
          []
        )
      )
    );
  }
}
