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
    return this.apiService.put("/department",args)
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
}
