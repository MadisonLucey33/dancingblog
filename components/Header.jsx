/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/27/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

import Geolocation from './Geolocation';
import { FeaturedPosts } from '../sections';
import MagicRainbowButton from './MagicRainbowButton';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);





  const myStyle = { 
    fontSize: "min(25px, 15vw)",
    opacity: "1",
    position: "relative",
    top: "-40px", // IMPORTANT
    left: "00px",
    textShadow: "rgb(21 17 24 / 50%) 1px 0px 30px, rgb(21 17 24 / 50%) 0px 6px 15px, rgb(21 17 24 / 50%) 2px 1px 2px", 
   //textShadow: "rgb(21 17 24 / 50%) 0px 0px 30px, rgb(21 17 24 / 50%) 0px 5px 15px, rgb(21 17 24 / 50%) 0px 1px 2px",
    color: "hsl(0deg,0%,100%)",
    lineHeight: "1.45",
    boxSizing: "border-box",
   
    marginLeft: "0.30em",
    marginRight: "15.0em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",

    zIndex: "2",
    fontWeight: "520",

   // textShadow: "1px 2px #000000",
 //  textShadow: "rgb(21 17 24 / 30%) 1px 0px 20px, rgb(21 17 24 / 50%) 0px 6px 7px, rgb(21 17 24 / 50%) 2px 1px 2px", 
  };


  const myFirstStyle1 = {
       
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "32px",
    paddingRight: "32px",

    isolation: "isolate"

};
const myStyle4 = { 
  position: "relative"
};



  return (
  <div className="z-5 " style={{marginTop: '-50rem'}}>
    <div className="container mx-auto px-10 mb-0  pb-5 " >
      {/* <svg width="100%" height="600" viewBox="0 0 1200 600" preserveAspectRatio="none" style={{display:'block'}}><path d="M 0,150 C 400,0 800,400 1200,150 L 1200,600 L 0,600 Z" fill="hsl(225deg, 15%, 15%)"></path></svg> */}
      
      <div className="border-b w-full inline-block border-gray-500 py-8 z-0">
        
        {/* <div className="md:float-left block"> */}
          {/* <Link href="/" >
            <span>
            <span className="cursor-pointer font-bold  text-white" style={{textShadow: "1px 1px #000000", fontSize: '2.5rem', lineHeight: '2.25rem', marginRight: '0.12rem;',}}>M</span><span className="cursor-pointer font-bold text-5xl text-white " style={{textShadow: "1px 1px #000000", fontSize: '2.1rem', lineHeight: '2.25rem', marginRight: '0.22rem;',}}>adison </span>
            <span className="cursor-pointer font-bold  text-white" style={{textShadow: "1px 1px #000000", fontSize: '2.5rem', lineHeight: '2.25rem', marginRight: '0.12rem;', }}>L</span><span className="cursor-pointer font-bold text-5xl text-white" style={{fontSize: '2.1rem', lineHeight: '2.25rem'}}>ucey's</span> 
            <span className="cursor-pointer font-normal text-5xl text-white" style={{fontSize: '2.1rem', lineHeight: '2.25rem', marginLeft: '0.85rem;'}}>Blog/Diary</span>
            </span>
          </Link> */}
          {/* <div className="cursor-pointer font-bold text-md text-white mt-2 text-red-200 ">✨ More coming soon -- spoiler Las Vegas & the Mojave Desert! ✨ </div> */}
        {/* </div> */}
        
        
        <div className="mt-16 md:float-left block ">
        <section style={{myFirstStyle1}} 
        className="z-5 "
        >
            
            <header style={myStyle4}>
              
                <div>
                  
                    <Link href="/" >
                    <h2 className="md:float-left lg:mr-96">
            <span className="cursor-pointer font-bold  text-white " style={{textShadow: "1px 1px #000000", fontSize: '2.5rem', lineHeight: '2.25rem', marginRight: '0.12rem;',}}>M</span><span className="cursor-pointer font-bold text-5xl text-white " style={{textShadow: "1px 1px #000000", fontSize: '2.1rem', lineHeight: '2.25rem', marginRight: '0.22rem;',}}>adison </span>
            <span className="cursor-pointer font-bold  text-white" style={{textShadow: "1px 1px #000000", fontSize: '2.5rem', lineHeight: '2.25rem', marginRight: '0.12rem;', }}>L</span><span className="cursor-pointer font-bold text-5xl text-white" style={{fontSize: '2.1rem', lineHeight: '2.25rem'}}>ucey's</span> 
            <span className="cursor-pointer font-normal text-5xl text-white ml-2.5 " style={{fontSize: '2.1rem', lineHeight: '2.25rem', marginLeft: '0.85rem;'}}> Blog/Diary</span>
            <div className="cursor-pointer font-bold text-md text-white mt-2 text-red-200 md:mr-0 md:ml:0 lg:-mr-8 lg:ml-0 xl:mr-0 xl:ml-0">✨ More coming soon -- spoiler Las Vegas & the Mojave Desert! ✨
            {/* <span className="pl-8 text-sm antialiased italic "><br></br> (Q): Did you write about me in your diary? <br></br>(A): Maybe I did. Maybe I will. read it and find out...</span> */}
            
            </div>
         
            </h2>
          
            
 </Link>

 
<span>


 <a href={`https://www.madisonlucey.com/`} target="_blank"> {/* style={{backgroundColor: '#b8129c'}}   style={{backgroundColor: '#c714a9'}}*/}
          {/* <span className="transition duration-500 ease transform hover:-translate-y-1  md:float-right ml-5 bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer mt-2" style={{backgroundColor: '#d61eb7'}} >Career Portfolio</span> */}
          {/* <button className="pushable   mt-8  ml-5 sm:ml-0  sm:mt-8  md:float-left md:mr-64 md:ml-0 md:mt-8 lg:float-right lg:-mt-20 lg:mr-0 xl:mr-0 xl:-mt-11 2xl:mr-0 2xl:mt-7 2xl:ml-52 ">
          <span className="front">
          
          </span>

          
        </button> */}

        <button type="button  "  className="pushable mt-8  ml-5 sm:ml-0  sm:mt-8  md:float-left md:mr-64 md:ml-0 md:mt-8 lg:float-right lg:-mt-20 lg:mr-0 xl:mr-0 xl:-mt-11 2xl:mr-0 2xl:mt-7 2xl:ml-52 ">
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front"> Career Portfolio ✨</span>
      </button>
          {/* <MagicRainbowButton children="Continue Reading " uniqueName="myCareerPortfolio"/> */}

        
          
        </a>


        {/*  only visible for lg displays and up aka computers, desktops and probably laptops */}
        <div className=" flex invisible sm:invisible md:invisible lg:visible 2xl:ml-56" style={{paddingLeft: '38.9rem'}}>
           
              { categories.map((category, index) => ( // was considering  textShadow: "0px 1px #000000",
                <Link key={index} href={`/category/${category.slug}`} className="min-w-full "><span className="md:float-right  pr-5 mr-2 flex -mt-16 align-middle text-white  font-semibold cursor-pointer transition duration-500 hover:text-pink-400  md:mr-0  md:-pl-32   lg:pl-0 lg:pr-5 lg:mr-2 lg:mt-0.5 xl:-mt-8 " style={{ letterSpacing: "0.034rem", }}>{category.name}</span></Link>
              ))}
               <Link href="/" ><span className="md:float-right -mt-16 align-middle text-white  font-semibold cursor-pointer transition duration-500 hover:text-pink-400 lg:inline-block lg:whitespace-nowrap lg:w-24  lg:mt-0.5 xl:-mt-8 xl:mr-0 xl:inline-block xl:whitespace-nowrap" style={{letterSpacing: "0.034rem"}}>Blog Home</span></Link>

        </div>

         {/*  only visible for md displays and smaller i.e. tablets, phones and small laptops maybe */}
        <div className=" flex visible mt-5 sm:visible  sm:mt-5  md:visible md:mt-5 lg:mt-0 lg:hidden 2xl:ml-56 " style={{paddingLeft: '19.9rem'}}>
           
           { categories.map((category, index) => ( // was considering  textShadow: "0px 1px #000000",
             <Link key={index} href={`/category/${category.slug}`} className="min-w-full "><span className="md:float-right  pr-5 mr-2 flex -mt-16 align-middle text-white  font-semibold cursor-pointer transition duration-500 hover:text-pink-400  md:mr-0  md:-pl-32   lg:pl-0 lg:pr-5 lg:mr-2 lg:mt-0.5 xl:-mt-8 " style={{ letterSpacing: "0.034rem", }}>{category.name}</span></Link>
           ))}
            <Link href="/" ><span className="md:float-right -mt-16 align-middle text-white  font-semibold cursor-pointer transition duration-500 hover:text-pink-400 sm:inline-block sm:whitespace-nowrap   lg:inline-block lg:whitespace-nowrap lg:w-24  lg:mt-0.5 xl:-mt-8 xl:mr-0 xl:inline-block xl:whitespace-nowrap" style={{letterSpacing: "0.034rem"}}>Blog Home</span></Link>

     </div>

        </span>

  
            
                    

                </div>    
   
            </header>
           
        </section>
      
        {/* <section
        className="pb-0 sm:mb-0 sm:mt-0 md:mt-28 lg:mt-16 lg:mb-0 xl:mt-28 xl:mb-0"
        > 
            <div style={myFourthStyle4} className="text-white flex-wrap pt-350 md:px-50"></div>
            
      
          
        </section> */}

      
    </div>

        <div className="hidden md:float-left md:contents">
          
        {/* <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div> eventually will use this code for setting a link back to the career portfolio site */}
      
       
   
            
            
            {/* <Link href="/"><span className="md:float-right mt-6 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400 ml-3 mr-3" style={{letterSpacing: "0.034rem"}}>Blog Home</span></Link>
          {categories.map((category, index) => ( // was considering  textShadow: "0px 1px #000000",
            <Link key={index} href={`/category/${category.slug}`}> <MagicRainbowButton children="Continue Reading "/> </Link>
          ))} */}
           
        </div>
        



      </div>
      
      {/* <Geolocation /> */}
     
      <div>
     
      <FeaturedPosts />
      </div>
    </div>

    </div>
  );
};

export default Header;
