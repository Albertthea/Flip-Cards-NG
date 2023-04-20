import {Injectable} from "@angular/core";
import {CreatedCard} from "../models/CreatedCard";

@Injectable()
export class StateService {
  private _cardSides = new Map<string, boolean>();

  get cardSides(): Map<string, boolean> {
    return this._cardSides;
  }

  init(cards: CreatedCard[]): void {
    for (const card of cards) {
      if (!this._cardSides.has(card.id)) {
        this._cardSides.set(card.id, false);
      }
    }

    const state: string | null = localStorage.getItem('cardSides');

    if (state) {
      const stateMap: Map<string, boolean> = new Map(JSON.parse(state));

      for (const id of this._cardSides.keys()) {
        if (stateMap.has(id)) {
          this._cardSides.set(id, stateMap.get(id) || false);
        }
      }
    }

    this.updateState();
  }

  update(cards: CreatedCard[]): void {
    if (cards.length < this._cardSides.size) {
      const updatedCardSides = new Map<string, boolean>();

      for (const card of cards) {
        updatedCardSides.set(card.id, this._cardSides.get(card.id) || false);
      }

      this._cardSides = updatedCardSides;
    } else {
      for (const card of cards) {
        if (!this._cardSides.has(card.id)) {
          this._cardSides.set(card.id, false);
        }
      }
    }

    this.updateState();
  }

  updateState(): void {
    if (this._cardSides.size > 0) {
      localStorage.setItem('cardSides', JSON.stringify(Array.from(this._cardSides.entries())));
    } else {
      localStorage.removeItem('cardSides');
    }
  }

  setCardSide(id: string): void {
    this._cardSides.set(id, !this._cardSides.get(id));
    this.updateState();
  }

  flipAll(): void {
    for (const id of this._cardSides.keys()) {
      this._cardSides.set(id, true);
    }

    this.updateState();
  }
}
