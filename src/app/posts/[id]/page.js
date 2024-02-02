import Link from 'next/link';
import React from 'react';

export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();
    const ids = posts.map((post) => {
      return {
        id: post.id + "",
      };
    });
    // console.log(ids);
    return ids;
  }

const PostDetailPage = async({params}) => {
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const data = await res.json()
    return (
        <div className='mx-auto w-full p-4 card shadow-xl'>
            <h1 className='text-center'>this is single post page for post {data.id} </h1>
            <div className=" mx-auto card-body w-[70%]">
                        <h2 className="card-title">{data.title}</h2>
                        <p>Des: {data.description}</p>
                        <p>Likes: {data.likeCount}</p>
                        
                    </div>
        </div>
    );
};

export default PostDetailPage;