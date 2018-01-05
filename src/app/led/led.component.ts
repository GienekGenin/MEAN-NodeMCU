import {Component, OnInit} from '@angular/core';
import {SensorService} from '../sensor.service';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  constructor(private _sensorService: SensorService) { }

  ngOnInit() {
    this._sensorService.emit('event1', {
      msg: 'Client to server, can u hear me server?'
    });
    this._sensorService.on('event2', (data: any) => {
      console.log(data.msg);
      this._sensorService.emit('event3', {
        msg: 'Yes, its working for me!'
      });
      this._sensorService.on('event4', (_data: any) => {
        console.log(_data.msg);
      });
    });
  }

}
