import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';
//import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html'
 
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidator
    
    
    ) { }

  ngOnInit(): void {
  }

  public myForm:FormGroup= this.fb.group({
    name:['',[Validators.required,  Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    //email:['',[Validators.required , Validators.pattern(this.validatorService.emailPattern)],[new EmailValidator()]],
    email:['',[Validators.required , Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username:['',[Validators.required, this.validatorService.cantBeStrider]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]]
  },{
    validators:[

      this.validatorService.isFieldOneEqualFieldTwo('passsword', 'password2')
    ]
  });


  isValidField(field:string){

  return this.validatorService.isValidField(this.myForm, field);
  
  

  }


  onSubmit(){
    console.log()
    this.myForm.markAllAsTouched();
  }

}
