import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
const routes: Routes = [
	{
		path: '', component: MainComponent, children: [
			{ path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
			{ path: 'search', loadChildren: () => import('../search/search.module').then(m => m.SearchModule) },
			{ path: 'movie', loadChildren: () => import('../movie/movie.module').then(m => m.MovieModule) },
			{ path: '', redirectTo: 'home', pathMatch: 'full' }
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class MainRoutingModule {
	constructor() {

	}
}