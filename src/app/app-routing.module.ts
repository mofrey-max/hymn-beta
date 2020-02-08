import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'hymn0001', loadChildren: './pages/hymn0001/hymn0001.module#Hymn0001PageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
