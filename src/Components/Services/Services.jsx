

const Services = () => {
  return (
    <div id="services" className="text-white lg:mt-32 mx-8 lg:mx-28">
      <h1 className="text-3xl lg:text-5xl opacity-80 font-semibold lg:text-center mb-4 lg:mb-16">Services</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3">

        {/* card-1 */}
        <div className="lg:w-80 border-2 hover:border-purple-500 hover:bg-gradient-to-r  from-[#3f0028] to-[#582300] transition hover:scale-105 rounded-lg pl-3 pr-8 py-4 ">
          <h3 className="text-2xl mb-2">01.</h3>
          <h1 className="text-3xl mb-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
            Front-End
          </h1>
          <p className="">
            Building user-centric interfaces with HTML, CSS, Tailwind, Bootstrap, and React. I craft responsive, interactive web experiences that bring your vision to life.
          </p>
        </div>

        {/* card-2 */}
        <div className="lg:w-80 border-2 hover:border-purple-500 hover:bg-gradient-to-r  from-[#3f0028] to-[#582300] transition hover:scale-105 rounded-lg pl-3 pr-8 py-4 ">
          <h3 className="text-2xl mb-2">02.</h3>
          <h1 className="text-3xl mb-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
            Back-End
          </h1>
          <p className="">
            I architect robust backend systems using Node.js, PHP, and Laravel. My expertise ensures scalable and secure applications that power exceptional user experiences.
          </p>
        </div>

        {/* card-3 */}
        <div className="lg:w-80 border-2 hover:border-purple-500 hover:bg-gradient-to-r  from-[#3f0028] to-[#582300] transition hover:scale-105 rounded-lg pl-3 pr-8 py-4 ">
          <h3 className="text-2xl mb-2">03.</h3>
          <h1 className="text-3xl mb-2 bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">
            Database
          </h1>
          <p className="">
            I design and manage efficient databases using MongoDB and MySQL. My expertise ensures data integrity and optimal performance for your applications.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;