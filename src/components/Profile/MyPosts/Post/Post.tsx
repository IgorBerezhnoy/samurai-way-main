import React from 'react';
import classes from './Post.module.css';

export const Post = () =>
    (
        <div className={classes.item}><img
            src="https://mir-s3-cdn-cf.behance.net/user/276/72bf191180636107.63ccd92aa95c0.png"/>
            post 1
            <div>
                <span>like</span>
            </div>

        </div>
    );
