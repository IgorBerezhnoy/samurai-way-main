import "./Profile.module.css"

export const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://img3.goodfon.ru/original/1152x864/8/69/priroda-gory-kamni-les.jpg"/>
            </div>
            <div>
                ava+description
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/72bf191180636107.63ccd92aa95c0.png"/>
            </div>
            <div>
                My posts
                <div>New post</div>
                <div className={"posts"}>
                    <div className={"item"}>post 1</div>
                    <div className={"item"}>post 2</div>
                    <div className={"item"}>post 3</div>
                </div>
            </div>
        </div>
    );
};
