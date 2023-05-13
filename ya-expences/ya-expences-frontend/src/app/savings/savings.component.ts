import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../api-manager.service';
import * as echarts from 'echarts';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})


export class SavingsComponent implements OnInit {
  savingsData :any=[0,0,0,0,0,0,0,0,0,0,0,0];
  spentData:any=[0,0,0,0,0,0,0,0,0,0,0,0];
  renderChart = ()=>{
    type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom, 'dark');
var option: EChartsOption;


option = {
  animationDuration:3000,
  legend: {
    data: ['savings','expenditure']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    data: this.months
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'savings',
      data: this.savingsData,
      type: 'bar'
    },
    {
      name:'expenditure',
      data: this.spentData,
      type: 'bar'
    }
  ]
};

option && myChart.setOption(option);

  }
  constructor(private apiManagerService:ApiManagerService) { }
  goodDate = (a:string)=>{
    if(a.length<2){
      return "0"+a;
    }
    return a;
  }
   months:any = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  toMonth = (a:number)=>{
    
    return this.months[a];
  }
  data :any;
  monthAndYear = (x:any) =>{
    const y = String(x)
    return this.toMonth(parseInt(y.slice(5,7)))+" / "+y.slice(0,4);
  }
  ngOnInit(): void {
    this.apiManagerService.findAllSavings().subscribe((d:any)=>{
      this.data = d;

      d.map((chotaD:any)=>{
        console.log(chotaD);
        this.savingsData[chotaD.index] = parseInt(chotaD.moneyLeft);
        this.spentData[chotaD.index] = parseInt(chotaD.spentAmount);
      });
    this.renderChart();

    })
  }

}
