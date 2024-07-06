import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CabecalhoComponent } from './pages/portfolio/cabecalho/cabecalho.component';
import { MenuComponent } from './pages/portfolio/menu/menu.component';
import { SobreComponent } from './pages/portfolio/sobre/sobre.component';
import { ProjetosComponent } from './pages/portfolio/projetos/projetos.component';
import { PiadasComponent } from './pages/respositorio/piadas/piadas.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    CabecalhoComponent,
    MenuComponent,
    SobreComponent,
    ProjetosComponent,
    PiadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
