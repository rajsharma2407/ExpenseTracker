import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  constructor(private http:HttpClient) { }
  expences:any;
  getExpences(d1:string,d2:string){
  

  
    const url = "http://localhost:8080/api/getExpences/"+d1+"/"+d2;

    return this.http.get(url);
  }

  addExpence(e:any){
    const url = "http://localhost:8080/api/postExpence";
    return this.http.post(url,e,{'headers': { 'content-type': 'application/json'}
    })
  }

  updateSaving(e:any){
    const url = "http://localhost:8080/api/updateSalary";
    console.log(e);
    return this.http.put<any>(url,e,{'headers': { 'content-type': 'application/json'},
      responseType: 'text' as 'json'
    })
  }

  findSavings(){
    const url = "http://localhost:8080/api/getSaving";
    return this.http.get(url);
  }

  findAllSavings(){
    const url = "http://localhost:8080/api/getAllSavings";
    return this.http.get(url);
  }

}
