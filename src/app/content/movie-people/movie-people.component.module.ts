import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePeopleComponent } from './movie-people.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MoviePeopleComponent],
  exports: [MoviePeopleComponent]
})
export class MoviePeopleComponentModule {}
