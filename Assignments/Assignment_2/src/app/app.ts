import { Component, signal  } from '@angular/core';
import { Home } from './components/home/home';
import {  HttpClient} from '@angular/common/http';
import { CountryCard } from './components/country-card/country-card';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Home  , CountryCard , FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment_2');
}
