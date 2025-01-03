import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent: string}>()
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent: string}>()
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') ServerContentInput:ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName:nameInput.value,
      // serverName:this.newServerContent,
      // serverContent:this.newServerContent
      serverContent:this.ServerContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // console.log(this.ServerContentInput.nativeElement.value);
    
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      //serverName:this.newServerContent,
      // serverContent:this.newServerContent
      serverContent:this.ServerContentInput.nativeElement.value

    })
  }
}
