import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './form-validation-pattern.component.html'
})
export class FormValidationPatternComponent implements OnInit {

    theForm: FormGroup;
    private readonly onlyNumbers = /^[0-9]*$/;
    // private readonly onlyNumbersToo = /^\d*$/;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.setupForm();
    }

    handleSubmit() {
        console.log('--- submit ---');
        console.log('form valid', this.theForm.valid);
        console.log('form values', this.theForm.value);
        console.log('--- /submit ---');
    }

    private setupForm() {
        this.theForm = this.formBuilder.group({
            name: [
                '',
                [
                    Validators.required
                ]
            ],
            phoneOne: [
                '',
                [
                    Validators.required,
                    Validators.pattern(this.onlyNumbers)
                ]
            ],
            phoneTwo: [
                '',
                [
                    Validators.pattern(this.onlyNumbers)
                ]
            ],
        })
    }

}
