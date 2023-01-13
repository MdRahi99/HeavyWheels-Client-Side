import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faTelegram, faSquareWhatsapp} from "@fortawesome/free-brands-svg-icons";
import img from '../../assets/images/contact.jpg';
import Title from "../../Hooks/Title";

const Contact = () => {
  Title('Contact');
  return (
    <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-2 justify-items-end items-center shadow-lg bg-gray-400 p-12 rounded text-slate-200">
      <div className="divide-y-4 divide-double divide-slate-400/[.60] shadow-lg bg-slate-700 p-8 rounded">
        <div className="">
          <h1 className="text-4xl my-6">Let's Contact Us</h1>
          <p className="text-lg my-4">
            Share your excitement with us. We'd love to hear from you. Here's
            how you can reach us...
          </p>
        </div>
        <div className="">
          <div className="flex flex-1 gap-3 items-center mt-3">
            <FontAwesomeIcon
              className="hover:text-slate-500 text-3xl"
              icon={faAndroid}
            ></FontAwesomeIcon>
            <p>017xxxxxxxx</p>
          </div>
          <div className="flex flex-1 gap-3 items-center mt-3">
            <FontAwesomeIcon
              className="hover:text-slate-500 text-3xl"
              icon={faSquareWhatsapp}
            ></FontAwesomeIcon>
            <p>name@gmail.com</p>
          </div>
          <div className="flex flex-1 gap-3 items-center mt-3">
            <FontAwesomeIcon
              className="hover:text-slate-500 text-3xl"
              icon={faTelegram}
            ></FontAwesomeIcon>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div>
        <img className="rounded lg:block hidden w-96 h-72" src={img} alt="" />
      </div>
    </div>
  );
};

export default Contact;
