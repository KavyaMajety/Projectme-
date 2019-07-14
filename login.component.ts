import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeappService } from '../meapp.service';

declare var toastr: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User : any;
  constructor(private router:Router, private service:MeappService) {
    this.User = {loginId :'', password : ''};
   }
  /* loginUser(user :any) {
      if(this.User.loginId=="admin", this.User.password == "admin")  {
       
           this.service.setUserLoggedIn();
           this.router.navigate(['foodandnutrition']);
           console.log(this.User);
      }
    
   }
   logOut() {
     this.service.setUserLoggedOut();
   }
}*/
ngOnInit() {
}
async validateUser(loginForm: any) {
    
  console.log('Inside validateUser', loginForm.loginId, loginForm.password);
     
   if (loginForm.loginId === 'admin'  && loginForm.password === 'admin') {
        
  this.service.setUserLoggedIn();
       
   this.router.navigate(['home']);
     
   } else {
    
    await this.service.getEmpByUserPass(loginForm.loginId, loginForm.password).then((data: any) => {
        
  if (data != null) {
        
  this.service.setUserLoggedIn();
      
    this.router.navigate(['home']);
        
    toastr.success('Login', 'Login Success');
    
    } else {
       
   toastr.success('Login', 'Login Failure');
      }
       
    },
         (error) => {
          toastr.success('Login', 'Login Failure');
           });
       }
  }
  }
  
