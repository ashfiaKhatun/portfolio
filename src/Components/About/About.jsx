import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="text-white opacity-80 lg:mt-32 mx-8 lg:mx-28 lg:text-center">
      <h1 className="text-3xl lg:text-5xl font-semibold text-left lg:text-center mb-4 lg:mb-10 text-white">
        About
      </h1>
      <div className="flex lg:items-center text-left lg:justify-center lg:gap-12">
        <div className="">
          <img src={profile} alt="" className="w-60 h-60 hidden" />
        </div>
        <div className="lg:w-2/3 lg:px-8 text-center">
          <p>
            <span className="mb-3">
              Hello! I'm Ashfia Khatun, student of Information Technology and Management Department at Daffodil International University. Besides that, currently I am doing a job as IT Support at BizMappers Digital Marketing Agency.</span>
            <br /><br />
            <span>
              As a front-end developer, I thrive on the creative process of bringing digital visions to life. My toolkit includes the fundamentals of HTML, CSS, JavaScript, React, MongoDB, PHP, Laravel, MySQL and WordPress, which I use to craft engaging and user-friendly websites.
            </span>
          </p>
        </div>
      </div>
      <div className="flex w-full lg:place-content-around my-12 lg:my-16 ">
        <div className="w-1/2 border-r-2 text-center transition  hover:scale-105">
          <h1 className="text-2xl lg:text-5xl">5+ Months</h1>
          <p className="text-md lg:text-xl">Experience</p>
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
