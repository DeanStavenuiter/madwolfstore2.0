const LogoAnimationHome = () => {
  return (
    <div className="p-[15px] min-h-screen">
      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex h-full animate-logoAnimation items-center justify-center pl-5 pr-5 sm:pl-0 sm:pr-0'>
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
    </div>
  );
};

export default LogoAnimationHome;
