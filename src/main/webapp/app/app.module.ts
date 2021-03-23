import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipsterdemo20210323SharedModule } from 'app/shared/shared.module';
import { Jhipsterdemo20210323CoreModule } from 'app/core/core.module';
import { Jhipsterdemo20210323AppRoutingModule } from './app-routing.module';
import { Jhipsterdemo20210323HomeModule } from './home/home.module';
import { Jhipsterdemo20210323EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipsterdemo20210323SharedModule,
    Jhipsterdemo20210323CoreModule,
    Jhipsterdemo20210323HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipsterdemo20210323EntityModule,
    Jhipsterdemo20210323AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jhipsterdemo20210323AppModule {}
