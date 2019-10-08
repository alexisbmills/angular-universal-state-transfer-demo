import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './view-model/messages/messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { WebpPolyfillModule } from '../shared/webp-polyfill/webp-polyfill.module';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    WebpPolyfillModule.forChild()
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule { }
