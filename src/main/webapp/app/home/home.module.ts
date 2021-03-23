import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterdemo20210323SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipsterdemo20210323SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Jhipsterdemo20210323HomeModule {}
