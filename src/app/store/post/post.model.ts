export class PostStateModel {
    posts: Post[] = [];
}

export interface Post {
    id: string;
    text: string;
}