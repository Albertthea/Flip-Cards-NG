import { Component, OnInit } from '@angular/core';
import { CardContent } from '../../shared/models/CardContent';
import { CardsService } from '../../shared/services/cards.service';
import { CreatedCard } from '../../shared/models/CreatedCard';
import { StateService } from '../../shared/services/state.service';
import { DataserviceService } from '../dataservice.service';
import { CardsItemComponent } from './cards-item/cards-item.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less'],
})
export class CardsComponent {
  // sCards: CardContent[] = [];
  constructor(
    public cardsService: CardsService,
    public stateService: StateService
  ) {}

  // constructor(private _cardData: DataserviceService) {}

  ngOnInit(): void {
    this.cardsService.initialize('init');
  }

  addCard(value: CardContent): void {
    // this.sCards.push(card);
    this.cardsService.addCard(value);
  }

  deleteCard(card: CreatedCard): void {
    // this.sCards.unshift(card);
    this.cardsService.delCard(card);
  }
}
