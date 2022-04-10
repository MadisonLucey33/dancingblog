/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };



  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Please Comment :)</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} onChange={onInputChange} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" value={formData.name} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="First name" name="name" />
        <input type="email" value={formData.email} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
          
        </div>
        {error ? <span className="text-base text-gray-500 block-inline ml-4 -mb-8 -mt-4 ">*All fields are required</span>
              :  <span className="text-base text-gray-500 block-inline ml-4 -mb-8  -mt-4 invisible">*All fields are required</span>}
      </div>
     
      <div className="mt-8"> {/* bg-pink-600  */}
        {/* <button type="button" onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" style={{backgroundColor: '#d61eb7'}}>Post Comment</button> */}

   
        {/* <button type="button" className="pushable" onClick={handlePostSubmission}>
          <span className="front">
            Push Me 😋
          </span>
        </button> 
        <button type="button" className="pushable" >
          <span className="front">
            Push Me 😋
          </span>
        </button>  */}

        

        <button type="button"  className="pushable" onClick={handlePostSubmission}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">Push Me 😋</span>
      </button>

    
   
        <svg className="ml-56 -mt-7" viewBox="0 0 310 129" fill="none" preserveAspectRatio="none" style={{position:'relative', width: '330px', height: '100%', overflow: 'visible'}}><path d="M10.9756 5C31.3756 18.3237 42.2813 22.3973 46.3024 42.0904C51.5051 67.5697 18.9366 75 6.00002 96.4577C-15.9765 132.91 85.5 124.914 108 124.914H310M10.9756 5C16.4488 12.6215 18.9366 26.9662 18.9366 26.9662M10.9756 5C22.5 8.5 38 7 38 7" stroke="#000000" stroke-width="3"></path></svg>
        {/* <span className="ml-96 mb-8 z-5  font-medium"  style={{position:'relative', overflow: 'visible', color: 'hsl(345deg 100% 47%)'}}>To comment!</span> */}
       
        <p className="text-4xl -mt-12 ml-80"  style={{color: 'hsl(345deg 100% 47%)'}}>To comment!</p>
        {/* <div class="WhimsicalTwitterCTA__MainCol-sc-cfakb5-2 cLMdSI"><p class="Paragraph-sc-d2u36h-0 dWwFxy">This book should take about an hour to read, but it took me six months to write. I'd really appreciate if you could let your friends know about it on twitter!</p><div class="WhimsicalTwitterCTA__ArrowWrapper-sc-cfakb5-3 eDZCtj"><svg viewBox="0 0 310 129" fill="none" preserveAspectRatio="none" style={{width: '330px', height: '100%', overflow: 'visible'}}><path d="M10.9756 5C31.3756 18.3237 42.2813 22.3973 46.3024 42.0904C51.5051 67.5697 18.9366 75 6.00002 96.4577C-15.9765 132.91 85.5 124.914 108 124.914H310M10.9756 5C16.4488 12.6215 18.9366 26.9662 18.9366 26.9662M10.9756 5C22.5 8.5 38 7 38 7" stroke="var(--color-text)" stroke-width="3"></path></svg></div><a href="https://twitter.com/share?url=https://www.joshwcomeau.com/effective-portfolio/&amp;text=%E2%80%9CBuilding%20an%20Effective%20Dev%20Portfolio%E2%80%9D%2C%20a%20free%20instruction%20manual%20for%20creating%20a%20stellar%20portfolio%20site%20that%20appeals%20to%20employers.%0A%0A&amp;via=JoshWComeau" target="_blank" tabindex="-1" class="WhimsicalTwitterCTA__Trigger-sc-cfakb5-4 dSxnzY"><div class="MobileOnly-sc-yx9m9d-0 bUWpy">Share on Twitter</div><div class="DesktopOnly-sc-2pwx0n-0 fzHNaI">Click the bird</div></a></div> */}
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
  );
};

export default CommentsForm;
