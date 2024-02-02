import Link from 'next/link';
import React from 'react';

const PostsPage = async() => {
    const res = await fetch ('http://localhost:5000/posts')
    const data = await res.json()
    // console.log(data);
    return (
        <div>
            <h1>this is Posts Page. here is totla {data.length} posts</h1>
            {
            data.map((post) => (
                <div key={post.id} className="card bg-gray-100 shadow-xl my-5 w-[70%] mx-auto">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>Des: {post.description}</p>
                        <p>Likes: {post.likeCount}</p>
                        <div className="card-actions justify-end">
                        <Link href={`/posts/${post.id}`}>
                        <button className="btn btn-primary">See Detail</button>
                        </Link>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
};

export default PostsPage;