import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { UniversalModule } from 'angular2-universal';
import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpModule } from '@angular/http';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
    ],
})
export class AppModule {
}