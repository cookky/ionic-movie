import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieComponent } from './movie.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MovieComponent],
  exports: [MovieComponent]
})
export class MovieComponentModule {}
