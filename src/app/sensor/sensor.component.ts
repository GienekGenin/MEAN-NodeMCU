import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {SensorService} from '../sensor.service';
import {AmChartsService, AmChart} from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  // data = {
  //   'Volts': 4.5,
  //   'L1': 0,
  //   'L2': 0
  // };
  chartData = [{
    'Time': '0:0:0',
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
      this.chartData.forEach(function (chData) {
        console.log(chData.Time, chData.Volts);
        data.msg.forEach(function (dbData) {
          console.log('dbData: ', dbData.Time, dbData.Volts); // 00:00:00
          getHoursInt(dbData.Time);
          getMinInt(dbData.Time);
          getSecInt(dbData.Time);
          // console.log('h: ', this.getHoursInt(dbData.Time));
        });
      });
      /*if (this.chartData[this.chartData.length - 1].Volts !== data.msg.Volts) {
        this.chartData.push({'Time': time, 'Volts': data.msg.Volts});
        this.AmCharts.updateChart(this.chart, () => {
          // Change whatever properties you want
          this.chart.dataProvider = this.chartData;
        });
      }*/
    });
  }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': this.chartData,
      'categoryField': 'Time',
      'graphs': [{
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

function getHoursInt(str) {
  console.log('Hours: ', parseInt(str, 0));
  return parseInt(str, 0);
}

function getSecInt(str) {
  let firstSemi;
  let sStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ':') {
      firstSemi = i;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (firstSemi < i) {
      sStr = sStr + str[i];
    }
  }
  console.log('Seconds: ', parseInt(sStr, 0));
  return parseInt(sStr, 0);
}

function getMinInt(str) {
  let firstSemi = 0;
  let secondSemi;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ':' && firstSemi === 0) {
      firstSemi = i;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ':' && firstSemi === 0) {
      secondSemi = i;
    }
  }
  const minS = str.slice(firstSemi + 1, secondSemi);
  console.log('minS: ', parseInt(minS, 0));
  return parseInt(minS, 0);
}
