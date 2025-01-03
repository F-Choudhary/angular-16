import { Component, Input, SimpleChange, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated  // Options: Emulated, ShadowDom, None
})
export class ServerElementComponent {
 @Input({required:true,alias:'srvElement'}) element:{type:string,name:string,content:string}

 constructor(){
  console.log('constructor Called');
 }
 
 ngOnChanges(changes:SimpleChange){
  console.log('ngOnChange Called');
  console.log(changes);
 }
 ngOnInit(){
  console.log('ngOnInit Called');
 }
}
