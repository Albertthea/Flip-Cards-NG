import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list.component';
import { CardsItemModule } from '../cards-item/cards-item.module';

@NgModule({
  declarations: [CardsListComponent],
  exports: [CardsListComponent],
  imports: [CommonModule, CardsItemModule],
})
export class CardsListModule {}
