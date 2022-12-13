import React from "react";
import { Caption_p1, FontCard, Subtitle_s1 } from "../../style/fonts.style";
import { PasseioStyled } from "./styled";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { ViewMoreButton } from "../Buttons/ViewMore";

interface IProps {
  name: string;
  location: string;
  star: number;
  image: string;
  className?: string;
}

export const PasseioCard = ({
  className,
  name,
  location,
  star,
  image,
}: IProps) => {
  return (
    <PasseioStyled className={className}>
      <img src={image || ""} alt="" />

      <div className="details-passeio">
        <div className="data-card">
          <FontCard>{name}</FontCard>
        </div>

        <div className="info-view">
          <div className="view-data">
            <IoLocationSharp size={23} />
            <Subtitle_s1 className="item_subtitle">{location} mts</Subtitle_s1>
          </div>

          <div className="view-data">
            <AiFillStar size={25} />
            <Subtitle_s1 className="item_subtitle">{star}</Subtitle_s1>
          </div>

          <ViewMoreButton name="Ver" />
        </div>
      </div>
    </PasseioStyled>
  );
};
