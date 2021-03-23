import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipsterdemo20210323SharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [Jhipsterdemo20210323SharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent],
})
export class LogsModule {}
