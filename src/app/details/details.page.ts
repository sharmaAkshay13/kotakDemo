import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { CommonFunctionsService } from '../services/common-functions.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(public global: CommonFunctionsService) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.plotSimpleLineChart();
    this.plotSimpleBarChart();
  }
  //plot line chart
  plotSimpleLineChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['1Hr', '24Hr', '7 Days', '30 Days', '60 Days', '90 Days']
      },
      yAxis: {
        title: {
          text: 'Percentage'
        }
      },
      series: [
        {
          name: 'Days',
          type: undefined,
          data: [-0.37259458, -5.98670434, 1.72062664, 18.24175778, 4.78100389, -28.78899857]
        }]
    });
  }


  getIcon(id) {
    let imgUrl = "https://s2.coinmarketcap.com/static/img/coins/64x64/" + id + ".png";
    return imgUrl;
  }

  //plot bar chart
  plotSimpleBarChart() {
    let myChart = HighCharts.chart('barcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Data']
      },
      yAxis: {
        title: {
          text: 'Rupees'
        }
      },
      series: [
        {
          name: 'Market Cap',
          type: undefined,
          data: [this.global.selectedData.quote.INR.market_cap]
        },
        {
          name: 'Volume 24',
          type: undefined,
          data: [this.global.selectedData.quote.INR.volume_24h]
        }]
    });
  }

}
