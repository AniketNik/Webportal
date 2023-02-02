import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    title = 'WebPortal';
    angForm!: FormGroup;
     constructor(private fb: FormBuilder) {
      this.createForm();
    }
     createForm() {
      this.angForm = this.fb.group({
         name: ['', Validators.required ],
         address: ['', Validators.required ],
         course: [''],
         feedback: ['']
      });
    }
  }

