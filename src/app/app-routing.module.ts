import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PiadasComponent } from './pages/respositorio/piadas/piadas.component';

const routes: Routes = [
  {path:'',redirectTo:'portfolio',pathMatch: 'full'},
  {path:'portfolio',component:PortfolioComponent},
  {path:'piadas',component:PiadasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
