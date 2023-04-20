import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { DataserviceService } from './dataservice.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardsModule, TuiRootModule, BrowserAnimationsModule],
  providers: [DataserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
