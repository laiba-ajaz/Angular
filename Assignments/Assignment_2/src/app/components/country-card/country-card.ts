import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../models/CountryModel';
import { CountryService } from '../../services/country-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './country-card.html',
  styleUrls: ['./country-card.css'],
})

export class CountryCard implements OnInit {

  allCountries: any[] =[];
  searchQuery:string = "";
  countryData: any;

  constructor(private countryService: CountryService) {}


  ngOnInit() {
    this.countryService.getCountries().subscribe((response: any) =>{
      this.allCountries = response.data;
      console.log(this.allCountries);
    })
  }

  onSearch() {
   this.countryData = this.allCountries.find((c: any) => 
     c.country.toLowerCase() === this.searchQuery.toLowerCase()
   );
}

}
