import React from "react";
import { Logo } from "../../assets";
import { Subtitle_s1 } from "../../style/fonts.style";
import { NavBarStyled, ProfilePhoto } from "./styled";
import { IoLocationSharp } from "react-icons/io5";
import { MdNotificationAdd } from "react-icons/md";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <div className="content-nav">
        <div className="logo">
          <img src={Logo} alt="" className="logo-pax" />
        </div>

        <div className="location-nav">
          <IoLocationSharp />
          <Subtitle_s1>Foz do Iguaçu</Subtitle_s1>
        </div>

        <div className="tools-profile">
          <MdNotificationAdd size={30} />
          <ProfilePhoto src="https://avatars.githubusercontent.com/u/57011784?v=4" />
        </div>
      </div>
    </NavBarStyled>
  );
};
