import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({ providedIn: 'root' })
export class SignalrService {
    constructor(
        ) { }


    hubConnection:signalR.HubConnection;

    startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:4200/chat', {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
        })
        .build();
    
        this.hubConnection
        .start()
        .then(() => {
            console.log('Hub Connection Started!');
        })
        .catch(err => console.log('Error while starting connection: ' + err))
    }


    askServer() {
        this.hubConnection.invoke("AskServer", "hi")
            .catch(err => console.error(err));
    }
    
    askServerListener() {
        this.hubConnection.on("askServerResponse", (someText) => {
            console.log(someText);
        })
    }
}