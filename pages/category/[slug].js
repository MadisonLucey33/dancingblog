import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, TealAuthor, Author, TealAuthorCopy } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div>
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}



        </div>
        
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
           
          </div>
         
        </div>
        {/* <div className="col-span-1 lg:col-span-4 ">
          <div className="relative lg:sticky top-0">
          
          </div>
        </div> */}

        
      </div>
      
    </div>
    <div className="-mb-96" style={{marginBottom: "-30rem"}}>
    <TealAuthor />
    <svg width="100%" height="600" viewBox="0 0 1200 600" preserveAspectRatio="none" style={{display:'block'}}><path d="M 0,150 C 400,0 800,400 1200,150 L 1200,600 L 0,600 Z" fill="hsl(225deg, 15%, 15%)"></path></svg>
  
    <TealAuthorCopy />
          <svg width="100%" className="z-0" height="900" viewBox="0 0 1200 600" preserveAspectRatio="none"  style={{display:'block', transform: "rotate(180deg)" }}><path d="M 0,150 C 400,0 800,400 1200,150 L 1200,600 L 0,600 Z" fill="hsl(225deg, 15%, 15%)"></path></svg>
          </div>
          </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
