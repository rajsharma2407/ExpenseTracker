import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../api-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiManager:ApiManagerService) { }
  data:any;
  today = new Date();
  date = this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.getDate();
  savings : number = 50000;
  clicked : boolean = false;
  expenceName : string = "";
  expence:number=0;
  totalExp :number = 1000;
  ngOnInit(): void {
    this.getData();
    
  }
  callUpdate = () =>{
    this.clicked = !this.clicked;
    this.apiManager.updateSaving(this.savings).subscribe({
      next: data => {
        console.log('API RES__-', data)
      },
      error: err => {
        console.log('API ERR__-', err)
      }
    });
    
  }
  getData = () =>{
    this.apiManager.getExpences(this.date,this.date).subscribe((data)=>{
      this.apiManager.expences = data;
      this.data = this.apiManager.expences;
      
    });
    this.apiManager.findSavings().subscribe((data:any)=>{
      this.savings = data.moneyLeft;
      this.totalExp = data.spentAmount;
    });
  }
  e:any={};

  addExpence=()=>{
    this.e.expence = this.expenceName;
    this.e.spent = this.expence;
    this.apiManager.addExpence(this.e).subscribe((data)=>{

      this.expenceName="";
      this.expence = 0;
      this.getData();
    });


  }

}
