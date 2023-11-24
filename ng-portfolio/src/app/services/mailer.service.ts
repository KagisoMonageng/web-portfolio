import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  // baseUrl = 'http://localhost:8080';
  baseUrl = 'https://web-portfolio-mail.vercel.app/';

  constructor(private http : HttpClient) { }

  sendMail(body:any){
    return this.http.post(this.baseUrl, body);
  }
}
