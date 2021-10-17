import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './reactive-form-radios.component.html'
})
export class ReactiveFormRadios {

    form = new FormGroup({
        food: new FormControl(null),
        name: new FormControl(null)
    });

}
