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
    path: 'start-screen',
    loadChildren: () => import('./pages/start-screen/start-screen.module').then( m => m.StartScreenPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/opening-screen/opening-screen.module').then( m => m.OpeningScreenPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'welcome-screen',
    loadChildren: () => import('./pages/welcome-screen/welcome-screen.module').then( m => m.WelcomeScreenPageModule)
  },
  {
    path: 'pick-zone',
    loadChildren: () => import('./pages/pick-zone/pick-zone.module').then( m => m.PickZonePageModule)
  },
  {
    path: 'temp-sum',
    loadChildren: () => import('./pages/temp-sum/temp-sum.module').then( m => m.TempSumPageModule)
  },
  {
    path: 'zone-screen',
    loadChildren: () => import('./pages/zone-screen/zone-screen.module').then( m => m.ZoneScreenPageModule)
  },
  {
    path: 'adjust-temp',
    loadChildren: () => import('./pages/adjust-temp/adjust-temp.module').then( m => m.AdjustTempPageModule)
  },
  {
    path: 'system-solution',
    loadChildren: () => import('./pages/system-solution/system-solution.module').then( m => m.SystemSolutionPageModule)
  },
  {
    path: 'systemreseted',
    loadChildren: () => import('./pages/systemreseted/systemreseted.module').then( m => m.SystemresetedPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
