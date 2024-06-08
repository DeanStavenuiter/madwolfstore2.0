'use client';

interface ButtonHomeProps {
  buttonClicked: boolean;
  showButton: boolean;
  setButtonClicked: (value: boolean) => void;
  setShowButton: (value: boolean) => void;
}

const ButtonHome = ({
  buttonClicked,
  showButton,
  setButtonClicked,
  setShowButton,
}: ButtonHomeProps) => {
  const handleClick = () => {
    const screenHeight = window.innerHeight;
    const pixelsToScroll = screenHeight;

    window.scrollTo({
      top: pixelsToScroll,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setButtonClicked(true);
    }, 1000);
  };

  setTimeout(() => {
    setShowButton(true);
  }, 1300);

  return (
    <>
      {showButton && (
        <div
          className='grid animate-Opacity place-items-center hover:cursor-pointer'
          onClick={handleClick}
        >
          <div className='flex h-16 w-16 animate-bounceAnimation items-center justify-center rounded-full border-2 border-solid border-gray-500 transform'>
            <span className='origin-center rotate-90 transform'>&#62;</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonHome;
