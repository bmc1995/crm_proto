import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opportunity } from '../models/opportunity.model';

@Injectable({
  providedIn: 'root',
})
export class OpportunityService {
  private apiUrl = 'http://localhost:3000/opportunity';

  constructor(private http: HttpClient) {}

  getOpportunities(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>(this.apiUrl);
  }

  getOpportunity(id: number): Observable<Opportunity> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Opportunity>(url);
  }

  createOpportunity(opportunity: Opportunity): Observable<Opportunity> {
    return this.http.post<Opportunity>(this.apiUrl, opportunity);
  }

  updateOpportunity(opportunity: Opportunity): Observable<any> {
    const url = `${this.apiUrl}/${opportunity.id}`;
    return this.http.put(url, opportunity);
  }

  deleteOpportunity(id: number): Observable<Opportunity> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Opportunity>(url);
  }
}
