import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KoryPageRoutingModule } from './kory-routing.module';

import { KoryPage } from './kory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KoryPageRoutingModule
  ],
  declarations: [KoryPage]
})
export class KoryPageModule {}
