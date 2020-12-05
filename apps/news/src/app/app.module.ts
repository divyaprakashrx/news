import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CardHorizontalHomeComponent } from './components/card-horizontal-home/card-horizontal-home.component';
import { CardHorizontalTitleOnlyComponent } from './components/card-horizontal-title-only/card-horizontal-title-only.component';
import { CardHorizontalGridComponent } from './components/card-horizontal-grid/card-horizontal-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardHorizontalHomeComponent,
    CardHorizontalTitleOnlyComponent,
    CardHorizontalGridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
