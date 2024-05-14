import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JsonService {

    constructor(private http: HttpClient) { }

    saveData(data: any): Observable<any> {
        return this.http.post<any>('assets/data.json', data);
    }

}
