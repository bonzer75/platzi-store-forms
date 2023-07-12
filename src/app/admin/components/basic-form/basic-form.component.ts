import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form: FormGroup

  constructor(
    private builder: FormBuilder
  ) { 
    this.buildForm()
  }

  private buildForm() {
    this.form = this.builder.group({
      fullname: this.builder.group({
        name: ["", Validators.required, Validators.maxLength(10)],
        surname: ["", Validators.required, Validators.maxLength(10)]
      }),
      email: [''],
      phone: [''],
      color: ['#000000'],
      date: [''],
      age: [18],
      category: [''],
      tag: [''],
      agree: [false],
      gender: [''],
      zone: [''],
    }); 
  }

  ngOnInit(): void {
    //
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  save(event) {
    console.log(this.form.value);
  }

  get nameField() {
    return this.form.get('fullname.name')
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }

}