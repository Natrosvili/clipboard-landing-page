import styled from "styled-components";
import HeaderComponent from "./components/HeaderComponent";
import FirstComponent from "./components/FirstContainer";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import Footer from "./components/FooterComponent";

export default function App() {
  return (
    <StyledApp>
      <HeaderComponent />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap');
  text-align: center;
  font-family: 'Bai Jamjuree', sans-serif;
  padding: 0;
  margin: 0;

`