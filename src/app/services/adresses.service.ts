import { Injectable } from '@angular/core';
import { AdressModel } from 'app/models';

@Injectable({
    providedIn: 'root'
})
export class AdressesService {
    private adresses: AdressModel[] = [
        {
            city: 'Stockholm',
            street: 'Ankeborgsgatan'
        },
        {
            city: 'Ankeborg',
            street: 'Stockholmsgatan'
        },
        {
            city: 'Stockholm',
            street: 'En annan gata'
        },
        {
            city: 'Gothenburg',
            street: 'Kallegatan'
        },
    ];

    getAdresses() {
        return this.adresses;
    }
}
