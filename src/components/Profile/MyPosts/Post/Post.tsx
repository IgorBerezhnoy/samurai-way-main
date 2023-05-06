import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
    message: string,
    like:number

}
export const Post = (props:PostPropsType) =>
    (
        <div className={classes.item}><img
            src="https://mir-s3-cdn-cf.behance.net/user/276/72bf191180636107.63ccd92aa95c0.png"/>
            {props.message}
            <div>
                <span>like </span> {props.like}
            </div>

        </div>
    );
