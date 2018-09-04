import { Component, OnInit } from '@angular/core';
import { PropertySearchService } from './services/property-search.service';
import { IPropertySearchResult } from './models/property-search';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  priceArray: number[] = [ 50000, 75000, 100000, 150000, 200000, 250000, 300000, 400000, 500000, 750000, 1000000];
  searchResult : IPropertySearchResult[];
  searchTerm: string = "";
  minPrice: number = 0;
  maxPrice: number = 0;
 
  constructor(private searchService : PropertySearchService) { }

  fireSearch()
  { 
 
    this.searchService.getPropertyBySearchTerm(this.searchTerm, this.minPrice, this.maxPrice).subscribe(
     
      searchResult => 
      {
        this.searchResult = searchResult;  
        console.log(searchResult);
        searchResult
        for (let entry of searchResult) {
          console.log(entry.address.fullAddress); // 1, "string", false
      }
      }
   );
  }

  ngOnInit() {
  }

  private setMaxPrice(maxPrice: number)
  {
    this.maxPrice = maxPrice;
    this.fireSearch();
  }

  private setMinPrice(minPrice: number)
  { 
    this.minPrice = minPrice;  
    
    if (this.minPrice > this.maxPrice)
    {
      this.maxPrice = 0;
    }
    this.fireSearch();
  }

  private searchKeyDown(event: any)
{
    if (event.keyCode == 13)
    {
       this.fireSearch();
    }   
}

}
