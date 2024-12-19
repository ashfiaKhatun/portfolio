

const Footer = () => {
    return (
      <div className="flex flex-col-reverse lg:flex-row gap-2 justify-between mx-8 lg:mx-28 mb-8 pt-8 border-t-2 text-white border-white">
        <h3>© 2024 Ashfia Khatun. All rights reserved.</h3>
        <ul className="flex gap-4">
          
          <li className="cursor-pointer"><a href="https://www.linkedin.com/in/ashfia-khatun" target="_blank">
            Connect with me
          </a></li>
        </ul>
      </div>
    );
};

export default Footer;