import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MeappService {
  flag : boolean;
  constructor(private httpClient: HttpClient) { }
    setUserLoggedIn() {
      this.flag = true;
    }
    getUserLogged() : boolean {
      return this.flag;
    }
    setUserLoggedOut() {
      this.flag=false;
    }
    regUser(User: any) {
      console.log('Inside Service...',' ', User);
      return this.httpClient.post('RestAPIk/webapi/myresource/registerJ', User);
    }
    addUserIdea(FoodNutrition : any) {
      console.log('Inside Service...',' ', FoodNutrition);
      return this.httpClient.post('RestAPIk/webapi/myresource/addIdea', FoodNutrition);
    }
    getEmpByUserPass(loginId: string, password: string): any {
      console.log('Inside service:' , loginId, password);
      return this.httpClient.get('RestAPI/webapi/myresource/getEmpByUserPass/' + loginId + '/' + password).toPromise();
      }
  }
  

