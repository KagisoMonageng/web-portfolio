import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { MailerService } from 'src/app/services/mailer.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  mail = {
    cell :'',
    name :'',
    email:'',
    message :''
  }

  mailForm : FormGroup = new FormGroup({
    cell : new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    message : new FormControl()
  })
  defaultM = "Hello Kagiso, Please get back to me here."

  private toastService = inject(HotToastService);

  constructor(private mailer : MailerService){}

  ngOnInit(): void {
  }

  submitForm(form: FormGroup): void {
    this.mail = form.value;
    this.mailer.sendMail(this.mail).pipe(
      this.toastService.observe({
        loading:"Sending...",
        success:"Email sent.",
        error:"Error sending email"
      })
    ).subscribe((res:any) => {
      console.log(res)
    }, (err:HttpErrorResponse) => {
      console.log(err)
    })
  }
 



}
