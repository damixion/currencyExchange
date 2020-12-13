import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SendContactService {

  private mailApi = 'https://mailthis.to/damdi';

  constructor(private http: HttpClient) { }


  sendMail(mail: FormData) {
    return this.http.post(this.mailApi, mail, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      );
  }
}
