import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () =>
    (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
