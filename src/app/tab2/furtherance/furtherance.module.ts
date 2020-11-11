import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FurtherancePageRoutingModule } from './furtherance-routing.module';

import { FurtherancePage } from './furtherance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FurtherancePageRoutingModule
  ],
  declarations: [FurtherancePage]
})
export class FurtherancePageModule {}
