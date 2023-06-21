import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ResponseAllCharactersModel} from "../models/responseAllCharacters.model";
import {CharacterModel} from "../models/character.model";

@Injectable()
export class CharacterService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllCharacters(page?: string, queryString?: string): Observable<ResponseAllCharactersModel> {
    let url: string = page
      ? `${environment.endpoint}/character?page=${page}`
      : `${environment.endpoint}/character`;

    if (queryString) {
      page
        ? url += queryString.replace('?', '&')
        : url += queryString
    }

    return this.http.get<ResponseAllCharactersModel>(url);
  }

  public getCharacter(id: string): Observable<CharacterModel> {
    return this.http.get<CharacterModel>(`${environment.endpoint}/character/${id}`);
  }
}
