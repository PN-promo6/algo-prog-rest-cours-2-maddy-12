import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { User } from '../models/user/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  //Constructeur
  constructor(private dataService: DataService) { }

  //Methodes

  //Methode permettant de récupérer les users
  ngOnInit() {
    this.dataService.fetchUsers()
      .subscribe(
        (res) => {
          this.users = res;
        },
        (error) => {
          console.log(error);
        }
      );

    //Methode permettant de récupérer le user par son ID
    this.dataService.fetchUserById("1")
      .subscribe(
        (res) => {
          console.log(res);

        },
        (error) => {
          console.log(error);

        },
      )

  }
}
