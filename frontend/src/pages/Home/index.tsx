/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { PasseiosImage } from "../../assets";
import { SendButton } from "../../components/Buttons/SendForm";
import { PasseioCard } from "../../components/Cards/Passeio";
import { ChipViewAll } from "../../components/Chip/ViewAll";
import { NavBar } from "../../components/NavBar";
import { FontSimple, Subtitle_s1 } from "../../style/fonts.style";
import { ContainerHome } from "../styled.pages";
import InformationData from "../../assets/data/passeios.json";

const List_Category = [
  "Todo",
  "Populares",
  "Destaque",
  "Melhor avaliação",
  "Novos",
];

export const HomeScreen = () => {
  return (
    <ContainerHome>
      <NavBar />

      <div className="content-data">
        <FontSimple>Boas vindas, Juh Casmin 👋</FontSimple>

        <div className="category-search">
          <div className="filters-category">
            {List_Category.map((item) => (
              <Subtitle_s1 key={item} className="item-search">
                {item}
              </Subtitle_s1>
            ))}
          </div>
          <SendButton
            className="button-continue"
            value="Criar conteúdo"
            link="/registerContent"
          />
        </div>

        <div className="results">
          <div className="search-result">
            <ChipViewAll name="Passeios incríveis" />
            <div className="cards-list">
              {InformationData.passeios.map((item) => (
                <PasseioCard
                  className="cards-passeios"
                  image={PasseiosImage.Cataratas}
                  location={item.distance}
                  star={item.star}
                  name={item.name}
                />
              ))}
            </div>
          </div>

          <div className="search-result">
            <ChipViewAll name="Guias" />
            <div className="cards-list">
              {InformationData.guias.map((item) => (
                <PasseioCard
                  className="cards-passeios"
                  image={PasseiosImage.Cataratas}
                  location={item.passeios.toString()}
                  star={item.star}
                  name={item.name}
                />
              ))}
            </div>
          </div>

          <div className="search-result">
            <ChipViewAll name="Gastronomia" />
            <div className="cards-list">
              {InformationData.guias.map((item) => (
                <PasseioCard
                  className="cards-passeios"
                  image={PasseiosImage.Cataratas}
                  location={item.passeios.toString()}
                  star={item.star}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContainerHome>
  );
};
