import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MkItWebService } from 'src/app/providers/mk-it-web.service';
import { LoginModal } from '../common/login.modal/login.modal';
import { CardInterface, SignIn, SignUp, User } from '../interface';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public favoritesMovies: Array<CardInterface> = [];
    public loginFlag: boolean = true;
    public user: any;

    public signinForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    });
    public signupForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        passwords: new FormGroup({
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            repeatPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
        }, this.passwordConfirming),
    })
    constructor(private webService: MkItWebService, private router: Router, public dialog: MatDialog,) {
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user") || '{}')
        console.log(this.user);
        
        if (this.user) {
            this.user = this.getUser(this.user);
        }

        // this.getFavorite("30");


    }

    async getUser(user: User){
        await this.webService.signIn({username: user.username || '', password: user.password || ''}).subscribe(value => {
            this.user = value;
            if(this.user?.favorites){
                for (let id of this.user?.favorites) {
                    this.getFavorite(id.replace(" ", ""));
                }
            }
        })
        console.log("favoritesMovies", this.favoritesMovies);
        
    }

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        // if (c.get?('password') !== c.get?('repeatPassword')) {
        //     return { invalid: true };
        // }
        return { invalid: true };
    }

    async getFavorite(id: string) {
        let res: CardInterface = {};
        await this.webService.getByIdMovies(id).subscribe(data => {
            this.favoritesMovies.push(data);
        }, err => {
            console.log(err.message);
        }, () => {
            console.log('completed');
        })
    }

    public async signIn(form: SignIn) {
        await this.webService.signIn(form).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err.message);
        }, () => {
            console.log('completed');
        })
    }

    public async signUp(form: SignUp) {
        await this.webService.signUp(form).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err.message);
        }, () => {
            console.log('completed');
        })
    }

    search(query: string){
		this.router.navigate(['main', 'search', query]);
    }

    openLoginModal(){
        if(!this.user){
            this.dialog.open(LoginModal, {});
        }else {
            localStorage.clear();
            window.location.reload();
        }
    }
}

