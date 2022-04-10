/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/27/2022
  Responsive & Interactive React JS Blog
*/

import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => { //hover:scale-105

  const getUpdatedDate = () => {
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

  return(
 // hover:box-shadow-10xl
  <div className="h-72 mt-8 transition duration-500 ease transform  hover:z-5 mt-0 opacity-100 lg:hover:relative lg:hover:-translate-y-4 mb-3 ">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover inline-block w-full h-72  " style={{ backgroundImage: `url('${post.featuredImage.url}')`, boxShadow: '2.5px 4.0px 9.0px hsl(0deg 0% 0% / 0.25)'}} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">{ getUpdatedDate() }</p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg object-cover h-5 w-5"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full transition duration-500 ease transform hover:-translate-y-1 " /></Link>
  </div>
  
  );
  };

export default FeaturedPostCard;
