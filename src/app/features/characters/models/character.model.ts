import {OriginModel} from "./origin.model";
import {LocationModel} from "./location.model";
import {StatusType} from "../../../core/types/status.type";
import {GenderType} from "../../../core/types/gender.type";

export interface CharacterModel {
  id: number;
  name: string;
  status: StatusType;
  species: string;
  type: string;
  gender: GenderType;
  origin: OriginModel;
  location: LocationModel;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
