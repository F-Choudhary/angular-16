import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated  // Options: Emulated, ShadowDom, None
})
export class ServerElementComponent {
 @Input({required:true,alias:'srvElement'}) element:{type:string,name:string,content:string}
}
