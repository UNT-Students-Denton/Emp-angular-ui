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
}
