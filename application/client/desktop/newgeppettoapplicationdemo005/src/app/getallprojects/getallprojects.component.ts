import { Component, OnInit } from '@angular/core';
import { GetallprojectsService } from './getallprojects.service';

@Component({
  selector: 'app-getallprojects',
  templateUrl: './getallprojects.component.html',
  styleUrls: ['./getallprojects.component.scss'],
})

export class GetallprojectsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'projectname'  },{ headerName: 'Technology', field: 'technology'  },{ headerName: 'Manager', field: 'manager'  },{ headerName: 'Lead', field: 'lead'  },];
    public projecten = {
        projectname: '',
        technology: '',
        manager: '',
        lead: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallprojectsService: GetallprojectsService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallprojectsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}