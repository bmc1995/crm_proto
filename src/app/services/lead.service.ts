import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from '../models/lead.model';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiUrl = 'http://localhost:3000/lead';

  constructor(private http: HttpClient) {}

  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>(this.apiUrl);
  }

  getLead(id: number): Observable<Lead> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Lead>(url);
  }

  createLead(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.apiUrl, lead);
  }

  updateLead(lead: Lead): Observable<any> {
    const url = `${this.apiUrl}/${lead.id}`;
    return this.http.put(url, lead);
  }

  deleteLead(id: number): Observable<Lead> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Lead>(url);
  }
}
