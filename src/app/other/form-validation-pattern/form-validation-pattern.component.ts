import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './form-validation-pattern.component.html'
})
export class FormValidationPatternComponent implements OnInit {

    theForm: FormGroup;
    triedSubmit = false;
    private readonly onlyNumbers = /^[0-9]*$/;
    // private readonly onlyNumbersToo = /^\d*$/;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.setupForm();
    }

    handleSubmit() {
        this.triedSubmit = true;

        console.log('--- submit ---');
        console.log('form valid', this.theForm.valid);
        console.log('form values', this.theForm.value);
        console.log('--- /submit ---');
    }

    fcHasError(name: string, errorType: string) {
        // should do errors as enums

        const fc = this.theForm.get(name);

        if (errorType === 'pattern') {
            return fc.hasError(errorType);
        }

        if (errorType === 'required') {
            return fc.hasError(errorType) && this.triedSubmit;

            /*
                updateOn: 'blur' validates on blur, but formcontrols starts required invalid
                to hinder validation messages from showing initally we can set
                fc.touched as condition , or to show on form submitted this.triedSubmit
            */
        }

    }

    private setupForm() {
        this.theForm = this.formBuilder.group(
            {
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
                ]
            },
            { updateOn: 'blur' }
        );
    }

}
