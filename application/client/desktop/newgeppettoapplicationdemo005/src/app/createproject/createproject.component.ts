import { Component, OnInit } from '@angular/core';
import { CreateprojectService } from './createproject.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss'],
})

export class CreateprojectComponent implements OnInit {
    managerenitemArray: any = [];
    leadenitemArray: any = [];
    public projecten = {
        projectname: '',
        technology: '',
        manager: '',
        lead: '',
    }

    constructor (
        private createprojectService: CreateprojectService,
    ) { }

    ngOnInit() {
    }
    managerenGpGetAllValues() {
        this.createprojectService.managerenGpGetAllValues().subscribe(data => {
            this.managerenitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    leadenGpGetAllValues() {
        this.createprojectService.leadenGpGetAllValues().subscribe(data => {
            this.leadenitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createprojectService.GpCreate(this.projecten).subscribe(data => {
            this.projecten.projectname = ''
 	 	this.projecten.technology = ''
 	 	this.projecten.manager = ''
 	 	this.projecten.lead = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}