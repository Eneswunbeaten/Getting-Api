import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {Routes,RouterModule} from'@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialListComponent } from './social-list/social-list.component';
import { PostComponent } from './post/post.component';
const routes:Routes=[
  {path:"social-media",component:SocialListComponent},
  { path:"",redirectTo:"social-media", pathMatch: "full"}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialListComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
