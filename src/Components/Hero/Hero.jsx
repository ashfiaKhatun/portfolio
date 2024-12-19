import profile from "../../assets/profile.jpg";
const Hero = () => {
  return (
    <>
      <div id="home" className="text-white flex flex-col items-center my-10">
        <img src={profile} className="w-40 h-40 bg-white rounded-3xl" alt="" />
        <h1 className="text-xl lg:text-5xl lg:w-1/2 my-4 text-center ">
          <span className="bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
            I'm Ashfia Khatun
          </span>
          <br /> Junior Developer.
        </h1>
        <div className="text-sm lg:text-2xl lg:w-1/2 flex gap-4 items-center justify-center">
          <a href="https://www.linkedin.com/in/ashfia-khatun" target="_blank" className="px-2 lg:px-4 py-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white rounded-xl cursor-pointer transition hover:scale-105">
            Connect with me
          </a>
          <button className="px-4 lg:px-12 py-2 border-2 hover:border-purple-500 cursor-pointer text-white rounded-xl">
            <a href="https://drive.google.com/file/d/1-VnZBMlNpAmHlydiLCaX8weMBKR_A9gV/view?usp=sharing" target="_blank">

              My Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
