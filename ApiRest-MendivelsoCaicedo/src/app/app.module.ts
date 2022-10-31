import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModeloDirective } from './directives/modelo.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { EmpleadosRoutingModule } from './empleados/empleados-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    ModeloDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
