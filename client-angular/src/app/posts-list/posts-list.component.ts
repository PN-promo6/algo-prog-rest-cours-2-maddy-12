
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.fetchPosts()
      .subscribe(
        (res) => {
          this.posts = res;
        },
        (error) => {
          console.log(error);
        }
      );

    //Methode permettant de récupérer le user par son ID
    // this.dataService.fetchPostById("1")
    //   .subscribe(
    //     (res) => {
    //       console.log(res);

    //     },
    //     (error) => {
    //       console.log(error);

    //     },
    //   )

  }

}
