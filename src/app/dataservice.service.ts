import { Injectable } from '@angular/core';
import { CardContent } from 'src/shared/models/CardContent';
import { CreatedCard } from 'src/shared/models/CreatedCard';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  data: CardContent[] = [];

  constructor() {}

  getCardData() {
    return this.data;
  }
}
