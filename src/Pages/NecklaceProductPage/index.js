import { styled} from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

export default function NecklaceProductPage () {
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }


    return (<>
            <Link to={"/"}>
                <BackButton>
                    <GenericImg src={"https://i.imgur.com/CdWMkHW.png"} width={"30px"}></GenericImg>
                </BackButton>
            </Link>

            {/*Primeira linha*/}
            <BackgroundLineWrapper>
            <MLogo src={"https://i.imgur.com/6EexzAk.png"}></MLogo>
            <ColumnsWrapper>
                <Column width="45vw" alignment={"center"}>
                    <TitleImg src={"https://i.imgur.com/kUEUJqc.png"}/>
                    <SectionText align={"center"} top={"50px"}>
                    Projeto desenvolvido no Laboratório Profissionalizante de Joalheria no curso de Desenho Industrial, a proposta nos direcionava a produção de uma pingente produzido apartir de uma chapa de Prata ligada 925, conhecida como Prata esterlina, a metodologia de criação usada foi a chamada Olho mágico, onde escolhida um tema para ponto de partida obtem-se desenhos únicos e autorais.
                    </SectionText>
                </Column>
                <Column width="45vw">
                    <GenericImg src={"https://i.imgur.com/BaicvjM.png"} marginTop={"50px"} width={"45vw"}/>
                </Column>
            </ColumnsWrapper>

            {/*Segunda linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw" marginTop={"100px"}>
                    <SectionTitleWrapper>
                        <SectionNumber>1</SectionNumber>
                        <SectionTitle>PAINEL TEMA</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"20px"}>
                    O tema escolhido para o processo criativo foi o planeta Jupiter principalmente a forma de suas tempestades com cerca de 1300ºC que transparece a ideia do movimento e calor.
                    </SectionText>
                    <GenericImg src={"https://i.imgur.com/4Gu69er.png"} marginTop={"40px"} width={"45vw"}/>
                </Column>
            </ColumnsWrapper>

            {/*Terceira linha*/}
            <ColumnsWrapper>
                <Column width="45vw">
                    <SectionTitleWrapper justify="end">
                        <SectionNumber>2</SectionNumber>
                        <SectionTitle>PROCESSO CRIATIVO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"right"} top={"20px"}>
                    Apartir do painel tema e imagens de Júpiter foram desenhadas várias formas abstratas com o método Olho mágico, destas formas foram selecionadas algumas para desenvolvimento por meio de agrupamentos destes desenhos até obtenção de uma forma final satifatória.
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/JZaWYFE.png"/>
                            <FlickityImg src="https://i.imgur.com/bmkoqyb.png"/>
                            <FlickityImg src="https://i.imgur.com/jaPi4Gu.png"/>
                            <FlickityImg src="https://i.imgur.com/uDX5tjB.png"/>
                            <FlickityImg src="https://i.imgur.com/FlPC3qI.png"/>
                            <FlickityImg src="https://i.imgur.com/9j7P9IK.png"/>
                            <FlickityImg src="https://i.imgur.com/4AxZmmD.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
                <Column width="45vw"></Column>
            </ColumnsWrapper>

            {/*Quarta linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw">
                    <SectionTitleWrapper>
                        <SectionNumber>3</SectionNumber>
                        <SectionTitle>DEFINIÇÃO DO PINGENTE</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"20px"}>
                    Apartir dos desenhos obtidos, foram selecionados os mais interessantes e feita uma avaliação considerando o produto final, conceito, dimensão e produção para a definição da forma final do pingente por meio da vetorização do mesmo.
                    </SectionText>
                    <GenericImg src={"https://i.imgur.com/WSdWgOF.png"} marginTop={"40px"} width={"45vw"}/>
                </Column>
            </ColumnsWrapper>

            {/*Quinta linha*/}
            <ColumnsWrapper marginBottom="200px">
                <Column width="45vw">
                    <SectionTitleWrapper justify="end">
                        <SectionNumber>4</SectionNumber>
                        <SectionTitle>PROCESSO DE PRODUÇÃO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"right"} top={"20px"}>
                    Após definição da forma iniciou-se o processo de produção do pingente com o preparo da liga da Prata pura com cobre formando o Lingote (1), a chapa de prata com 3mm aproximadamente e gabarito com o desenho (2), corte do pingente com serra, limagem do pingente com lima reta, canoa e redonda, preparação e soldagem do arco da corrente (4 e 5), lixas 400, 800 e 1200 e por fim o acabamento final na politriz (6).
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/quf88lY.png"/>
                            <FlickityImg src="https://i.imgur.com/PGRIgLW.png"/>
                            <FlickityImg src="https://i.imgur.com/GikneNE.png"/>
                            <FlickityImg src="https://i.imgur.com/YF1qST6.png"/>
                            <FlickityImg src="https://i.imgur.com/FvcdC6c.png"/>
                            <FlickityImg src="https://i.imgur.com/5U5rUfG.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
                <Column width="45vw"></Column>
            </ColumnsWrapper>
             
            {/*Sexta linha*/}
            <ColumnsWrapper marginBottom="0px">
                <Column  width="75vw" paddingBottom="200px">
                    <SectionTitleWrapper justify="center">
                        <SectionNumber>5</SectionNumber>
                        <SectionTitle>RESULTADO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"center"} top={"20px"}>
                    Pingente com forma orgânica e abstrata, contemporâneo e singular.
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImgBig src="https://i.imgur.com/suXcRLH.png"/>
                            <FlickityImgBig src="https://i.imgur.com/Mljkxt8.png"/>
                            <FlickityImgBig src="https://i.imgur.com/g1T7MpX.png"/>
                            <FlickityImgBig src="https://i.imgur.com/cyGJrLC.png"/>
                            <FlickityImgBig src="https://i.imgur.com/MPFMnGA.png"/>
                            <FlickityImgBig src="https://i.imgur.com/wPY7kB7.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
            </ColumnsWrapper>
            </BackgroundLineWrapper>

            <Footer></Footer>
        </>

    )
}

const BackgroundLineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://i.imgur.com/3svRD5K.png");
    background-repeat: repeat-y;
    background-clip: content-box;
    background-size: 160px;
    background-position: 50%;
`

const MLogo = styled.img`
  padding-top: 40px;
  width: 150px;
  background-color: white;
`

const ColumnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: ${(props)=>props.marginBottom};
    @media (max-width: 1000px){
        flex-direction: column;
    }
`

const Column = styled.div`
    width: ${(props)=> props.width};
    max-width: 1000px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: ${(props)=>props.marginTop};
    padding-bottom: ${(props)=>props.paddingBottom};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props)=> props.alignment};
    background-color: white;
    @media (max-width: 1000px){
    width: 80vw
    }
`



const ScrollDiv = styled.div`
    margin-top: 20px;
    margin-left: 25px;
    margin-right: 25px;
    @media (max-width: 1000px){
    width: 75vw
    }
`

const FlickityImg = styled.img`
    width: 35vw !important;
    @media (max-width: 1000px){
    width: 75vw
    }
`

const FlickityImgBig = styled.img`
    width: 55vw !important;
`

const TitleImg = styled.img`
    width: 30vw;
    max-width: 450px;
    margin-top: 50px;
`

const GenericImg = styled.img`
    margin-top: ${(props)=>props.marginTop};
    width: ${(props)=> props.width};
    max-width: 1000px;
    @media (max-width: 1000px){
    width: 80vw
    }
`

const BackButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    position: fixed;
    left: 50px;
    top: 100px;
    background-color: white;
    border-radius: 50px;
    border: none;
    transition: 1s;
    z-index: 10;
    cursor: pointer;
    &:hover{
        background-color: #E0DCD6;
    }
    img{
        width: 30px
    }
`

const SectionNumber = styled.h1`
    font-family: 'Outfit', sans-serif;
    font-weight: 900;
    font-size: 80px;
    color: #C8C1B8;
`
const SectionTitle = styled.h1`
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    margin-bottom: 6px;
    margin-left: 10px;
    margin-right: 10px;
    color: #1F2022 ;
`

const SectionText = styled.p`
    margin-top: ${(props)=>props.top};
    text-align: ${(props)=>props.align};
    line-height: 26px;
    font-weight: 300;
`

const SectionTitleWrapper = styled.div`
    display: flex;
    justify-content: ${(props)=>props.justify};
    align-items: end;
`