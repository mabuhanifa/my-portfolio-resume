import {
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsStackOverflow,
    BsTwitter
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer class="footer p-10 bg-[#242933] text-neutral-content">
      <div className="">
        <p>All right reserved by Mohammed Abu Hanifa &copy; 2022</p>
      </div>
      <div>
        <span class="footer-title">Social Links</span>
        <div class="grid grid-flow-col gap-4 text-[25px]">
          <a href="">
            <BsGithub />
          </a>
          <a href="">
            <BsLinkedin />
          </a>
          <a href="">
            <BsStackOverflow />
          </a>
          <a href="">
            <BsFacebook />
          </a>
          <a href="">
            <BsTwitter />
          </a>
          <a href="">
            <BsInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
