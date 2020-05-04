import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any[];

  //Constructeur
  constructor(private dataService: DataService) { }

  //Methode
  ngOnInit() {
    this.dataService.fetchUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (error) => { }
    );
  }

}
