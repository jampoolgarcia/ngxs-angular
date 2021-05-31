import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddPost } from '../../store/post/post.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styles: []
})
export class PostNewComponent implements OnInit {

  public text: FormControl = new FormControl(null, Validators.required);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  addPost(){
    this.store.dispatch(new AddPost({
      id: uuid(),
      text: this.text.value
    }));

    this.text.reset();
  }


}
