import { types } from './../actions/types';
import postsReducer from  './posts/reducer';
import { italic } from 'ansi-colors';

describe('Post Reducer', () => {
    test('it should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    })


    test('it should return new State', () => {
        const posts = [{title:"Test 1"},{title:'Test 2'},{title:'Test 3'}]
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    })
})

