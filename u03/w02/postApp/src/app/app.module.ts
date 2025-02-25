import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { NewPostComponent } from './components/new-post/new-post.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'activePosts',
        component: ActivePostsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'inactivePosts',
        component: InactivePostsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'activePosts/:id',
        component: PostDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'inactivePosts/:id',
        component: PostDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'newPost',
        component: NewPostComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: ':id',
                component: UserDetailsComponent,
            },
        ],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: '**/login',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: Error404Component,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        PostCardComponent,
        HomeComponent,
        HighlightDirective,
        UsersComponent,
        UserDetailsComponent,
        EllipsisPipe,
        PostDetailsComponent,
        LoginComponent,
        RegisterComponent,
        NewPostComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
