import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadRoutingModule } from './head-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialsModule } from '../materials/materials.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TopbarComponent, NavbarComponent],
  imports: [
    CommonModule,
    HeadRoutingModule,
    MaterialsModule,
    FontAwesomeModule,
  ],
  exports: [TopbarComponent, NavbarComponent],
})
export class HeadModule {}
