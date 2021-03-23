import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipsterdemo20210323SharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [Jhipsterdemo20210323SharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent],
})
export class AuditsModule {}
