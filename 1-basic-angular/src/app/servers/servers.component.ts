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
  serverName = ""
  serverName2 = ''
  serverCreated = false;
  userName = ""; // for assigment
  servers = ['Testserver', 'Testserver 2']

  constructor(){
    setTimeout(() => {
      this.allowNewServer=true;
    },2000)
  }

  onCreateServer(){
    if(this.serverName!==''){
      this.serverCreationStatus = "Server was created! Name is "+ this.serverName;
      this.serverName = ''
    }
    else{
      alert("Please enter Server Name")
    }
  }

  onCreateServer2(){
    this.serverCreated = true;
    this.servers.push(this.serverName2)
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
    // console.log(event);
    
  }

  // for assigment
  onReset(){
    this.userName = "";
  }
}
