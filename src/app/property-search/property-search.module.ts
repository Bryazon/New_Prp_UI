import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertySearchComponent } from './property-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyResultResultsComponent } from './property-result-results/property-result-results.component';

@NgModule({
  imports: [
     CommonModule, BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
 
  declarations: [PropertySearchComponent, PropertyResultResultsComponent]
})
export class PropertySearchModule { }
