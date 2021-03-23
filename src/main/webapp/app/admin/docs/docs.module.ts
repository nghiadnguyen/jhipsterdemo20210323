import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipsterdemo20210323SharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [Jhipsterdemo20210323SharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
