import {Component, OnInit} from '@angular/core';
import {SensorService} from '../sensor.service';

@Component({
  selector: 'app-weather',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _sensorService: SensorService) {
  }
  ngOnInit() {
    this._sensorService.emit('Client_asking', {
      msg: 'Client to server, can u hear me server?'
    });
    this._sensorService.on('Server_asking', (data: any) => {
      console.log(data.msg);
      this._sensorService.emit('Client_response', {
        msg: 'Yes, its working for me!'
      });
      this._sensorService.on('Server_response', (_data: any) => {
        console.log(_data.msg);
      });
    });
  }
}
