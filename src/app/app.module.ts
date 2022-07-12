import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './SharePages/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './SharePages/footer/footer.component';
import { AboutComponent } from './Pages/about/about.component';
import { LocationStrategy,HashLocationStrategy} from '@angular/common';
import { ContactComponent } from './Pages/contact/contact.component';
import { ParticulerestimationComponent } from './Pages/particulerestimation/particulerestimation.component';
import { EntrepriseestimationComponent } from './Pages/entrepriseestimation/entrepriseestimation.component';
import { ServicesComponent } from './Pages/services/services.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ParticulerestimationComponent,
    EntrepriseestimationComponent,
    ServicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
