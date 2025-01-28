import { useState } from 'react';

interface NavbarProps {
  isExperiencesSectionActive: boolean;
  isBlogsSectionActive: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  isBlogsSectionActive,
  isExperiencesSectionActive,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleToggleWindow = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        className={`w-[100%] flex justify-center items-center fixed z-30 transition-all duration-200 ease-in ${
          isBlogsSectionActive
            ? 'bg-[#101010] text-[#f2f2f2]'
            : isExperiencesSectionActive
            ? 'bg-[#efefef] text-[#101010]'
            : 'bg-transparent text-[#f2f2f2]'
        }`}
      >
        <div
          className={`flex justify-between items-center w-[86.8125rem] h-full transition-all duration-200 ease-in ${
            isBlogsSectionActive || isExperiencesSectionActive
              ? 'pt-[1rem] pb-[1rem] px-[1rem]'
              : 'pt-[1.75rem] pb-[1rem] px-[1.25rem]'
          }`}
        >
          <span className="text-[20px] font-[semi-bold] tracking-wide">
            Klubbr
          </span>

          <div
            onClick={handleToggleWindow}
            className="sm:flex xxl:hidden cursor-pointer relative w-[30px] flex-col justify-start items-end group gap-3"
          >
            <div className={`w-[30px] h-[1px] bg-white transform`}></div>
            <div className={`w-[18px] h-[1px] bg-white transform`}></div>
          </div>

          <div className="sm:hidden flex justify-center items-center gap-8 font-[extra-light]">
            <span>Home</span>
            <span>Projects</span>
            <span>Certifications</span>
            <span>Testimonials</span>
            <span
              className={`cursor-pointer py-[1rem] px-[1.75rem] ${
                isBlogsSectionActive
                  ? 'reverse-btn'
                  : isExperiencesSectionActive
                  ? 'p-2 border-[1px] border-[#101010] text-[#101010] hover:bg-[#101010] hover:text-white'
                  : 'reverse-btn'
              } `}
            >
              Blog
            </span>
          </div>
        </div>
      </div>

      <div
        className={`fixed right-0 bg-[#282828] z-40 ${
          isOpen && !isClosing ? 'animate-slideIn' : ''
        } ${isClosing ? 'animate-slideOut' : ''}`}
      >
        {isOpen && !isClosing && (
          <div
            onClick={handleToggleWindow}
            className="w-full h-[30px] cursor-pointer relative w-[30px] flex flex-col justify-center items-end group"
          >
            <div className="w-[30px] h-[1px] bg-white transform rotate-[-45deg] mt-[1px]"></div>
            <div className="w-[30px] h-[1px] bg-white transform rotate-[-135deg] mt-[-1px]"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
