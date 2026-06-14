import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Tip {
  icon: string;
  iconClass: string;
  tag: string;
  tagClass: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-tips',
  imports: [CommonModule],
  templateUrl: './tips.html',
  styleUrl: './tips.css',
})
export class Tips {


 tips = [
  { icon: 'ti-droplet', iconClass: 'tci-green',  tag: 'Hydration',       tagClass: 'tag-green',  title: 'Drink Water First Thing',    desc: 'Your body loses water overnight. Drinking 500ml right after waking up boosts metabolism by up to 30% for the next hour.' },
  { icon: 'ti-moon',    iconClass: 'tci-blue',   tag: 'Sleep',           tagClass: 'tag-blue',   title: 'Consistent Sleep Schedule',  desc: 'Going to bed and waking at the same time — even on weekends — regulates your circadian rhythm for deeper, better sleep.' },
  { icon: 'ti-brain',   iconClass: 'tci-teal',   tag: 'Mental Health',   tagClass: 'tag-teal',   title: '5-Minute Gratitude Journal', desc: 'Writing 3 things you\'re grateful for each day rewires the brain toward positivity and reduces anxiety significantly over time.' },
  { icon: 'ti-apple',   iconClass: 'tci-amber',  tag: 'Nutrition',       tagClass: 'tag-amber',  title: 'Eat the Rainbow',            desc: 'Different colored fruits and vegetables contain unique antioxidants. Aim for 5 colors on your plate every day for complete nutrition.' },
  { icon: 'ti-walk',    iconClass: 'tci-purple', tag: 'Movement',        tagClass: 'tag-purple', title: 'Walk After Every Meal',      desc: 'A 10-minute walk after eating improves digestion, lowers blood sugar spikes, and burns extra calories without any gym required.' },
  { icon: 'ti-phone-off',iconClass:'tci-pink',   tag: 'Digital Wellness',tagClass: 'tag-pink',   title: 'No Screens Before Bed',      desc: 'Blue light from screens suppresses melatonin production. Put your phone away 1 hour before sleep for dramatically better rest.' },
];
}
