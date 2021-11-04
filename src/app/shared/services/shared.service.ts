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
}