import { Component, OnInit } from '@angular/core';
import { CreateuserService } from './createuser.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss'],
})

export class CreateuserComponent implements OnInit {
    public usersen = {
        firstname: '',
        lastname: '',
        email: '',
        userpassword: '',
    }

    constructor (
        private createuserService: CreateuserService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createuserService.GpCreate(this.usersen).subscribe(data => {
            this.usersen.firstname = ''
 	 	this.usersen.lastname = ''
 	 	this.usersen.email = ''
 	 	this.usersen.userpassword = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}