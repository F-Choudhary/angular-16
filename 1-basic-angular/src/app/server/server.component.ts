import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId:number = 10; //though its not necessary to give type
    serverStatus = 'offline';

}