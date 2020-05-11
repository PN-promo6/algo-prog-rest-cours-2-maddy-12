import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post/post';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  ///////////////Methodes

  //Methode qui récupère les users
  public fetchUsers(): Observable<User[]> {
    let observableData: Observable<User[]> = this.httpClient.get<User[]>('http://localhost:3000/users');
    return observableData;
  }

  //Methode qui récupère les users par leur ID
  public fetchUserById(id: string): Observable<any> {
    let obsDataUser: Observable<any> = this.httpClient.get('http://localhost:3000/users/' + id);
    return obsDataUser;

  }

  //Methode qui récupère les posts
  public fetchPosts(): Observable<Post[]> {
    let observableData: Observable<Post[]> = this.httpClient.get<Post[]>('http://localhost:3000/posts');
    return observableData;
  }

  //Methode qui récupère les posts par leur ID
  public fetchPostById(id: string): Observable<any> {
    let obsDataPost: Observable<any> = this.httpClient.get('http://localhost:3000/posts/' + id);
    return obsDataPost;

  }
}
