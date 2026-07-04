import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule ,FormGroup, FormControl  , Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Reactive_forms');

  userData : any[] =[]


  userForm = new FormGroup({

  name : new FormControl('' , [Validators.required , Validators.minLength(3)]),
  email : new FormControl('' , [Validators.required , Validators.email]),
  phone : new FormControl('' , [Validators.required , Validators.pattern('^[0-9]{10}$')]  ),
  gender : new FormControl('' , [Validators.required]),
  role : new FormControl('' , [Validators.required]),
  department : new FormControl('' , [Validators.required]),
  joiningDate : new FormControl('' , [Validators.required]),
  salary : new FormControl('' , [Validators.required, Validators.min(0)]),
  status : new FormControl('' , [Validators.required]),
  address : new FormControl(''),
  terms : new FormControl(false)

  })

  onSubmit(){
  this.userData.push(this.userForm.value);
  this.userForm.reset();
  }
}
