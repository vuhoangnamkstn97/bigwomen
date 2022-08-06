import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { RoadmapScreenComponent } from './screens/roadmap-screen/roadmap-screen.component';

const routes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'about', component: AboutScreenComponent },
  { path: 'roadmap', component: RoadmapScreenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
