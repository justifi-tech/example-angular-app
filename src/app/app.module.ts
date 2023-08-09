import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentLibraryModule } from '@justifi/angular-library/dist/component-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
