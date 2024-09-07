import React from "react";

import { green } from "../assets";

const Hero = () => {
  return (
    <header className='w flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full
       mb-7 pt-1 mt-0'>
        <img src={green} alt='sumz_logo' className='w-44 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/kottarivaibhav/ai_summarizer", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;