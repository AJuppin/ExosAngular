export class Transaction {
  id!: number;
  amount!: number;
  balance!: number;
  label!: string;
  date!: Date;

  constructor(
    id?: number,
    amount?: number,
    balance?: number,
    label?: string,
    date?: Date
  ) {
    if (id) this.id = id;
    if (amount) this.amount = amount;
    if (balance) this.balance = balance;
    if (label) this.label = label;
    if (date) this.date = date;
  }
}
