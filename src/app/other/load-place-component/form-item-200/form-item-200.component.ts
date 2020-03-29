import { Component } from '@angular/core';

import { FormItemInterface } from '../form-item.interface';

@Component({
    templateUrl: './form-item-200.component.html'
})
export class FormItem200Component implements FormItemInterface {

    sayHi() {
        console.log('Hi from FormItem200Component');
    }

}
