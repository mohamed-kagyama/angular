import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input() title;
  highcharts = Highcharts;
  chartOptions = {   
    chart : {
       plotBorderWidth: null,
       plotShadow: false
    },
    title : {
       text: ''   
    },
    tooltip : {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions : {
       pie: {
          shadow: false,
          center: ['50%', '50%'],
          size:'25%',
          innerSize: '60%'            
       }
    },
    series : [{
       type: 'pie',
       name: 'Browser share',
       data: [
          ['Firefox',   45.0],
          ['IE',       26.8],
          {
             name: 'Chrome',
             y: 12.8,
             sliced: true,
             selected: true
          },
          ['Safari',    8.5],
          ['Opera',     6.2],
          ['Others',      0.7]
       ]
    }]
 };

  ngOnInit(): void {
  }

}
