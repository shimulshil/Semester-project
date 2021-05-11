import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/the-tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./pages/the-tabs/tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./pages/the-tabs/tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./pages/the-tabs/tab3/tab3.module').then(m => m.Tab3PageModule)
  },

  
  {
    path: '',
    loadChildren: () => import('./pages/opening-screen/opening-screen.module').then( m => m.OpeningScreenPageModule)
  },
  
  
  {
    path: 'zona-status',
    loadChildren: () => import('./pages/zona-status/zonastatus.module').then( m => m.zonastatusPageModule)
  },
  {
    path: 'temp-sum',
    loadChildren: () => import('./pages/actual-status/actualstatus.module').then( m => m.actualstatusPageModule)
  },
  
  
  {
    path: 'change-clima',
    loadChildren: () => import('./pages/change-clima/change-clima.module').then( m => m.ChangeClimaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'poll',
    loadChildren: () => import('./pages/poll/poll.module').then( m => m.PollPageModule)
  },
  
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/the-game/game/game.component').then( m => m.GameComponent)
  },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
