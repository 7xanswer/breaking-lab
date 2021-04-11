import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SeasonService } from './services/http/season.service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MatSidenavModule,
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [SeasonService],
  exports: [HeaderComponent],
})
export class CoreModule {}
