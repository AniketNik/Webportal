import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent {
    alert:boolean=false
    title = 'ASAP Services Ltd';
    angForm!: FormGroup;
     constructor(private fb: FormBuilder, public http: HttpClient) {
      this.createForm();
    }

    insert(){
      console.log("insert clicked")
      let body = {
        "name":this.angForm.value.name,
        "contact":this.angForm.value.contact,
        "services":this.angForm.value.services,
        "email":this.angForm.value.email
      }

      console.log(body);
      let val = this.http.post('http://localhost:5006/update', body).subscribe(res=>{
        // console.log(JSON.stringify(res))
        if(res!=null){
          console.log(res);
        }
      })

      this.alert=true
      this.angForm.reset({})
    }

    closeAlert() {
      this.alert=false
    }
 
    
     createForm() {
      this.angForm = this.fb.group({
         name: ['', Validators.required ],
         contact: ['', Validators.required ],
         services: [''],
         email: ['']
      });
    }

  }

  

  // export class SigninComponent implements OnInit {
  
  //   formSubmitted() {
  //     this.submitted = true;
  //     notify({ message: "form submitted" }, "success", 2000);
  //   }
  
  //   ngOnInit() {
  //   }
  // }