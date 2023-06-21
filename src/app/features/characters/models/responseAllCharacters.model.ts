import {DefaultResponseModel} from "../../../core/models/default-response.model";
import {CharacterModel} from "./character.model";

export interface ResponseAllCharactersModel extends DefaultResponseModel {
  results: CharacterModel[];
}
