import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ItemsComponent } from "./components/items/items.component";
import { MenuMainPageComponent } from "./components/page/menu-main-page.component";


@NgModule ({
    declarations: [FooterComponent, HeaderComponent, ItemsComponent, MenuMainPageComponent],
    exports: [MenuMainPageComponent]

})

export class MenuModule{}