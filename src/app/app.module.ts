import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './events-list/events-thumbnail.component';
import { CreateEventComponent } from './create-event/create-event.component'

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';
import {eventsreducer} from './shared/events.reducer.store';
import {EventsService} from './services/events.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) ,
    StoreModule.provideStore({eventsreducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    StoreLogMonitorModule

  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
