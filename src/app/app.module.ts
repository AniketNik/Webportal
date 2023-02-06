import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarrersComponent } from './carrers/carrers.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component'

@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        FooterComponent,
        NavbarComponent,
        AboutusComponent,
        ContactusComponent,
        CarouselComponent,
        ClientsComponent,
        ServicesComponent,
        TeamComponent,
        CarrersComponent ,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        
    ]
})
export class AppModule { }
