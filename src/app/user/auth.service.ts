import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService{
  currentUser: IUser
  loginUser(userName, password){
    this.currentUser = {
      id: 1,
      firstName: 'Esther',
      lastName: 'Muk',
      userName: userName

    }
  }

  updateUser(firstName, lastName){
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
