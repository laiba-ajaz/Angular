import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

export interface ExpenseTracker {
  title: string;
  category: string;
  amount: number;
  date: Date;
  paymentMethod: string
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
   standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment_3');

  expense: ExpenseTracker = {
    title: "",
    category: "",
    amount: 0,
    date: new Date(),
    paymentMethod: ""
  };

  expenses: ExpenseTracker[] = [

  ]
  addExp() {
    this.expenses.push({
      title: this.expense.title,
      category: this.expense.category,
      amount: this.expense.amount,
      date: this.expense.date,
      paymentMethod: this.expense.paymentMethod

    });
    this.clear();
  }
  clear() {
    this.expense.title = "";
    this.expense.category = "";
    this.expense.amount = 0;
    this.expense.date = new Date();
    this.expense.paymentMethod = "";
  }

  deleteExpense(index: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       

          Swal.fire({

            title: "Deleted!",
            text: "Your Expense has been deleted successfully.",
            icon: "success"
          });

      }
    });
  }
}
