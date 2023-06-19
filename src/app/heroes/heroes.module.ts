import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HeroeComponent,

  ],
  exports: [
    HeroeComponent
  ],
  imports: [
    CommonModule,
  ]
})

export class HeroesModule {}
