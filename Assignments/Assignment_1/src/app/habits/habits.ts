import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Habit {
  icon: string;
  iconClass: string;
  name: string;
  desc: string;
  streak: number;
  progress: number;
}

interface WeekDay {
  name: string;
  label: string;
  status: 'done' | 'today' | 'empty';
} 

@Component({
  selector: 'app-habits',
  imports: [CommonModule],
  templateUrl: './habits.html',
  styleUrl: './habits.css',
})
export class Habits {

   habits: Habit[] = [
    { icon: 'ti-run', iconClass: 'hi-green', name: 'Morning Walk', desc: '30 min walk each morning to boost energy and mood.', streak: 14, progress: 80 },
    { icon: 'ti-droplet', iconClass: 'hi-blue', name: 'Drink Water', desc: 'Drink 8 glasses of water daily to stay hydrated.', streak: 21, progress: 65 },
    { icon: 'ti-apple', iconClass: 'hi-teal', name: 'Eat Healthy', desc: 'Include fruits and veggies in every meal of the day.', streak: 7, progress: 55 },
    { icon: 'ti-moon', iconClass: 'hi-purple', name: 'Sleep Early', desc: 'Get 7–8 hours of quality sleep to recharge fully.', streak: 10, progress: 90 },
    { icon: 'ti-yoga', iconClass: 'hi-amber', name: 'Stretch & Yoga', desc: '15 min stretching to keep your body flexible and relaxed.', streak: 5, progress: 40 },
    { icon: 'ti-book', iconClass: 'hi-pink', name: 'Read Daily', desc: 'Read 20 pages a day to grow your mind and reduce stress.', streak: 18, progress: 72 },
  ];

  weekDays: WeekDay[] = [
    { name: 'Mon', label: 'M', status: 'done' },
    { name: 'Tue', label: 'T', status: 'done' },
    { name: 'Wed', label: 'W', status: 'done' },
    { name: 'Thu', label: 'T', status: 'done' },
    { name: 'Fri', label: 'T', status: 'today' },
    { name: 'Sat', label: 'S', status: 'empty' },
    { name: 'Sun', label: 'S', status: 'empty' },
  ];

  tips: string[] = [
    'Start with just one habit at a time',
    'Track your progress every evening',
    'Celebrate small wins to stay motivated',
  ];
}