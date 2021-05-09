import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'room-zone-select',
    loadChildren: () =>
      import('./pages/room-zone-select/room-zone-select.module').then(
        (m) => m.RoomZoneSelectPageModule
      ),
  },
  {
    path: 'zone-status',
    loadChildren: () =>
      import('./pages/zone-status/zone-status.module').then(
        (m) => m.ZoneStatusPageModule
      ),
  },
  {
    path: 'change-clima',
    loadChildren: () =>
      import('./pages/change-clima/change-clima.module').then(
        (m) => m.ChangeClimaPageModule
      ),
  },
  {
    path: 'only-zone',
    loadChildren: () =>
      import('./pages/only-zone/only-zone.module').then(
        (m) => m.OnlyZonePageModule
      ),
  },
  {
    path: 'poll',
    loadChildren: () =>
      import('./pages/poll/poll.module').then((m) => m.PollPageModule),
  },
  {
    path: 'game1',
    loadChildren: () =>
      import('./pages/game1/game1.module').then((m) => m.Game1PageModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/load-logo/load-logo.module').then(
        (m) => m.LoadLogoPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/help/help.module').then((m) => m.HelpPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
