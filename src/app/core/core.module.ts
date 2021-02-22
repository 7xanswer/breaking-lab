import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SeasonService } from './services/http/season.service';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  providers: [SeasonService],
  exports: [HeaderComponent]

})
export class CoreModule { }
