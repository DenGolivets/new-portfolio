import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";
import './services.css'
import Image from "next/image";

const Services = () => {
  return (
    <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800 font-poppins">
      <Image 
        src="/transitions/transition_gradient.svg"
        alt="transition"
        width={100}
        height={176}
        className="w-full h-44"
      />
      <p className="flex text-4xl mb-8 mt-8 justify-center font-bold text-lightcyan uppercase">
        Services
      </p>
      <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around 
      text-center">
        <Service 
          hl="Single Page Applications" 
          desc="Development of responsive web apps such as portfolios, landingpages and dashboards" 
          img="/icons/SPA_Icon.svg" 
        />
        <Service 
          hl="API Integration" 
          desc="Seamless integration into your solution for dynamic content delivery" 
          img="/icons/API_Icon.svg" 
        />
        <Service 
          hl="Connect to DataBase" 
          desc="Connecting your databases to information storage services" 
          img="/icons/SEO_Icon.svg" 
        />
      </div>
      <p className="desktop:text-[25px] mobile:text-[20px] font-bold text-center mb-4 uppercase">
        You want a something? Get in Touch
      </p>
      <div className="w-[100px] h-[100px]">
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
      <ContactBtn title={"Contact Me"} />
    </div>
  );
}

export default Services;