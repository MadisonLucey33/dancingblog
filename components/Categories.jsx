/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <span>
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 ">
      <h3 className="text-xl mb-3 font-semibold border-b pb-4 ">Categories 
      
      </h3>
    
      {categories.map((category, index) => (
        // <Link key={index} href={`/category/${category.slug}`}>
        <a key={index} href={`/category/${category.slug}`}>
        <span className={`block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 `} >
          <span style={{transform:"translateY(5px) translateX(0px)", color: "hsl(245deg, 100%, 60%)"}} class="List__IconWrapper-sc-ox71bz-5 gYniyB mr-2 inline "><svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline hover:translate-x-3 transform ease transition duration-300" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          
          <a href={`/category/${category.slug}`} className={`cursor-pointer inline   ${(window.location.pathname == `/category/${category.slug}`) ? 'text-pink-600 font-semibold' : ''} text-base text-black font-bold hover:text-pink-500 ease transition duration-300`}  style={{letterSpacing: "0.027rem"}}>
            {category.name}
            </a>
            </span>
         

            </span>
           </a>
        // </Link>
      ))
      
      } 
    
  
   

    </div>
  
  
     {/* <a href="../post/blog-9/" className="ml-32  invisible lg:visible"><svg className="ml-32  invisible lg:visible" width="0" height="0" viewBox="0 0 50 42" fill="none" style={{transform: "rotate(0deg);", transform: "rotate(6.21778deg)"}}><defs><linearGradient id="active-gradient-hmrs" x1="25" y1="42" x2="26.3796" y2="0.0453673" gradientUnits="userSpaceOnUse"><stop stop-color="hsl(353deg, 100%, 52%)"></stop><stop offset="1" stop-color="hsl(313deg, 100%, 52%)"></stop></linearGradient><linearGradient id="inactive-gradient-hmrs" x1="15" y1="41" x2="42" y2="-1.5" gradientUnits="userSpaceOnUse"><stop stop-color="#666" stop-opacity="0.4"></stop><stop offset="1" stop-color="#AAA" stop-opacity="0.4"></stop></linearGradient></defs><mask id="like-button-mask-hmrs" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="42"><path d="M13.2537 0.0255029C23.4033 0.0255029 25.0273 10.5191 25.0273 10.5191C25.0273 10.5191 26.6512 -0.60088 37.6129 0.0255029C44.3441 0.410148 48.7484 6.32169 48.9804 12.1981C49.7924 32.7656 28.7678 41.5 25.0273 41.5C21.2868 41.5 -0.549833 32.3459 1.07416 12.1981C1.54782 6.32169 6.29929 0.0255029 13.2537 0.0255029Z" fill="#000000"></path></mask><mask id="active-gradient-mask-hmrs" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="42"><polygon points="
     0,42
     50,42
     50,-0.011698533618279328
     0,-0.011698533618279328
   " fill="#000000"></polygon></mask><g mask="url(#like-button-mask-hmrs)"><path d="M13.2537 0.0255029C23.4033 0.0255029 25.0273 10.5191 25.0273 10.5191C25.0273 10.5191 26.6512 -0.60088 37.6129 0.0255029C44.3441 0.410148 48.7484 6.32169 48.9804 12.1981C49.7924 32.7656 28.7678 41.5 25.0273 41.5C21.2868 41.5 -0.549833 32.3459 1.07416 12.1981C1.54782 6.32169 6.29929 0.0255029 13.2537 0.0255029Z" fill="url(#inactive-gradient-hmrs)"></path><g mask="url(#active-gradient-mask-hmrs)"><path d="M13.2537 0.0255029C23.4033 0.0255029 25.0273 10.5191 25.0273 10.5191C25.0273 10.5191 26.6512 -0.60088 37.6129 0.0255029C44.3441 0.410148 48.7484 6.32169 48.9804 12.1981C49.7924 32.7656 28.7678 41.5 25.0273 41.5C21.2868 41.5 -0.549833 32.3459 1.07416 12.1981C1.54782 6.32169 6.29929 0.0255029 13.2537 0.0255029Z" fill="url(#active-gradient-hmrs)"></path></g><g style={{opacity: "0", transform: "translate(0px, 0px);"}}><circle cx="15" cy="22" r="2" fill="#000000" fill-opacity="0.4"></circle><circle cx="35" cy="22" r="2" fill="#000000" fill-opacity="0.4"></circle></g><g style={{opacity: "1;"}}><path d="M 13 23 Q 15 19, 17 23 " stroke="#000000" stroke-opacity="0.4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M 33 23 Q 35 19, 37 23 " stroke="#000000" stroke-opacity="0.4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g><g><mask id="tongue-mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="20" y="27" width="11" height="6"><path d="M28.3333 27H21.6666C21.6666 27 20.0001 27 20 29C19.9999 31 22.3875 33 25 33C27.6125 33 30 31 30 29C30 27 28.3333 27 28.3333 27Z" fill="#000000" fill-opacity="0.4"></path></mask><g mask="url(#tongue-mask)" style={{opacity: "1"}}><path d="M28.3333 27H21.6666C21.6666 27 20.0001 27 20 29C19.9999 31 22.3875 33 25 33C27.6125 33 30 31 30 29C30 27 28.3333 27 28.3333 27Z" fill="#000000" fill-opacity="1"></path><circle cx="25" cy="35" r="5" fill="#DB2C49" fill-opacity="0.5"></circle></g><path d="
 M 20 30
 Q 25 33.6 30 30
" stroke="#000000" stroke-opacity="0.4" stroke-linecap="round" style={{opacity: "0;"}}></path></g><g><path d="M53.5 18.5L47 5C47 5 53.5 31.9722 24.5 36C-4.5 40.0278 1 1.5 1 1.5L-6.5 25L8.00002 44.5L15.5 52L39 49L53.5 18.5Z" fill="black" fill-opacity="0.1"></path><path d="M6.14471 8.44525C6.64924 7.12038 7.41962 5.99208 8.36394 5.15003C9.30652 4.30953 10.3901 3.78182 11.5089 3.58622" stroke="white" stroke-opacity="0.45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.7084 5.95975C32.7822 4.70067 34.1021 3.81419 35.484 3.37609" stroke="white" stroke-opacity="0.45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>
<svg width="48" className="ml-36 mt-8 " height="40.32" viewBox="0 0 50 42" fill="none" style={{transform: "rotate(0.21778deg)"}}><defs><linearGradient id="active-gradient-hmrs" x1="25" y1="42" x2="26.3796" y2="0.0453673" gradientUnits="userSpaceOnUse"><stop stop-color="hsl(353deg, 100%, 52%)"></stop><stop offset="1" stop-color="hsl(313deg, 100%, 52%)"></stop></linearGradient><linearGradient id="inactive-gradient-hmrs" x1="15" y1="41" x2="42" y2="-1.5" gradientUnits="userSpaceOnUse"><stop stop-color="#666" stop-opacity="0.4"></stop><stop offset="1" stop-color="#AAA" stop-opacity="0.4"></stop></linearGradient></defs><mask id="like-button-mask-hmrs" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="42"><path d="M13.2537 0.0255029C23.4033 0.0255029 25.0273 10.5191 25.0273 10.5191C25.0273 10.5191 26.6512 -0.60088 37.6129 0.0255029C44.3441 0.410148 48.7484 6.32169 48.9804 12.1981C49.7924 32.7656 28.7678 41.5 25.0273 41.5C21.2868 41.5 -0.549833 32.3459 1.07416 12.1981C1.54782 6.32169 6.29929 0.0255029 13.2537 0.0255029Z" fill="#000000"></path></mask><mask id="active-gradient-mask-hmrs" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="42"><polygon points="
     0,42
     50,42
     50,37.91808092004336
     0,37.91808092004336
   " fill="#000000"></polygon></mask><g mask="url(#like-button-mask-hmrs)"><path d="M13.2537 0.0255029C23.4033 0.0255029 25.0273 10.5191 25.0273 10.5191C25.0273 10.5191 26.6512 -0.60088 37.6129 0.0255029C44.3441 0.410148 48.7484 6.32169 48.9804 12.1981C49.7924 32.7656 28.7678 41.5 25.0273 41.5C21.2868 41.5 -0.549833 32.3459 1.07416 12.1981C1.54782 6.32169 6.29929 0.0255029 13.2537 0.0255029Z" fill="url(#inactive-gradient-hmrs)"></path><g mask="url(#active-gradient-mask-hmrs)"><path d="M13.2537 0.0255029C23.4033 0.0255029 25.0273 10.5191 25.0273 10.5191C25.0273 10.5191 26.6512 -0.60088 37.6129 0.0255029C44.3441 0.410148 48.7484 6.32169 48.9804 12.1981C49.7924 32.7656 28.7678 41.5 25.0273 41.5C21.2868 41.5 -0.549833 32.3459 1.07416 12.1981C1.54782 6.32169 6.29929 0.0255029 13.2537 0.0255029Z" fill="url(#active-gradient-hmrs)"></path></g><g style={{opacity: "1", transform: "translate(-0.0625px, 0.0179688px)"}}><circle cx="15" cy="22" r="2" fill="#000000" fill-opacity="0.4"></circle><circle cx="35" cy="22" r="2" fill="#000000" fill-opacity="0.4"></circle></g><g style={{opacity: "0"}}><path d="M 13 23 Q 15 19, 17 23 " stroke="#000000" stroke-opacity="0.4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M 33 23 Q 35 19, 37 23 " stroke="#000000" stroke-opacity="0.4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g><g><mask id="tongue-mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="20" y="27" width="11" height="6"><path d="M28.3333 27H21.6666C21.6666 27 20.0001 27 20 29C19.9999 31 22.3875 33 25 33C27.6125 33 30 31 30 29C30 27 28.3333 27 28.3333 27Z" fill="#000000" fill-opacity="0.4"></path></mask><g mask="url(#tongue-mask)" style={{opacity: "0"}}><path d="M28.3333 27H21.6666C21.6666 27 20.0001 27 20 29C19.9999 31 22.3875 33 25 33C27.6125 33 30 31 30 29C30 27 28.3333 27 28.3333 27Z" fill="#000000" fill-opacity="1"></path><circle cx="25" cy="35" r="5" fill="#DB2C49" fill-opacity="0.5"></circle></g><path d="
 M 20 30
 Q 25 33.6 30 30
" stroke="#000000" stroke-opacity="0.4" stroke-linecap="round" style={{opacity: "1"}}></path></g><g><path d="M53.5 18.5L47 5C47 5 53.5 31.9722 24.5 36C-4.5 40.0278 1 1.5 1 1.5L-6.5 25L8.00002 44.5L15.5 52L39 49L53.5 18.5Z" fill="black" fill-opacity="0.1"></path><path d="M6.14471 8.44525C6.64924 7.12038 7.41962 5.99208 8.36394 5.15003C9.30652 4.30953 10.3901 3.78182 11.5089 3.58622" stroke="white" stroke-opacity="0.45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.7084 5.95975C32.7822 4.70067 34.1021 3.81419 35.484 3.37609" stroke="white" stroke-opacity="0.45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>
</a> */}


</span>
  );
};

export default Categories;
