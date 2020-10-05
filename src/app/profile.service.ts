import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from './profile/Customer';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private http: HttpClient) { }

  getProfile(id:number): Observable<Customer>{
    let url= 'http://localhost:8181/showProfile?id='+id;
    return this.http.get<Customer>(url);
  }
  updateProfile(customer:Customer):Observable<ProfileStatus>{
    let url='http://localhost:8181/updateProfile';
    return this.http.post<ProfileStatus>(url,customer);
  }
  uploadPic(formData:FormData): Observable<any>{
    let url= "http://localhost:8181/addPic";
    return this.http.post(url, formData);
  }
  getUserName(customerId:number){
    let url = 'http://localhost:8181/getUserName?customerId='+customerId;
    return this.http.get(url,{responseType: 'text'});
  }
}

export class ProfileStatus{
  message:String;
  id:number;
  status:boolean;
}
