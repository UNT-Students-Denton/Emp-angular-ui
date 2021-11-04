import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService:ApiService) {
   }
   login(params:any){
   return this.apiService.post("/login",params);
   }
   getUserInfo(){
     let userInfo=localStorage.getItem("userInfo");
          if(userInfo){
            userInfo=JSON.parse(userInfo);
          }
          return userInfo;
   }
}
