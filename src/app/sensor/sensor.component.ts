import {Component, OnInit} from '@angular/core';
import {SensorService} from '../sensor.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  data = {
    'Volts': 0,
    'L1': 0,
    'L2': 0
  };
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
    this._sensorService.on('Sensor', (data: any) => {
      console.log(data.msg);
      this.data = data.msg;
    });
  }
}
