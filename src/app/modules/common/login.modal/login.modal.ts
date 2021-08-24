import { Component } from '@angular/core';
import { MkItWebService } from 'src/app/providers/mk-it-web.service';
import { SignIn, SignUp, User } from '../../interface';

@Component({
  selector: 'login',
  templateUrl: './login.modal.html',
  styleUrls: ['./login.modal.scss']
})
export class LoginModal {
    public loginFlag: boolean = true;
    public user: User = {};

    constructor(private webService: MkItWebService) {
    }

    public async signIn(form: SignIn, event: any){
        event.stopPropagation();
        await this.webService.signIn(form).subscribe(async data => {
            await localStorage.setItem('user', JSON.stringify(data));
        })

    }

    public async signUp(form: SignUp){
        await this.webService.signUp(form).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err.message);
        }, () => {
            console.log('completed');
        })
    }
}
