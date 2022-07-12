import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myform:any

  constructor(private fb: FormBuilder) {
    this.myform= this.fb.group({
        fullname: ['',[Validators.required]],
        email:['',[Validators.email,Validators.required]],
        subject: ['',[Validators.required]],
        message: ['',[Validators.required]]
      })

  }
 
 

  ngOnInit(): void {
  }

  print(){
    console.log(this.myform.value)
  }

  get fullname(){
    return this.myform.get("fullname")
  }
  get email(){
    return this.myform.get("email")
  }
  get subject(){
    return this.myform.get("subject")
  }
  get message(){
    return this.myform.get("message")
  }

}
