import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../components/models/Users';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private users = new BehaviorSubject<Users>(new Users("",""));
  currentuser= this.users.asObservable();

  constructor() { }
  setNewUser(usuario: Users){
    this.users.next(usuario);
  }
}
