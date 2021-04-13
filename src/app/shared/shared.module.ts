import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CapitalizePipe,
    HighlightDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    CapitalizePipe,
    HighlightDirective
  ]
})
export class SharedModule { }
