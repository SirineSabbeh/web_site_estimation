import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { EntrepriseestimationComponent } from './Pages/entrepriseestimation/entrepriseestimation.component';
import { HomeComponent } from './Pages/home/home.component';
import { ParticulerestimationComponent } from './Pages/particulerestimation/particulerestimation.component';
import { ServicesComponent } from './Pages/services/services.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'estimation',
  children:[
    {path:'particulerestimation',component:ParticulerestimationComponent},
    {path:'entrepriseestimation',component:EntrepriseestimationComponent}
  ]},
  {
    path:'services',component:ServicesComponent
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
