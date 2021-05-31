import { Post } from './post.model'

export class AddPost {
    static readonly type = '[POST] add';
    constructor(public payload: Post){}
}

export class RemovePost {
    static readonly type = '[POST] remove';
    constructor(public payload: string){}
}