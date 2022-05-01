import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: String[] = []

  constructor() { }

  add(msg: string){
    this.messages.push(msg)
  }

  clear(){
    this.messages = []
  }
}
