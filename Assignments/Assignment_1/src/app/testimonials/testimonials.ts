import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Testimonial {   

  quote: string;
  initials: string;
  avatarClass: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [ CommonModule ],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {

  testimonials : Testimonial[] = [
  {
    quote: 'ZenWell completely changed my mornings. I feel calmer and more productive than ever.',
    initials: 'S', avatarClass: 'av-green',
    name: 'Sara Ahmed', role: 'Yoga Instructor · 3 months'
  },
  {
    quote: 'The daily routine timeline is genius. My sleep has improved so much!',
    initials: 'M', avatarClass: 'av-blue',
    name: 'Mohammad Ali', role: 'Software Engineer · 6 weeks'
  },
  {
    quote: 'The breathing animation is incredibly soothing. I do box breathing every afternoon.',
    initials: 'A', avatarClass: 'av-teal',
    name: 'Ayesha Khan', role: 'Teacher · 2 months'
  },
  {
    quote: 'The wellness tips are actually backed by science — not just generic advice.',
    initials: 'R', avatarClass: 'av-purple',
    name: 'Rania Malik', role: 'Nutritionist · 4 months'
  },
  {
    quote: '21-day streak and counting! I have never stuck with a wellness app this long.',
    initials: 'O', avatarClass: 'av-amber',
    name: 'Omar Farooq', role: 'Student · 21 days'
  },
  {
    quote: 'ZenWell showed me I only need 10 minutes a day. The body scan meditation is my favorite.',
    initials: 'F', avatarClass: 'av-pink',
    name: 'Fatima Siddiqui', role: 'Mom of 3 · 5 weeks'
  },
];

}
