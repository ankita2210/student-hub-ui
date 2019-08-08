import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidingComponent } from './sliding/sliding.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SlidingComponent],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule, FormsModule
  ],
  exports: [
    SlidingComponent
  ],
  bootstrap: [SlidingComponent]
})
export class SliderModule { }
