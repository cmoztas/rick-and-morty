import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CharacterService} from "../../service/character.service";
import {Observable} from "rxjs";
import {ResponseAllCharactersModel} from "../../models/responseAllCharacters.model";
import {FormControl, FormGroup} from "@angular/forms";
import {DefaultObjectModel} from "../../../../core/models/default-object.model";
import {Router, UrlSerializer, UrlTree} from "@angular/router";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharactersComponent implements OnInit {
  characters$: Observable<ResponseAllCharactersModel>;
  filterForm: FormGroup;
  first: number;
  genders: DefaultObjectModel[];
  statuses: DefaultObjectModel[];
  queryString: string | undefined;

  constructor(
    private cs: CharacterService,
    private router: Router,
    private us: UrlSerializer
  ) {
    this.filterForm = new FormGroup({
      name: new FormControl(),
      type: new FormControl(),
      status: new FormControl(),
      gender: new FormControl()
    });

    this.first = 0;

    this.genders = [
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'},
      {label: 'Genderless', value: 'genderless'},
      {label: 'Unknown', value: 'unknown'}
    ];

    this.statuses = [
      {label: 'Alive', value: 'alive'},
      {label: 'Dead', value: 'dead'},
      {label: 'Unknown', value: 'unknown'}
    ];
  }

  ngOnInit(): void {
    this.characters$ = this.cs.getAllCharacters();
  }

  public clearFilter(): void {
    this.filterForm.reset();
    this.queryString = undefined;
    this.ngOnInit();
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.characters$ = this.cs.getAllCharacters((++event.page).toString(), this.queryString);
  }

  search(): void {
    let queryParams: any = {};

    Object.keys(this.filterForm.value).map((input: string): void => {
      if (this.filterForm.value[input]) {
        queryParams[input] = this.filterForm.value[input]
      }
    })

    const tree: UrlTree = this.router.createUrlTree([], {queryParams});
    this.queryString = this.us.serialize(tree).replace('/characters', '');
    this.characters$ = this.cs.getAllCharacters(undefined, this.queryString);
  }
}
