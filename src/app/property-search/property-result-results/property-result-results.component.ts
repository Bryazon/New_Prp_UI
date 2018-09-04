import { Component, OnInit, Input } from '@angular/core';
import { IPropertySearchResult } from '../models/property-search';

@Component({
  selector: 'app-property-result-results',
  templateUrl: './property-result-results.component.html',
  styleUrls: ['./property-result-results.component.css']
})
export class PropertyResultResultsComponent implements OnInit {

@Input() propertyResults: IPropertySearchResult[]

  constructor() { }

  ngOnInit() {
  }

}
