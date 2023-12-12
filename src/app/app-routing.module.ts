import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompoundCardComponent } from './compound-card/compound-card.component';
import { CompoundDetailsComponent } from './compound-details/compound-details.component';

const routes: Routes = [
  { path: '', component: CompoundCardComponent },
  { path: 'details/:id', component: CompoundDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
