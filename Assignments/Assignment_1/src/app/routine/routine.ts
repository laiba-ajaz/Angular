import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RoutineItem {
  icon: string;
  dotClass: string;
  time: string;
  name: string;
  desc: string;
  duration: string;
}

interface ChecklistItem {
  name: string;
  time: string;
  done: boolean;
}

@Component({
  selector: 'app-routine',
  imports: [CommonModule],
  templateUrl: './routine.html',
  styleUrl: './routine.css'
})
export class Routine {

  routine: RoutineItem[] = [
    { icon: 'ti-sun',        dotClass: 'td-amber',  time: '6:00 AM', name: 'Wake Up & Hydrate',  desc: 'Start with a glass of warm water with lemon to kickstart metabolism.',      duration: '5 min'  },
    { icon: 'ti-run',        dotClass: 'td-green',  time: '6:30 AM', name: 'Morning Exercise',   desc: '30 min walk, yoga or light workout to energize your body.',                duration: '30 min' },
    { icon: 'ti-moon',       dotClass: 'td-teal',   time: '7:15 AM', name: 'Meditation',         desc: '10 min breathing exercise to set a calm, focused mindset.',               duration: '10 min' },
    { icon: 'ti-book',       dotClass: 'td-blue',   time: '8:00 PM', name: 'Evening Reading',    desc: 'Read 20 pages before dinner to unwind and learn something new.',           duration: '20 min' },
    { icon: 'ti-journal',    dotClass: 'td-purple', time: '9:00 PM', name: 'Journaling',         desc: 'Write 3 things you are grateful for and reflect on your day.',             duration: '10 min' },
    { icon: 'ti-moon-stars', dotClass: 'td-gray',   time: '10:00 PM',name: 'Sleep',              desc: 'Lights off, no screens. Let your body recover and recharge.',             duration: '8 hours'},
  ];

  checklist: ChecklistItem[] = [
    { name: 'Morning Walk',    time: '6:30 AM',  done: true  },
    { name: 'Drink Water',     time: '8 glasses',done: true  },
    { name: 'Meditation',      time: '10 min',   done: true  },
    { name: 'Evening Reading', time: '8:00 PM',  done: false },
    { name: 'Journaling',      time: '9:00 PM',  done: false },
  ];
}