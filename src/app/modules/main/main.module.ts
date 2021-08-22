import { NgModule } from '@angular/core';
import { MkItCommonModule } from '../common/mk-it-common.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

const imported = [
    MkItCommonModule,
    MainRoutingModule
]

const declarations = [
    MainComponent
]

const exported = [...imported];

@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [...imported],
    exports: [...exported, ...declarations],
    providers: []
})

export class MainModule { }