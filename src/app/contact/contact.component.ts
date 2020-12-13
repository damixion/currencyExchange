import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendContactService } from '../services/send-contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContact = new FormGroup({
    controlName: new FormControl('', Validators.required ),
    controlEmail: new FormControl('', [Validators.required, Validators.email]),
    controlMessage: new FormControl('', Validators.required),
  });

  constructor(private serviceContact: SendContactService) { }

  ngOnInit(): void {}

  onSubmit(formContact): void
  {
    this.serviceContact.sendMail(formContact).subscribe( (item) =>
      {
        this.serviceContact.sendMail(formContact);
      });

     this.formContact.reset();
  }

}
