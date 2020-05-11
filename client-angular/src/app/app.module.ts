import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserPreviewComponent,
    PostsListComponent,
    NavbarComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
