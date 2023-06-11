import styled from "styled-components"
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

export default function MainPage() {
    const handleClick = () => {
        window.location.href = 'https://www.linkedin.com/in/marieli-hubner/';
      };

    const handleWhatsappClick = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=5555996406903"
    }

    const handleEmailClick = () => {
        window.location.href = "mailto:marieli.hubner@gmail.com"
    }

  return (
    <MainContainer>
        <TitleLine src={"https://i.imgur.com/487txLB.png"}/>
        <TitleImage src={"https://i.imgur.com/BiBtC6x.png"}/>
        <ProductDesign>DESIGN DE PRODUTO</ProductDesign>
        <MLogo src={"https://i.imgur.com/dA8oxGU.png"}/>
        <VLine src={"https://i.imgur.com/7ydk6cF.png"}/>
        <AboutMeWrapper>
            <ShapesContainer>
                <AboutMeBGShapesB src={"https://i.imgur.com/HEIuiMW.png"} zIndex={0}/>
                <AboutMePhoto src={"https://i.imgur.com/4cAsDOW.png"}/>
                <AboutMeBGShapes src={"https://i.imgur.com/OP2tPJY.png"} zIndex={1}/>
            </ShapesContainer>
            <AboutMeTitle src={"https://i.imgur.com/VusCxbR.png"}/>
            <AboutMeText>Olá, seja bem vindo(a), sou estudante de Desenho Industrial - Bacharelado na Universidade Federal de Santa Maria, durante a trajetória no curso me identifico com Projeto de Produto e trilho meu caminho para me especializar nessa área. Possuo experiência com modelagem tridimensional e afinidade com desenvolvimento de Interfaces. Minha formação me faz uma profissional multidiciplinar e agrega no desenvolvimento de projetos de produto.</AboutMeText>
            <AboutMeName src ={"https://i.imgur.com/TuUtAlM.png"} />
        </AboutMeWrapper>

        <ProductTitle src = {"https://i.imgur.com/F1puKYw.png"}/>

        <ProductWrapper>
            <Link to={`/coffe`}>
                <ProductBox>
                    <ProductBoxTitle>conjunto <br></br>café</ProductBoxTitle>
                    <ProductBoxImage src={"https://i.imgur.com/3gZu06U.png"} customSize={"390px"}></ProductBoxImage>
                </ProductBox>
            </Link>
            <Link to={`/necklace`}>
              <ProductBox>
                <ProductBoxTitle>pingente <br></br>colar</ProductBoxTitle>
                <ProductBoxImage src={"https://i.imgur.com/HwkK9dK.png"} customSize={"200px"}></ProductBoxImage>
              </ProductBox>
            </Link>
            <Link to={`/dryer`}>
              <ProductBox>
                  <ProductBoxTitle>secador <br></br>PTS</ProductBoxTitle>
                  <ProductBoxImage src={"https://i.imgur.com/gEs1rnq.png"} customSize={"300px"}></ProductBoxImage>
              </ProductBox>
            </Link>


        </ProductWrapper>

        <InfoWrapper>
            <InfoButton onClick={handleWhatsappClick}>
                <InfoButtonImage src={"https://i.imgur.com/5del0xY.png"}></InfoButtonImage>
                <InfoButtonText>(55)99640-6903</InfoButtonText>
            </InfoButton>
            <InfoButton onClick={handleEmailClick}>
                <InfoButtonImage src={"https://i.imgur.com/rZQOtLU.png"}></InfoButtonImage>
                <InfoButtonText>marieli.hubner@gmail.com</InfoButtonText>
            </InfoButton>
            <InfoButton onClick={handleClick} >
                <InfoButtonImage src={"https://i.imgur.com/5DD0R8Z.png"}></InfoButtonImage>
                <InfoButtonText>@marieli-hubner</InfoButtonText>
            </InfoButton>

        </InfoWrapper>
    <Footer></Footer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 100vw;
  max-width: 1980px;
`

const TitleImage = styled.img`
  width: 700px;
  padding-top: 180px;
  z-index: 1;
`

const TitleLine = styled.img`
  height: 250px;
  position: absolute;
  padding-top: 20px;
   z-index: 0;
`

const ProductDesign = styled.p`
  font-size: 20px;
  padding-top: 10px;
`

const MLogo = styled.img`
  padding-top: 40px;
  width: 150px;
`

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 400px;
  background-color: #EFEEED ;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 6px 10px 2px;
`

const AboutMeText = styled.p`
 width: 800px;
 text-align: center;
 font-weight: 400;
 line-height: 26px; 
 font-size: 20px;
 z-index: 10;
 padding: 40px;
`

const AboutMeTitle = styled.img`
  width: 273px;
  z-index: 10;
  margin-top: -100px;
`

const ShapesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 145px;
  width: 100vw;
  z-index: 4;
`

const AboutMeBGShapes = styled.img`
  width: 1610px;
  z-index: 2;
  position: absolute;
`

const AboutMeBGShapesB = styled.img`
  width: 1610px;
  z-index: 0;
  position: absolute;
  margin: 1px;
`

const AboutMePhoto = styled.img`
  width: 477px;
  z-index: 1;
  position: absolute;
  margin: 2px;
`

const VLine = styled.img`
  height: 300px;
  width: 2px;
  margin-top: -4px;
`

const AboutMeName = styled.img`
    width: 150px;
    padding-bottom: 40px;
`

const ProductTitle = styled.img`
    width: 460px;
    padding-top: 200px;
    padding-bottom: 100px;
`

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ProductBox = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    height: 450px;
    background-color: #F5F4F5; //#C8C1B8;
    margin-left: 20px;
    margin-right: 20px;
    border: 0px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 50px;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: #C8C1B8 ;
        transition: 0.2s ease-in-out;
    }
    &:hover{
        cursor: pointer;
    }
`

const ProductBoxTitle = styled.p`
    max-lines: 2;
    text-align: center;
    font-family: Mont;
    font-size: 50px;
    line-height: 50px;
    margin-top: 20px
`

const ProductBoxImage = styled.img`
    margin-bottom: 20px;
    width: ${(props) => props.customSize};
    transition: 0.2s ease-in-out;
    &:hover{
       width: calc(${(props) => props.customSize} + 20px);
       transition: 0.2s ease-in-out;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    margin-bottom: 200px;
`

const InfoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: inherit;
    margin-left: 40px;
    margin-right: 40px;
    &:hover{
        cursor: pointer;
    }
`

const InfoButtonImage = styled.img`
    width: 26px;
`

const InfoButtonText = styled.p`
    font-size: 18px;
    margin-left: 10px;
`