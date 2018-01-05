import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect();
  }

  ngOnInit() {
    this.socket.emit('event1', {
      msg: 'Client to server, can u hear me server?'
    });
    this.socket.on('event2', (data: any) => {
      console.log(data.msg);
      this.socket.emit('event3', {
        msg: 'Yes, its working for me!'
      });
      this.socket.on('event4', (_data: any) => {
        console.log(_data.msg);
      });
    });
  }

}
