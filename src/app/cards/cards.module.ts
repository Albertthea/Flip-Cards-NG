import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsAddModule } from './cards-add/cards-add.module';
import { CardsListModule } from './cards-list/cards-list.module';
import { CardsItemModule } from './cards-item/cards-item.module';
import { ICardsApiServiceToken } from '../../shared/models/ICardsApiService';
import { CardsApiService } from '../../shared/services/cardsApi.service';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from '../../shared/services/state.service';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [CardsComponent],
  exports: [CardsComponent],
  providers: [
    { provide: ICardsApiServiceToken, useClass: CardsApiService },
    StateService,
  ],
  imports: [
    CommonModule,
    CardsAddModule,
    CardsListModule,
    CardsItemModule,
    HttpClientModule,
    TuiButtonModule,
  ],
})
export class CardsModule {}
