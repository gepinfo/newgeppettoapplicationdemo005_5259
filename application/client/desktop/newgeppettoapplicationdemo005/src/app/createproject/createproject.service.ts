import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CreateprojectService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(projecten): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/projecten', projecten);
    }
    managerenGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/manageren');
    }
    leadenGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/leaden');
    }
}