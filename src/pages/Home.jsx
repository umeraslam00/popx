import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
      <div className="top-[549px] left-[20px] relative">
          <h1 className="font-medium text-[28px] leading-[17px]">Welcome to PopX</h1>
          <p className="font-normal text-[18px] leading-[26px] mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex flex-col gap-[10px] mt-[29px] justify-center">
              <Link to="/signup"><Button text="Create Account" colorName="#6C25FF" /></Link>
              <Link to="/login"><Button text="Already Registered? Login" colorName="#6C25FF4B" /></Link>
          </div>

      </div>
  );
};

export default Home;
