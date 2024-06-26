import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2Component } from './exo2/exo2.component';
import { Exo3Component } from './exo3/exo3.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'exo1', component: Exo1Component },
  { path: 'exo2', component: Exo2Component },
  { path: 'exo3', component: Exo3Component },
  { path: 'details', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '', redirectTo: '/exo1', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
