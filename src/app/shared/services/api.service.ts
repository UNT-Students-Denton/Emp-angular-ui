import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrls:any=environment.config;
  constructor(private http:HttpClient) {
   }
get(url?:any,args?:any){
  if(!args){
    args={};
   }
  let baseUrl=this.buildUrl(url);
  let params=this.constructGetParams(args);
  let httpOptions=this.setHttpOptions(params);
return this.http.get<any>(baseUrl,httpOptions)
}
post(url?:any,args?:any){
  if(!args){
   args={};
  }
  let baseUrl=this.buildUrl(url);
  let httpOptions=this.setHttpOptions();
 return this.http.post<any>(baseUrl, args, httpOptions);
}
put(url?:any,args?:any){
  let baseUrl=this.buildUrl(url);
  let httpOptions=this.setHttpOptions();
 return this.http.put<any>(baseUrl, args, httpOptions);
}
delete(){

}
setHttpOptions(params?:any){
  let userInfo:any=localStorage.getItem("userInfo");
  if(userInfo){
    userInfo=JSON.parse(userInfo);
  }
  let httpOptions;
  if(params){
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'bearer ' + userInfo.Token

      }),
      params:params
    };
  }else{
    if(!userInfo){
      userInfo={};
      userInfo.Token='';
    }
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'bearer ' + userInfo.Token

      })
    };
  }
 
  return httpOptions;
}
constructGetParams(args:any){
  let keys=Object.keys(args);
  let values:any=Object.values(args);
  let params=new HttpParams();
  keys.forEach((key,keyIndex)=>{
    params=params.set(key,(values[keyIndex]))
  });
  return params;
}
buildUrl(url:any){
url=this.configUrls.backendUrl+url;
return url;
}

}
