/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  const getUpdatedDate = (post) => {
    let slug = post.slug;

    switch(slug) {
      case 'blog-1': // May 20, 2021
        return (<span>May 20, 2021</span>);
      case 'blog-2': // Sat May 22, 2021
        return (<span>May 22, 2021</span>);
      case 'blog-3': // Sun May 24, 2021
        return (<span>May 24, 2021</span>);
      case 'blog-4': // Tue May 25, 2021
        return (<span>May 25, 2021</span>);
      case 'blog-5': // Wed May 26, 2021
        return (<span>May 26, 2021</span>);
      case 'blog-6': // Thurs May 27, 2021
        return (<span>May 27, 2021</span>);
      case 'blog-7': //  Sat May 29, 2021
        return (<span>May 29, 2021</span>);
      case 'blog-8': //  Sun May 30, 2021
        return (<span>May 30, 2021</span>);
      case 'blog-9': // Tue June 1, 2021
        return (<span>June 01, 2021</span>);
      default:
        return (<span>moment(post.createdAt).format('MMM DD, YYYY')</span>);
    }

  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <Link href={`/post/${post.slug}`} className="text-md" key={index}>
          <div key={index} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image
                loader={grpahCMSImageLoader}
                alt={post.title}
                height="60px"
                width="60px"
                unoptimized
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">{ getUpdatedDate(post) }</p>
              <Link href={`/post/${post.slug}`} className="text-md" key={index}>
                <span className="transition duration-400 hover:text-pink-600">{post.title}</span>
                </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
