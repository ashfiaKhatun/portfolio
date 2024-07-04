import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3892e96a-ae33-4a82-80f5-9361f88481a4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id="contact" className="text-white my-12">
      <h1 className="text-center text-2xl lg:text-5xl opacity-80 font-semibold mb-6 lg:mb-16">
        Get In Touch
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* left section */}
        <div className="lg:w-1/2 pr-8">
          <h1>Let&apos;s Talk </h1>
          <p>
            I&apos;m currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className=" flex flex-col mt-4 space-y-4">
            <p className="flex gap-4 items-center">
              <img src={call_icon} alt="" /> 01521565097
            </p>

            <p className="flex gap-4 items-center">
              <img src={location_icon} alt="" /> Dhaka, Bangladesh
            </p>

            <p className="flex gap-4 items-center">
              <img src={mail_icon} alt="" /> ashfia.khatun01@gmail.com
            </p>
          </div>
        </div>
        {/* right section */}
        <form onSubmit={onSubmit} className="lg:w-1/2">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-600 rounded-sm p-2 w-full h-8 mb-4"
            name="name"
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="bg-gray-600 rounded-sm p-2 w-full h-8 mb-4"
            name="email"
          />
          <label>Your Message</label>
          <textarea
            type="text"
            placeholder="Your Message Here."
            className="bg-gray-600 rounded-sm p-2 w-full h-24 mb-4"
            name="text"
          />
          <button type="submit" className="px-4 py-2 lg:text-lg font-semibold bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white rounded-xl btn transition hover:scale-105" >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
