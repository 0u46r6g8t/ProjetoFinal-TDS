import styled from "styled-components";

export const NavBarStyled = styled.div`
  background-color: #011931;
  height: 64px;
  display: flex;
  align-items: center;

  .content-nav {
    margin: auto;
    width: 84.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    img {
      width: 50px;
    }

    .tools-profile,
    .location-nav {
      display: flex;
      justify-content: space-between;
      width: 100px;
      align-items: center;
    }

    .location-nav {
      width: 110px;
    }
  }
`;

export const ProfilePhoto = styled.img`
  border: 3px solid white;
  border-radius: 50px;
`;
