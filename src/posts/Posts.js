import Post from './Post.js';

function Posts(props) {

    if (!props.posts || props.posts.length === 0) {
        return <div>Нет постов для отображения</div>;
    }

    return (
        <div>
            {props.posts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    removePost={props.removePost}
                />
            ))}
        </div>
    );
}

export default Posts;