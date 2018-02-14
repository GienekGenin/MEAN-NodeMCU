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
    'Volts': 4.5,
    'L1': 0,
    'L2': 0
  };
  chartData = [  {
    'Time': '0',
    'Volts': 4.5
  }];
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
      this.data = data.msg;
      const today = new Date();
      const h = today.getHours();
      const m = today.getMinutes();
      const s = today.getSeconds();
      const time = h + ':' + m + ':' + s;
      console.log('chartData: ', this.chartData);
      if (this.chartData[this.chartData.length - 1].Volts !== data.msg.Volts) {
        this.chartData.push({'Time': time, 'Volts': data.msg.Volts});
        this.AmCharts.updateChart(this.chart, () => {
          // Change whatever properties you want
          this.chart.dataProvider = this.chartData;
        });
      }
    });
  }
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': this.chartData,
      'categoryField': 'Time',
      'graphs': [ {
        'valueField': 'Volts',
        'type': 'line',
        'fillAlphas': 0.5,
        'bullet': 'round',
        'lineColor': '#8d1cc6'
      }]
    });
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
