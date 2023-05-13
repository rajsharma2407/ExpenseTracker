import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../api-manager.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-expences',
  templateUrl: './expences.component.html',
  styleUrls: ['./expences.component.css']
})

export class ExpencesComponent implements OnInit {
  goodDate = (a:string)=>{
    if(a.length<2){
      return "0"+a;
    }
    return a;
  }
  toggle:boolean=true;
  viewOption:string="graph-view";
  data:any;
  today = new Date();
  d1 = this.today.getFullYear()+"-"+this.goodDate(String(this.today.getMonth()+1))+"-01";
  d2 = this.today.getFullYear()+"-"+this.goodDate(String(this.today.getMonth()+1))+"-"+this.goodDate(String(this.today.getDate()));
  fakeDate:Date = new Date();
  dates:any=[];
  expences:any=new Array(parseInt(this.d2.slice(8,10))-parseInt(this.d1.slice(8,10)));




  toggleView = () =>{
    this.toggle = !this.toggle;
    if(this.toggle){
      this.viewOption = "graph-view";
    }else{
      this.viewOption = "table-data";
    }
  }


  renderChartPlease = () =>{  
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom, 'dark');
    var option: EChartsOption;
    option = {
      animationDuration:10000,
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        data: ['worm','bar']
      },
      xAxis: {
        type: 'category',
        data: this.dates
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'worm',
          data: this.expences,
          type: 'line',
          smooth: true,
          color:'rgba(230,234,66,0.8)'
        },
        {
          name:'bar',
          data: this.expences,
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);

  }

  constructor(private apiManagerService:ApiManagerService) { }



  moneySpent = 0;

  forDate1:any;
  forDate2:any;
  getData = () =>{
    this.apiManagerService.getExpences(this.d1,this.d2).subscribe((data)=>{
      this.apiManagerService.expences = data;
      this.data = data;
      this.moneySpent = 0;
      this.dates=[];
      this.expences = [];
      this.expences=Array(parseInt(this.d2.slice(8,10))-parseInt(this.d1.slice(8,10)));
      for(let i = 0;i<this.expences.length;i++){
        this.dates.push(this.fakeDate.getFullYear()+"/"+this.fakeDate.getMonth()+"/"+(i+1));
        this.expences[i] = 0;
      }
      this.data.map((d:any)=>{
        this.moneySpent+=d.spent;
        this.expences[parseInt(d.exdate.slice(8,10))]+=d.spent;
        
      }) 
      this.renderChartPlease();
    });
  }

  changeDates = () =>{
    console.log(this.forDate1);
    console.log(this.forDate2);
    this.d1 = this.forDate1.toString();
    this.d2 = this.forDate2.toString();
    this.getData();
  }


  ngOnInit(): void {
    this.getData();
    this.forDate1 = this.d1;
    this.forDate2 = this.d2;
    for(let i = 0;i<this.expences.length;i++){
      this.dates.push(this.fakeDate.getFullYear()+"/"+this.fakeDate.getMonth()+"/"+(i+1));
      this.expences[i] = 0;
    }
  }

}
