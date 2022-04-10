/*
  Developer Madison Lucey
  @version 3/29/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';




const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

/*

Developed Full Stack - Client & Server Side by Madison Rose Lucey
© Copyright 2021 all rights reserved | Responsive Website Design | Search Engine Friendly


   <a href="https://github.com/MaddieRose33?tab=repositories"  target="_blank" rel='noopener noreferrer'><span className="md:float-right mt-16 pt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400 ml-6 mr-3">GitHub</span></a>
          
        <a href="tel:+12065560528"  target="_blank" rel='noopener noreferrer'><span className="md:float-right mt-16 pt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400 ml-6 mr-3">(206) 556-0528</span></a>

        <a href="mailto:madisonlucey1248@gmail.com"  target="_blank" rel='noopener noreferrer'><span className="md:float-right mt-16 pt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400 ml-6 mr-3">MadisonLucey1248@gmail.com</span></a>
        <a href="https://www.linkedin.com/in/madison-lucey"  target="_blank" rel='noopener noreferrer'><span className="md:float-right mt-16 pt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400 ml-6 mr-3">LinkedIn</span></a>
        
        <a href="https://www.instagram.com/madisonroselucey/?hl=en" target="_blank" rel='noopener noreferrer'><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400 ml-6 mr-3">Instagram</span></a>
        <a href="https://twitter.com/lucey_madison?lang=en"  target="_blank" rel='noopener noreferrer'><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400 ml-6 mr-3">Twitter</span></a>


*/

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [
    { name: 'About', href: 'https://www.madisonlucey.com/' },
    { name: 'Blog', href: 'https://www.luceyblog.com/' },
    { name: 'madisonlucey1248@gmail.com', href: 'mailto:madisonlucey1248@gmail.com' },
    { name: '(206) 556-0528', href: 'tel:+12065560528' },
    // { name: 'Accessibility', href: '#' },
    // { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/madisonroselucey/?hl=en',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/lucey_madison?lang=en',
      icon: (props) => (
        <svg viewBox="0 0 250 204" fill="none" className="WhimsicalTwitterCTA__BirdSvg-sc-cfakb5-5 ldHcqy" width="75" height="29" >
        <defs >
          <linearGradient id="twitter-gradient" x1="0%" y1="0%" x2="0%" y2="100%" >
            <stop offset="10%" style={{stopColor: 'rgb(29, 161, 242)'}}></stop>
            <stop offset="100%" style={{stopColor: 'rgb(17, 98, 255)'}}></stop>
            </linearGradient></defs><path d="M78.62 203.59
          C172.96 203.59 224.56 125.43 224.56 57.6501
          C224.56 55.4301 224.56 53.2202 224.41 51.0202
          C234.448 43.7593 243.114 34.7689 250 24.4702
          C240.639 28.6182 230.708 31.3384 220.54 32.5401
          C231.247 26.13 239.261 16.0479 243.09 4.17015
          C233.022 10.1447 222.006 14.3553 210.52 16.6202
          C202.787 8.397 192.559 2.95183 181.419 1.12728
          C170.279 -0.69727 158.848 1.20051 148.895 6.52695
          C138.943 11.8534 131.023 20.3115 126.362 30.5925C121.701 40.8735 120.558 52.4042 123.11 63.4001C102.718 62.3778 82.768 57.0785 64.5564 47.8461C46.3448 38.6136 30.2784 25.6546 17.4 9.81015C10.8409 21.1018 8.832 34.4688 11.7823 47.1895C14.7326 59.9103 22.4202 71.0284 33.28 78.2802C25.1174 78.0382 17.1328 75.8363 10 71.8602C10 72.0702 10 72.2901 10 72.5101C10.0032 84.3523 14.1026 95.8288 21.6028 104.993C29.103 114.157 39.5423 120.445 51.15 122.79C43.5987 124.85 35.6758 125.151 27.99 123.67C31.2676 133.862 37.6486 142.774 46.2407 149.161C54.8328 155.548 65.2061 159.089 75.91 159.29C57.7474 173.564 35.3106 181.313 12.21 181.29C8.12903 181.282 4.05204 181.035 0 180.55C23.4564 195.603 50.7491 203.587 78.62 203.55" fill="url(#twitter-gradient)">
            </path>
            <mask id="twitter-outline-mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="250" height="204">
              <path d="M78.62 203.59C172.96 203.59 224.56 125.43 224.56 57.6501C224.56 55.4301 224.56 53.2202 224.41 51.0202C234.448 43.7593 243.114 34.7689 250 24.4702C240.639 28.6182 230.708 31.3384 220.54 32.5401C231.247 26.13 239.261 16.0479 243.09 4.17015C233.022 10.1447 222.006 14.3553 210.52 16.6202C202.787 8.397 192.559 2.95183 181.419 1.12728C170.279 -0.69727 158.848 1.20051 148.895 6.52695C138.943 11.8534 131.023 20.3115 126.362 30.5925C121.701 40.8735 120.558 52.4042 123.11 63.4001C102.718 62.3778 82.768 57.0785 64.5564 47.8461C46.3448 38.6136 30.2784 25.6546 17.4 9.81015C10.8409 21.1018 8.832 34.4688 11.7823 47.1895C14.7326 59.9103 22.4202 71.0284 33.28 78.2802C25.1174 78.0382 17.1328 75.8363 10 71.8602C10 72.0702 10 72.2901 10 72.5101C10.0032 84.3523 14.1026 95.8288 21.6028 104.993C29.103 114.157 39.5423 120.445 51.15 122.79C43.5987 124.85 35.6758 125.151 27.99 123.67C31.2676 133.862 37.6486 142.774 46.2407 149.161C54.8328 155.548 65.2061 159.089 75.91 159.29C57.7474 173.564 35.3106 181.313 12.21 181.29C8.12903 181.282 4.05204 181.035 0 180.55C23.4564 195.603 50.7491 203.587 78.62 203.55" fill="#1DA1F2"></path>
              </mask>
              <g mask="url(#twitter-outline-mask)">
                <path d="M142 170C71.2878 189.734 -5 165 -13 162L-35 179L29 233L255 214L233 53C218 112 185 158 142 170Z" fill="black" fill-opacity="0.15">
                  </path>
                  <path d="M137.81 33.6281C138.908 26.7935 142.892 20.4315 149.165 15.7718C155.444 11.1071 163.555 8.5 172 8.5" stroke="white" stroke-opacity="0.3" stroke-width="7" stroke-linecap="round">
                    </path>
                    <path d="M30 35C30 35 47.7854 49.8084 64.5 58.5C77 65 101.5 70 101.5 70" stroke="white" stroke-opacity="0.3" stroke-width="6" stroke-linecap="round"></path>
                    <path d="M19.1737 82.188C21.1771 83.813 23.8334 84.6749 27.4746 85.5417C31.1157 86.4084 34.3933 86.7503 36.8641 86.3991" stroke="white" stroke-opacity="0.15" stroke-width="4" stroke-linecap="round"></path>
                    </g></svg>
      
      ),
    },
    // {
    //   name: 'Facebook',
    //   href: '#',
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    {
      name: 'GitHub',
      href: 'https://github.com/MaddieRose33?tab=repositories',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props} >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: 'Dribbble',
    //   href: '#',
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
  ],
}



  return (

      <footer style={{backgroundColor: ' black'}} className="z-5 relative">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 -mt-32" >
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} target="_blank" className={`text-base text-white font-bold hover:text-pink-500 ease transition duration-300`}>
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          
{/* hsl(204deg, 67%, 85%)  really like the one on the left hsl(202deg, 71%, 90%);  pretty sure its this one hsl(202deg, 71%, 90%)*/}
          <div className="mt-8 flex justify-center space-x-6" >
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className={`text-base text-white font-bold hover:text-pink-500 ease transition duration-300`} >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-white font-bold">
          Developed Full Stack - Client & Server Side by Madison Rose Lucey<br></br>
&copy; Copyright 2022 all rights reserved | Responsive Website Design | Search Engine Friendly

<br></br><br></br><br></br><br></br><br></br>
{/* 
<svg width="100%" height="600" viewBox="0 0 1200 600" preserveAspectRatio="none" style={{display:'block'}}><path d="M 0,150 C 400,0 800,400 1200,150 L 1200,600 L 0,600 Z" fill="hsl(225deg, 15%, 15%)"></path></svg>

<svg width="100%" height="600" viewBox="0 0 1200 600" preserveAspectRatio="none" style={{display:'block', transform: "rotate(180deg)" }}><path d="M 0,150 C 400,0 800,400 1200,150 L 1200,600 L 0,600 Z" fill="hsl(225deg, 15%, 15%)"></path></svg>

<svg width="100%" height="300" viewBox="0 0 1200 400" preserveAspectRatio="none" style={{display:'block', minWidth: '600px'}}><path d="M 0,50 C 250,400 900,-200 1200,200 L 1200,400 L 0,400 Z" fill="black"></path></svg> */}


</p>

        </div>
      </footer>
    
    
  );
};

export default Footer;




