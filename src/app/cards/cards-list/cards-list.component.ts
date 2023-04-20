import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreatedCard } from '../../../shared/models/CreatedCard';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less'],
})
export class CardsListComponent {
  @Input() allCardsContent!: CreatedCard[];
  @Input() cardSides!: Map<string, boolean>;
  @Output() delete = new EventEmitter<CreatedCard>();
  @Output() flip = new EventEmitter<string>();

  deleteCard(card: CreatedCard): void {
    this.delete.emit(card);
  }

  flipCard(id: string): void {
    this.flip.emit(id);
  }
}
