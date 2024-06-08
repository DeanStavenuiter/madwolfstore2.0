'use client';

import { useState } from 'react';
import ButtonHome from './ButtonHome';

const LogoAnimation = () => {

  const [buttonClicked, setButtonClicked] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div className={`${buttonClicked ? 'hidden' : ''} h-screen`}>
      <div className='grid place-items-center sm:h-[calc(100%-10rem)]'>
        <div className='flex animate-logoAnimation items-center justify-center pl-5 pr-5 sm:pl-0 sm:pr-0'>
          <video
            autoPlay
            muted
            playsInline
            preload='auto'
            width={480}
            height={480}
            className='sm:w-[480px] sm:h-[480px] rounded-[100px]'
          >
            <source
              src={
                'https://madwolfstore.s3.amazonaws.com/logo_animation+(1)_1.mp4'
              }
              type='video/mp4;codecs=hvc1'
            />
            <source
              src={
                'https://madwolfstore.s3.amazonaws.com/logo_animation+(1)_1.webm'
              }
              type='video/webm'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* <ButtonHome
        buttonClicked={buttonClicked}
        showButton={showButton}
        setShowButton={setShowButton}
        setButtonClicked={setButtonClicked}
      /> */}
    </div>
  );
};

export default LogoAnimation;
