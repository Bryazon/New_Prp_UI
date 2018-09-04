import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { IPropertySearchResult } from '../models/property-search'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertySearchService {

  private serviceUrl = 'https://webapplication720180903073005.azurewebsites.net/api/properties';

constructor(private http : HttpClient ) { }

getPropertyBySearchTerm(searchTerm:string, minPrice: number, maxPrice: number) :  Observable<IPropertySearchResult[]>  {

  if (searchTerm || minPrice || maxPrice)
  {
    let params = new HttpParams().set('criteria', searchTerm).set('minPrice', minPrice.toString()).set('maxPrice', maxPrice.toString());

    return this.http.get<IPropertySearchResult[]>(this.serviceUrl, { params: params });
  }
  else return this.http.get<IPropertySearchResult[]>(this.serviceUrl);
}

}
