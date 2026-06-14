import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm=signal({
    name:'',
    email:'',
    mobile:''
  })

  errors=signal({
    name:'',
    email:'',
    mobile:''
  })
  constructor(){

  }

  updateFields(fields:string, event:Event){
    const value =(event.target as HTMLInputElement).value;
    console.log("v",value);
    console.log("F",fields)
    this.contactForm.update((v)=>({
      ...v,
      [fields]:value
    }))

    this.validateFields(fields,value)
  }

  validateFields(fields:string,value:string){
    let error='';
    if( fields === "name" && !value.trim()){
      error="Name is required"
    }

    if( fields === "email" ){
      if(!value.trim()){
        error="Email is required"
      }
      else if (!/^\S+@\S+\.\S+$/.test(value)){
        error = "Invalid email"
      }
     
    }

    if(fields === "mobile"){
      if(!value.trim()){
        error="Mobile no is required"
      }
      else if(!/^\d{10}$/.test(value)){
        error="Must be 10 digit"
      }

    }

    this.errors.update((err)=>({
      ...err,
      [fields]:error
    }))
  }

  formSubmit(){
    
    console.log("dasdas",this.contactForm())
  }
}
