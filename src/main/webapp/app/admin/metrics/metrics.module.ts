import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipsterdemo20210323SharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [Jhipsterdemo20210323SharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
