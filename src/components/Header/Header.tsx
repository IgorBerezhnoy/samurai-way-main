import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://mir-s3-cdn-cf.behance.net/projects/max_808/54881128032875.5628e85cddaa7.jpg"
                alt="Logotype"
            />
        </header>
    );
};
