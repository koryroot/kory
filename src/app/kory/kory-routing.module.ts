import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoryPage } from './kory.page';

const routes: Routes = [
  {
    path: '',
    component: KoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KoryPageRoutingModule {}
