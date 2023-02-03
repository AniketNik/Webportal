import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    title = 'WebPortal';
    angForm!: FormGroup;
     constructor(private fb: FormBuilder, private http: HttpClient) {
      this.createForm();
    }
    insert(){
      let body = this.angForm.value
      this.http.post('http://localhost:3000/users/newUser',body).subscribe(res=>{
        console.log(res);
      })
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

