/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

/* THIS AUTHOR TEXT IS THE ONE DISPLAYED IN THE CATEGOIRES SECTION */

import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center -mb-28 p-12 relative rounded-lg font-bold " style={{marginTop: '45rem', marginLeft: '9rem', marginLeft: '0rem'}} >
    <div className="absolute left-0 right-0 -top-14">
      {/* <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      /> */}
    </div>
    {/* <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3> */}
    <p className="text-neutral-900 text-xl">
      {/* {author.bio} doesnt work when called from the CategoryPost function in the /pages/slug.js */}
      I am a 19 year old college graduate with a passion for computer science. I like to think outside of the box and come up with innovative solutions to complex problems. This is an Instagram worthy blog/journal… or something of the sort - you’ll see! 😋
      </p>
  </div>
);

export default Author;
