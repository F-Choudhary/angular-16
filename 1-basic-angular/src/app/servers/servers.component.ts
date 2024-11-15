import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // as tag
  // selector: '[app-servers]',  //as attribute 
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = "No server was created"

  constructor(){
    setTimeout(() => {
      this.allowNewServer=true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created"
  }

  onUpdateServerName(){
    
  }
}
