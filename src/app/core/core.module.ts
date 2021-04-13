import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonService } from './services/http/season.service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {FooterComponent} from './components/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [SeasonService],
  exports: [FooterComponent],
})
export class CoreModule {}
