import {ICardsApiService} from "../models/ICardsApiService";
import {CardContent} from "../models/CardContent";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CreatedCard} from "../models/CreatedCard";

const host = 'http://localhost:3000';

@Injectable()
export class CardsApiService implements ICardsApiService {
  constructor(private httpService: HttpClient) {
  }

  add(card: CardContent): Observable<void> {
    return this.httpService.post<void>(host, card);
  }

  delete(id: string): Observable<void> {
    return this.httpService.delete<void>(`${host}/${id}`);
  }

  getAll(): Observable<CreatedCard[]> {
    return this.httpService.get<CreatedCard[]>(host);
  }
}
