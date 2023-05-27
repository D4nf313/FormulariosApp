import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup=this.fb.group({
    gender:['M', Validators.required],
    wantNotifications:[true, Validators.required],
    teamsAndConditions:[false, Validators.requiredTrue],
  })

  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  public person ={
    gender:'F',
    wantNotifications:false
  }

 onSave(){
  if(this.myForm.invalid){
    this.myForm.markAllAsTouched();
  }

  const { teamsAndConditions, ...newPerson}=this.myForm.value;

  this.person=newPerson;
  console.log(this.myForm.value)
 }

 isValidField(field:string):boolean | null{
  return this.myForm.controls[field].errors 
  && this.myForm.controls[field].touched;
 }

}
