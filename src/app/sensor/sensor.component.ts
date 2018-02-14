import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {SensorService} from '../sensor.service';
import {AmChartsService, AmChart} from '@amcharts/amcharts3-angular';

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
  chartData = [ {
    'country': 'USA',
    'visits': 4252
  }, {
    'country': 'China',
    'visits': 1882
  }, {
    'country': 'Japan',
    'visits': 1809
  }, {
    'country': 'Germany',
    'visits': 1322
  }, {
    'country': 'UK',
    'visits': 1122
  }, {
    'country': 'France',
    'visits': 1114
  }, {
    'country': 'India',
    'visits': 984
  }, {
    'country': 'Spain',
    'visits': 711
  }, {
    'country': 'Netherlands',
    'visits': 665
  }, {
    'country': 'Russia',
    'visits': 580
  }, {
    'country': 'South Korea',
    'visits': 443
  }, {
    'country': 'Canada',
    'visits': 441
  }, {
    'country': 'Brazil',
    'visits': 395
  }, {
    'country': 'Italy',
    'visits': 386
  }, {
    'country': 'Australia',
    'visits': 384
  }, {
    'country': 'Taiwan',
    'visits': 338
  }, {
    'country': 'Poland',
    'visits': 328
  } ];
  private chart: AmChart;
  constructor(private _sensorService: SensorService, private AmCharts: AmChartsService) {
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
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': this.chartData,
      'categoryField': 'country',
      'graphs': [ {
        'valueField': 'visits',
        'type': 'column'
      }]
    });
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
