import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsItemComponent } from './cards-item.component';
import { TuiSvgModule } from '@taiga-ui/core';

@NgModule({
  declarations: [CardsItemComponent],
  exports: [CardsItemComponent],
  imports: [CommonModule, TuiSvgModule],
})
export class CardsItemModule {}
