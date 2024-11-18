const Navbar: React.FC = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center fixed">
        <div className="flex justify-between items-center w-[86.8125rem] h-[100%] pt-[1.75rem] pb-[1rem] px-[1.25rem]">
          <span className="text-[20px] text-[#f2f2f2] font-[semi-bold] tracking-wide">
            CzyberK
          </span>
          <div className="flex justify-center items-center gap-8 text-[#f2f2f2] font-[extra-light]">
            <span>Home</span>
            <span>Projects</span>
            <span>Certifications</span>
            <span>Feedbacks</span>
            <span className="cursor-pointer py-[1rem] px-[1.75rem] border-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#282828]">
              Blog
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
