import { CardContent } from '../models/CardContent';
import { Inject, Injectable } from '@angular/core';
import {
  ICardsApiService,
  ICardsApiServiceToken,
} from '../models/ICardsApiService';
import { CreatedCard } from '../models/CreatedCard';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  public _cards: CreatedCard[] = [];

  constructor(
    private stateService: StateService,
    @Inject(ICardsApiServiceToken) private service: ICardsApiService
  ) {}

  get cards(): CreatedCard[] {
    return this._cards;
  }

  initialize(mode: 'init' | 'repeat'): void {
    this.service.getAll().subscribe((cards) => {
      this._cards = cards;

      switch (mode) {
        case 'init':
          this.stateService.init(cards);
          break;
        case 'repeat':
          this.stateService.update(cards);
      }
    });
  }

  addCard(card: CardContent): void {
    this.service.add(card).subscribe(() => {
      this.initialize('repeat');
    });
  }

  delCard(card: CreatedCard): void {
    this.service.delete(card?.id).subscribe(() => {
      this.initialize('repeat');
    });
  }
}
