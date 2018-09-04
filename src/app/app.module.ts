import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { PropertySearchComponent } from './property-search/property-search.component';
import { PropertyResultResultsComponent } from './property-search/property-result-results/property-result-results.component';
 

@NgModule({
   declarations: [
      AppComponent, PropertySearchComponent, PropertyResultResultsComponent 
   ],
   imports: [
      BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule 
   ],
   providers: [  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
