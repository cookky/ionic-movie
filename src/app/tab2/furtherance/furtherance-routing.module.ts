import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FurtherancePage } from './furtherance.page';

const routes: Routes = [
  {
    path: '',
    component: FurtherancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FurtherancePageRoutingModule {}
