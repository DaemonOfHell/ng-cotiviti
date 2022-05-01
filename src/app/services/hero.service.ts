import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = 'http://localhost:5000/heroes'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 

  constructor(
    private http: HttpClient,    
    private msgService: MessageService
    ) { }

  getHeroes(): Observable<Hero[]>{
    // const heroes = of(HEROES)
    return this.http.get<Hero[]>(this.apiUrl)
    // this.msgService.add('HeroService: fetched heroes')
    // return heroes
  }
  
  getHero(id: number):Observable<Hero>{
    // const hero = HEROES.find(h=>h.id===id)!
    // this.msgService.add(`HeroService: fetched hero id=${id}`)
    // return of(hero)
    return this.http.get<Hero>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError<Hero>('getHeroes'))
    );
  }
  
  updateHero(hero: Hero): Observable<Hero>{
    const url=`${this.apiUrl}/${hero.id}`
    return this.http.put<Hero>(url, hero, this.httpOptions)
  }

  addHero(hero: Hero): Observable<Hero>{ 
    return this.http.post<Hero>(this.apiUrl, hero, this.httpOptions)
  } 

  deleteHero(id: number): Observable<Hero>{
    const url = `${this.apiUrl}/${id}`

    return this.http.delete<Hero>(url)
      // this.httpOptions)
  }

  searchHeroes(term: string): Observable<Hero[]>{
    if(!term.trim()) return of([])
    return this.http.get<Hero[]>(`${this.apiUrl}/?name=${term}`)
  }

  // getSuggestions(term: string):Observable<Hero[]>{
  //   if(!term.trim()) return
  //   return this.http.get<Hero[]>(`${this.apiUrl}/?name=`)
  // }

  private log(msg: string){
    this.msgService.add(`HeroService: ${msg}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
