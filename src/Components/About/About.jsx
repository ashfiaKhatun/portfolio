import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="text-white opacity-80 lg:mt-16 text-center">
      <h1 className="text-2xl lg:text-5xl font-semibold text-center mb-4 lg:mb-10 text-white">
        About
      </h1>
      <div className="flex lg:items-center text-left lg:justify-center lg:gap-12">
        <div className="">
          <img src={profile} alt="" className="w-60 h-60 hidden" />
        </div>
        <div className="lg:w-2/3 lg:px-8 text-center">
          <p>
            <span className="mb-3">
              Hello! I'm Ashfia Khatun, graduating from Information Technology and Management Department at Daffodil International University. Besides that, recently I have worked as IT Support at BizMappers Digital Marketing Agency.</span>
            <br /><br />
            <span>
              As a junior developer, I thrive on the creative process of bringing digital visions to life. My toolkit includes the fundamentals of HTML, CSS, JavaScript, PHP, Laravel, MySQL and WordPress, which I use to develop engaging and user-friendly websites.
            </span>
          </p>
        </div>
      </div>
      <div className="flex w-full lg:place-content-around my-8 lg:my-16 ">
        <div className="w-1/2 border-r-2 text-center transition  hover:scale-105">
          <h1 className="text-2xl lg:text-5xl">6+</h1>
          <p className="text-md lg:text-xl">Months of Experience</p>
        </div>
        <hr />
        <div className="w-1/2 text-center transition  hover:scale-105">
          <h1 className="text-2xl lg:text-5xl">10+</h1>
          <p className="text-md lg:text-xl">Projects </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
