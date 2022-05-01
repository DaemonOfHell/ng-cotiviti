import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiToggleService {
  public showOverlay: boolean = false;
  private subject = new Subject<any>();
  public calledBy! :string

  constructor() { }

  toggleOverlay(caller:any): void{ 
    this.showOverlay = !this.showOverlay
    this.subject.next(this.showOverlay)
    this.calledBy= caller  
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

  setCaller(caller:string){
    this.calledBy = caller
  }
}
