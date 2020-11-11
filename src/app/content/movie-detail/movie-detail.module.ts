import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MovieDetailComponent],
  exports: [MovieDetailComponent]
})
export class MovieDetailComponentModule {}
