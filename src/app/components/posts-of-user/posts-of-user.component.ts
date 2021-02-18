import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent implements OnInit {

  posts: Post[];

  constructor(private http: PostService, private activatedRoute: ActivatedRoute) {
       activatedRoute.params.subscribe(data => {
         http.postsOfUser(data.id).subscribe(posts => this.posts = posts);
         console.log(data);
       });
  }

  ngOnInit(): void {
  }

}
