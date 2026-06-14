import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {
  
  stats = [
    { value: '8K+', suffix: 'h', label: 'Sleep Time' },
    { value: '21', suffix: '', label: 'Day Streak' },
    { value: '10', suffix: 'm', label: 'Meditation' }
  ];

  startJourney() {
    alert('Journey started!');
  
  }

  watchVideo() {
    alert('Video clicked!');
  }
}