import { Component, OnInit } from '@angular/core';
import { CreateleadService } from './createlead.service';

@Component({
  selector: 'app-createlead',
  templateUrl: './createlead.component.html',
  styleUrls: ['./createlead.component.scss'],
})

export class CreateleadComponent implements OnInit {
    public leaden = {
        leadername: '',
    }

    constructor (
        private createleadService: CreateleadService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createleadService.GpCreate(this.leaden).subscribe(data => {
            this.leaden.leadername = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}