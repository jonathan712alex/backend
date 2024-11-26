import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginMainPageComponent } from "./components/page/login-main-page.component";


@NgModule({
    declarations: [FooterComponent, HeaderComponent,LoginFormComponent, LoginMainPageComponent],

    exports:[LoginMainPageComponent]

})

export class LoginModule{}