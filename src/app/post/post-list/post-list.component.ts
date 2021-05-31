import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemovePost } from 'src/app/store/post/post.actions';
import { Post } from 'src/app/store/post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: []
})
export class PostListComponent implements OnInit {

  public $posts: Observable<Post[]>;
  public length: number = 0;

  constructor(
    private store: Store
  ) { 
    this.$posts = this.store.select(state => state.post.posts);
  }

  ngOnInit(): void {
    
  }

  public removePost(id: string){
    this.store.dispatch(new RemovePost(id));
  }

}
