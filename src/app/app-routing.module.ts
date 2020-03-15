import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'tblGenerator',
    loadChildren: () => import('./table-generator/table-generator.module').then(m => m.TableGeneratorModule)
  },
  {
    path: 'zenbaki',
    loadChildren: () => import('./zenbaki-jokoa/zenbaki-jokoa.module').then(m => m.ZenbakiJokoaModule)
  },
  {
    path: 'calendarCreator',
    loadChildren: () => import('./calendar-creator/calendar-creator.module').then(m => m.CalendarCreatorModule)
  },
  {
    path: 'musicBox',
    loadChildren: () => import('./music-box/music-box.module').then(m => m.MusicBoxModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
