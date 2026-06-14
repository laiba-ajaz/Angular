import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {

  logoName :string = 'ZenWell';
  navLinks = [
    { name: 'Home', icon: 'ti-home', path: '/' },
    { name: 'Habits', icon: 'ti-leaf', path: '/habits' },
    { name: 'Meditation', icon: 'ti-moon', path: '/meditation' },
    { name: 'Routine', icon: 'ti-clock', path: '/routine' },
    { name: 'Tips', icon: 'ti-bulb', path: '/#tips' }
  ];

}
