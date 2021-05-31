import { State, Action, StateContext, Selector} from '@ngxs/store';
import { PostStateModel } from './post.model';
import { AddPost, RemovePost} from './post.actions';
@State({
    name: 'post',
    defaults: {
        posts: []
    }
})
export class PostState {
    @Selector()
    static getPosts(states: PostStateModel) { return states.posts }

    // adding a post to the state
    @Action(AddPost)
    add(
        { getState, patchState }: StateContext<PostStateModel>,
        { payload }: AddPost 
    )
    {
        const state = getState();
        patchState({
            posts: [...state.posts, payload]
        });
    }

    @Action(RemovePost)
    remove({ getState, patchState}: StateContext<PostStateModel>,
           { payload }: RemovePost
        ){
            patchState({
                posts: getState().posts.filter(post => post.id !== payload)
            });
        }



}