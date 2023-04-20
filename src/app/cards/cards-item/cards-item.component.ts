import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreatedCard } from '../../../shared/models/CreatedCard';

@Component({
  selector: 'app-cards-item',
  templateUrl: './cards-item.component.html',
  styleUrls: ['./cards-item.component.less'],
})
export class CardsItemComponent {
  @Input() content!: CreatedCard;
  @Input() isCardFlipped!: boolean;
  @Output() delete = new EventEmitter<CreatedCard>();

  deleteThisCard(event: Event): void {
    event.stopPropagation();
    this.delete.next(this.content);
  }
}
