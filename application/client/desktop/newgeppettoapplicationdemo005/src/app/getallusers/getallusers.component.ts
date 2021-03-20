import { Component, OnInit } from '@angular/core';
import { GetallusersService } from './getallusers.service';

@Component({
  selector: 'app-getallusers',
  templateUrl: './getallusers.component.html',
  styleUrls: ['./getallusers.component.scss'],
})

export class GetallusersComponent implements OnInit {
    columnDefs: any = [{ headerName: 'First Name', field: 'firstname'  },{ headerName: 'Last Name', field: 'lastname'  },{ headerName: 'Email', field: 'email'  },];
    public usersen = {
        firstname: '',
        lastname: '',
        email: '',
        userpassword: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallusersService: GetallusersService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallusersService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}