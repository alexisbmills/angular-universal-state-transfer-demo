import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './view-model/messages/messages.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule { }
