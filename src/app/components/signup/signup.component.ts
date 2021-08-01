import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private title: string;
  private signupMessage: string;

  constructor(private accountService: AccountService) { 
    this.title = "Sign Up";
    this.signupMessage = "";
  }

  ngOnInit(): void {
  }

  public getTitle(): string {
    return this.title;
  }

  public getSignupMessage(): string {
    return this.signupMessage;
  }

  public signup(form: {email: string, password: string, confirmPassword: string}) {
    if (form.password == form.confirmPassword) {
      let account = {
        email: form.email,
        password: form.password
      }
      this.accountService.register(account).subscribe((account) => {
        console.log(account);
        this.signupMessage = "Successfully signed up";
      });
    } else {
      form.password = "";
      form.confirmPassword = "";
      this.signupMessage = "Passwords do not match";
    }
  }

}
