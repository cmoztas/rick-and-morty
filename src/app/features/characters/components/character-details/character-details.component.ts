import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterService} from "../../service/character.service";
import {CharacterModel} from "../../models/character.model";
import {Observable} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: Observable<CharacterModel>;

  constructor(
    public location: Location,
    private ar: ActivatedRoute,
    private cs: CharacterService
  ) {
  }

  ngOnInit() {
    this.character = this.cs.getCharacter(this.ar.snapshot.params['id']);
  }
}
