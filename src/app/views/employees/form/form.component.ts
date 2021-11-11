import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { formatDate } from '@angular/common';
import { Contacts } from '../../contacts/contacts.model';
import { ContactsService } from '../../contacts/contacts.service';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class EmployeeFormComponent {
  action: Employee[];
  dialogTitle: "Comparar colaboradores";
  isDetails = false;
  contactsForm: FormGroup;
  contacts: Contacts;
  employees: Employee[] = [];
  constructor(
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public contactsService: ContactsService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    this.employees = data.action;
    console.log("employees: ", this.employees)
    console.log("action", this.action);
    console.log("data.action", this.data.action);
    // if (this.action === 'edit') {
    //   this.isDetails = false;
    //   this.dialogTitle = data.contacts.name;
    //   this.contacts = data.contacts;
    //   this.contactsForm = this.createContactForm();
    // } else if (this.action === 'details') {
    //   this.contacts = data.contacts;
    //   this.isDetails = true;
    // } else {
    //   this.isDetails = false;
    //   this.dialogTitle = 'New Contacts';
    //   this.contacts = new Contacts({});
    //   this.contactsForm = this.createContactForm();
    // }
  }
  // formControl = new FormControl('', [
  //   Validators.required
  //   // Validators.email,
  // ]);
  // getErrorMessage() {
  //   return this.formControl.hasError('required')
  //     ? 'Required field'
  //     : this.formControl.hasError('email')
  //     ? 'Not a valid email'
  //     : '';
  // }
  // createContactForm(): FormGroup {
  //   return this.fb.group({
  //     id: [this.contacts.id],
  //     img: [this.contacts.img],
  //     name: [this.contacts.name],
  //     email: [
  //       this.contacts.email,
  //       [Validators.required, Validators.email, Validators.minLength(5)]
  //     ],
  //     birthDate: [
  //       formatDate(this.contacts.birthDate, 'yyyy-MM-dd', 'en'),
  //       [Validators.required]
  //     ],
  //     address: [this.contacts.address],
  //     mobile: [this.contacts.mobile],
  //     note: [this.contacts.note]
  //   });
  // }
  // submit() {
  //   // emppty stuff
  // }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.contactsService.addContacts(this.contactsForm.getRawValue());
  }
}

