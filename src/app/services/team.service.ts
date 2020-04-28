import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
public API = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getTeams(id: number): Observable<any> {
    return this.http.get(this.API + "players/" + id)
  }
}
