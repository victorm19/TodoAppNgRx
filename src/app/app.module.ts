import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoContainerModule } from './todo-container/todo-container.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    TodoContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
