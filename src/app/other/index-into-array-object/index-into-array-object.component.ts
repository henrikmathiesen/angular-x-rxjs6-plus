import { Component } from '@angular/core';

import { ButtonsConstant } from './buttons.constant';
import { ButtonsStateConstant } from './buttons-state.constant';

import { ButtonsEnum } from './buttons.enum';
import { ButtonsStateEnum } from './buttons-state.enum';

@Component({
    templateUrl: './index-into-array-object.component.html'
})
export class IndexIntoArrayObjectComponent {

    buttonsConstant = ButtonsConstant;
    btnObjState = {};

    buttonsEnum = ButtonsEnum;
    btnArrayState = [];

    btnObjAction(btn: string) {
        for (const property in this.btnObjState) {
            if (this.btnObjState.hasOwnProperty(property)) {
                this.btnObjState[property] = ButtonsStateConstant.inactive;
            }
        }

        this.btnObjState[btn] = ButtonsStateConstant.active;

        console.log('--- OBJ ---');
        console.log(this.btnObjState);
        console.log('--- /OBJ ---');
    }

    getBtnObjCssClass(btn: string) {
        return this.btnObjState[btn] === ButtonsStateConstant.active ? 'btn-primary' : 'btn-secondary';
    }

    btnArrayAction(btn: ButtonsEnum) {
        for (let i = 0; i < this.btnArrayState.length; i++) {
            this.btnArrayState[i] = ButtonsStateEnum.inactive;
        }

        this.btnArrayState[btn] = ButtonsStateEnum.active;

        console.log('--- ARRAY ---');
        console.log(this.btnArrayState);
        console.log('--- /ARRAY ---');
    }

    getBtnArrayCssClass(btn: ButtonsEnum) {
        return this.btnArrayState[btn] === ButtonsStateEnum.active ? 'btn-primary' : 'btn-secondary';
    }
}

/* tslint:disable */

/*
    

    OBJ
        - can not type btn as ButtonsConstant, not good
        - when using object typing, intellisence gets cluttered
        - hasOwnProperty check is adding complexity

    ARRAY
        - can use type btn as enum, good, a number is sent in as the argument
        - when using enum typing, intellisence is better

    I prefer array with enum


    See javascript-the-important-parts > typescript for index into an enum

*/
