import React from 'react';

export const NewArticle = ({ title, text }) => {
  return (
    <article className='h-[140px] border-b-2 border-Grayish-blue py-7 last:border-none lg:h-[160px] lg:pt-4'>
      <h2 className='cursor-pointer hover:text-Soft-orange text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]'>
        {title}
      </h2>
      <p className='text-[15px]'>{text}</p>
    </article>
  );
};
