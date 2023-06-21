import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
