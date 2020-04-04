import { Component } from '@angular/core';

import { ButtonsConstant } from './buttons.constant';
import { ButtonsStateConstant } from './buttons-state.constant';

@Component({
    templateUrl: './index-into-array-object.component.html'
})
export class IndexIntoArrayObjectComponent {

    buttonsConstant = ButtonsConstant;
    buttonsStateConstant = ButtonsStateConstant;

    btnObjState = {};

    btnObjAction(btn: string) {
        for (const property in this.btnObjState) {
            this.btnObjState[property] = ButtonsStateConstant.inactive;
        }

        this.btnObjState[btn] = ButtonsStateConstant.active;

        console.log('--- OBJ ---');
        console.log(this.btnObjState);
        console.log('--- /OBJ ---');
    }

    getBtnObjCssClass(btn: string) {
        return this.btnObjState[btn] === ButtonsStateConstant.active ? 'btn-primary' : 'btn-secondary';
    }

}

/* 

    OBJ
        - can not type btn as ButtonsConstant, not good
        - when using object typing, intellisence gets cluttred

    ARRAY
        -

*/
