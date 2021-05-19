/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
// home.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirebaseService } from '../../services/user.service';

interface UserData {
  Name: string;
  Email: string;
  Mobile: number;
  Password: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  UserList = [];
  UserData: UserData;
  SignupForm: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) {
    this.UserData = {} as UserData;
  }

  ngOnInit() {
    this.SignupForm = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });

    this.firebaseService.read_Users().subscribe((data) => {
      this.UserList = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Email: e.payload.doc.data()['Email'],
          Mobile: e.payload.doc.data()['Mobile'],
          Password: e.payload.doc.data()['Password'],
        };
      });
      console.log(this.UserList);
    });
  }

  createAccount() {
    console.log(this.SignupForm.value);
    this.firebaseService
      .create_User(this.SignupForm.value)
      .then((resp) => {
        this.SignupForm.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_User(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditEmail = record.Email;
    record.EditMobile = record.Mobile;
    record.EditPassword = record.Password;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Email'] = recordRow.EditEmail;
    record['Mobile'] = recordRow.EditMobile;
    record['Password'] = recordRow.EditPassword;
    this.firebaseService.update_User(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
