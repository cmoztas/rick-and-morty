import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent implements OnInit {
  public routes: MenuItem[] = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.routes = [
      {
        label: 'Ana sayfa',
        icon: 'pi pi-home',
        command: () => {
          void this.router.navigate(['/']);
        }
      },
      {
        label: 'Characters',
        icon: 'pi pi-users',
        routerLink: '/characters'
      }
    ];
  }
}
