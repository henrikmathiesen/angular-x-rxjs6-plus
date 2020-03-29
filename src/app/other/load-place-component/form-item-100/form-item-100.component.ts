import { Component } from '@angular/core';

import { FormItemInterface } from '../form-item.interface';

@Component({
    templateUrl: './form-item-100.component.html'
})
export class FormItem100Component implements FormItemInterface {

    sayHi() {
        console.log('Hi from FormItem100Component');
    }

}
