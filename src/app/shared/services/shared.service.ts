import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private apiService:ApiService) { }

  getEmployes(){
    return this.apiService.get("/emp");
  }
  getEmployeeDetails(args:any){
   return this.apiService.get("/emp",args)
  }
  logout(args:any){
    return this.apiService.put("/logout",args)
  }
  transferEmployee(args:any){
    return this.apiService.put("/user",args)
  }
  requestTransfer(args:any){
    return this.apiService.put("/emp",args)

  }
  updateEmployee(args:any){
    return this.apiService.put("/emp",args)
  }
  getDepartMent(args:any){
    return this.apiService.get("/department",args)
  }
  getQuestions(args:any){
    return this.apiService.get("/questions",args)
  }
  addNumberOfDaysToCurrentDate(numberOfDaysToAdd:number){
    let today = new Date();
    today.setDate(today.getDate() + numberOfDaysToAdd); 
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let  y = today.getFullYear();
     return y + '-'+ mm + '-'+ dd;
  }
}
