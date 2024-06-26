declare var google : any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private router = inject(Router);
ngOnInit(): void {
     google.accounts.id.initialize({
      client_id:"19928483173-quojj7177khfodppl70ojlo672d9ecjp.apps.googleusercontent.com",
      callback:(resp:any)=>
        {
          this.handleLogin(resp)
        }
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),
  {
    theme:'filled_blue',
    size:'large',
    shape:'rectangle',
    width:350
  })
}
private decodeToken(token:string)
{

  return JSON.parse(atob(token.split(".")[1]))
}

handleLogin(response:any) {
  if(response)
    {
      //decrypt the tokem
      const payload = this.decodeToken(response["credential"])
   
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload))
      // navigate to home page
      this.router.navigate(['browse'])
      
console.log(response)
    }
    
}

}
