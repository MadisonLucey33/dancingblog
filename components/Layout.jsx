/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
   <svg className="-mt-40 min-w-full object-cover w-max sm:min-h-fit  sm:object-cover sm:object-bottom sm:w-max md:w-max 2xl:object-right 3xl:w-1/12  lg:overflow-y-scroll lg:container lg:mx-auto lg:px-0 lg:mb-0  lg:pb-5" width="100%" height="900" viewBox="0 0 1200 600" preserveAspectRatio="none"  style={{display:'block', transform: "rotate(180deg)", }}><path d="M 0,150 C 400,0 800,400 1200,150 L 1200,600 L 0,600 Z" fill="hsl(225deg, 15%, 15%)"></path></svg>
    <Header />
    {children}
    {/* <svg width="100%" height="200" viewBox="0 0 1200 600" preserveAspectRatio="none" style={{display:'block'}}><path d="M 0,150 C 400,0 800,400 1200,150 L 1200,600 L 0,600 Z" fill="hsl(225deg, 15%, 15%)"></path></svg>
    <svg width="100%" height="200" viewBox="0 0 1200 600" preserveAspectRatio="none" style={{display:'block', transform: "rotate(180deg)" }}><path d="M 0,150 C 400,0 800,400 1200,150 L 1200,600 L 0,600 Z" fill="hsl(225deg, 15%, 15%)"></path></svg> */}
     <svg className="z-5 relative" width="100%" height="300" viewBox="0 0 1200 400" preserveAspectRatio="none" style={{display:'block', minWidth: '600px'}}><path d="M 0,50 C 250,400 900,-200 1200,200 L 1200,400 L 0,400 Z" fill="black"></path></svg>
    <Footer />
  </>
);

export default Layout;
