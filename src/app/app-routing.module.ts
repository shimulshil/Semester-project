import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { GameCardComponent } from './game-card/game-card.component';

const routes: Routes = [
  {
    path: 'game-card',
    loadChildren: () => import('./game-card/game-card.component').then( m => m.GameCardComponent)
  },
  {
    path: 'game-card',
    redirectTo: 'game-card',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
