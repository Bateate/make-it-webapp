import { NgModule } from "@angular/core";
import { MkItCommonModule } from "../common/mk-it-common.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

const imported = [
    MkItCommonModule,
    HomeRoutingModule
]

const declarations = [
    HomeComponent
]

const exported = [...imported];

@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [
        ...imported
    ],
    exports: [...exported, ...declarations]

})

export class HomeModule { }