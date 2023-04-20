import {Observable} from "rxjs";
import {CardContent} from "./CardContent";
import {InjectionToken} from "@angular/core";
import {CreatedCard} from "./CreatedCard";

export const ICardsApiServiceToken = new InjectionToken('ICardsApiService');

export interface ICardsApiService {
  getAll(): Observable<CreatedCard[]>;

  add(card: CardContent): Observable<void>;

  delete(id?: string): Observable<void>;
}
