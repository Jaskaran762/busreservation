import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchBusDto } from './search-buses/search-bus-dto';
import { ShowBusDto } from './show-buses/show-bus-dto';

@Injectable({
  providedIn: 'root'
})
export class SearchBusService {

  constructor(private http : HttpClient) { }

  searchBuses(searhBusDto : SearchBusDto) : Observable<ShowBusDto[]>{
    let url = 'http://localhost:8181/searchBuses';
    return this.http.post<ShowBusDto[]>(url, searhBusDto);
  }
}
