import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsAddComponent } from './cards-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [CardsAddComponent],
  exports: [CardsAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiButtonModule,
    ReactiveFormsModule,
  ],
})
export class CardsAddModule {}
