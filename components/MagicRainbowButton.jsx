import React from 'react';
import styled from 'styled-components';

import useRainbow from './use-rainbow.hook';
import tw from "tailwind-styled-components"


const MagicRainbowButton = ({
  children,
  intervalDelay = 1300,
  uniqueName = "hello",
  ...delegated
}) => {
  const transitionDelay = intervalDelay * 1.25;
  console.log(uniqueName)
  
  const colors = useRainbow({ intervalDelay, uniqueName });

  const colorKeys = Object.keys(colors); // i think this is the source
  return (
    <ButtonElem2 
      {...delegated}
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
       
      }}
    
    >
      {children}
    </ButtonElem2>
  );
};

const ButtonElem = styled.button`
  position: relative;
  border: none;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  
`;


// missing hte shadow and hover raise   transition duration-500 ease-in-out transform hover:-translate-y-1 
const ButtonElem2 = tw.button`

  inline-block 
  
  text-lg 
  font-semibold
  rounded-full 
  text-white 
  px-8 
  py-3 
  cursor-pointer

  relative
  text-white
  

  
 
`;

// const ButtonElem2 = tw.button`
//  text-white font-bold py-4 px-6 rounded 

 
// `;

export default MagicRainbowButton;