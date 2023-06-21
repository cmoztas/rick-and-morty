import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './components/list/characters.component';
import {CharacterService} from "./service/character.service";
import {PrimengModule} from "../../shared/primeng.module";
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    PrimengModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [CharacterService]
})
export class CharactersModule { }
