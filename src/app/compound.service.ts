import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompoundService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCompounds(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/compounds`);
  }

  getCompoundById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/compounds/${id}`);
  }

  deleteCompound(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/compounds/${id}`);
  }

  createCompound(compound: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/compounds`, compound);
  }

  updateCompound(id: string, updatedCompound: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/compounds/${id}`, updatedCompound);
  }
}
