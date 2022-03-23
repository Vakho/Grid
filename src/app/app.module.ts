import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CubesComponent } from './components/cubes/cubes.component';
import { ChangeBackgroundDirective } from './change-background.directive';

@NgModule({
  declarations: [AppComponent, CubesComponent, ChangeBackgroundDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
