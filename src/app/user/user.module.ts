import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRoutes } from './routes/routes';
import { ProfileComponent } from './profile-component';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: []

})

export class UserModule{}
