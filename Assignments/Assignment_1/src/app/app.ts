import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Habits } from './habits/habits';
import { Routine } from './routine/routine';
import { Tips } from './tips/tips';
import { Testimonials } from './testimonials/testimonials';
import { Footer } from './footer/footer';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Navbar , Hero  , Habits , Routine , Tips , Testimonials  , Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment_1');
}
