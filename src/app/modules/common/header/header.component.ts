import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MkItWebService } from 'src/app/providers/mk-it-web.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(
        private _route: ActivatedRoute,
        private router: Router
    ){}

    search(query: string){
		this.router.navigate(['main', 'search', query]);
    }
}
