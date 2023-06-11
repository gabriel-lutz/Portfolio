import { styled} from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

export default function CoffeProductPage () {
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
            <BGDiv>
                <MLogo src={"https://i.imgur.com/Vu9eo2F.png"}></MLogo>
            </BGDiv>


            {/*Primeira linha*/}
            <ColumnsWrapper>
                <Column width="45vw" alignment={"center"}>
                    <TitleImg src={"https://i.imgur.com/FIBWyAB.png"}/>
                    <SectionText align={"center"} top={"50px"}>
                    Projeto desenvolvido por mim e Heloisa Falqueto na disciplina de Introdução a Projeto de Produto em 2021 onde nos foi proposto a elaboração de utensílios de mesa posta, o tema escolhido para o projeto foi café da manhã/tarde ou lanche no qual o público alvo eram jovens adultos, estudantes com conexão com a arte, criação e imaginação. A metodologia usada para o redesenho foram a de Bonsiepe (1984), Brod Jr e Gomes (2008) e (2011).
                    </SectionText>
                </Column>
                <Column width="45vw">
                    <GenericImg src={"https://i.imgur.com/xjMJvXR.png"} marginTop={"250px"} width={"45vw"}/>
                </Column>
            </ColumnsWrapper>

            {/*Segunda linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw" marginTop={"100px"}>
                    <SectionTitleWrapper>
                        <SectionNumber>1</SectionNumber>
                        <SectionTitle>IDENTIFICAÇÃO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"20px"}>
                    Foram usados como referências na Textualização, artefatos com formatos geométricos e diferentes. Na Definição foram identificados caracteristícas dos utensílios juntamente com a leitura de Fatores projetuais segundo Redig (1977). Apartir da Delimitação foram classificados utensílios conforme fator projetual, Psicológico, Econômico, Tecnológico, Antropológico, Ergonômico, Ecológico, Filosófico, Mercadológico e Geométrico.
                    </SectionText>
                    <GenericImg src={"https://i.imgur.com/FnsgH08.png"} marginTop={"40px"} width={"45vw"}/>
                </Column>
            </ColumnsWrapper>

            {/*Terceira linha*/}
            <ColumnsWrapper>
                
                <Column width="45vw" marginTop={"0px"}>
                    <SectionTitleWrapper justify={"end"}>
                        <SectionNumber>2</SectionNumber>
                        <SectionTitle>PREPARAÇÃO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"right"} top={"20px"}>
                    Nessa fase foram feitas análises específicas dos artefatos e comunicação visual de artefatos e marcas semelhantes conforme metodologia de Ensino de Desenho industrial, são elas: Análise linguística - Denotativa e conotativa, análise diacrônica, Análise sincrônica, Análise estrutural, Análise funcional (Lobach, Baxter e Gonzales Solas) e Análise morfológica.
                    </SectionText>
                    <GenericImg src={"https://i.imgur.com/IuLOhiW.png"} marginTop={"40px"} width={"45vw"}/>
                </Column>
                <Column width="45vw"></Column>
            </ColumnsWrapper>

            {/*Quarta linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw">
                    <SectionTitleWrapper>
                        <SectionNumber>3</SectionNumber>
                        <SectionTitle>ESQUENTAÇÃO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"20px"}>
                    Definição dos Requisitos referentes ao artefato e a comunicação visual do projeto: Requerimentos de uso, Requerimentos de Função, Estruturais, Técnico-produtivos, Econômicos, Formais e de Identificação. Após foram feitos mapas mentais com palavras e desenhos que representassem cada requisito escolhido como critério para o projeto. Posteriormente iniciou-se o rascunho de ideias e detalhamento de opções escolhidas a partir do desenho de 51 alternativas definidas por Brod Jr. do conjunto de artefato e a identidade visual da marca.
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/ds8B43K.png"/>
                            <FlickityImg src="https://i.imgur.com/TiGj1FZ.png"/>
                            <FlickityImg src="https://i.imgur.com/nYl6rO8.png"/>
                            <FlickityImg src="https://i.imgur.com/70jFnNL.png"/>
                            <FlickityImg src="https://i.imgur.com/xsuFIzH.png"/>
                            <FlickityImg src="https://i.imgur.com/qTRYOfs.png"/>
                            <FlickityImg src="https://i.imgur.com/JVJJXev.png"/>
                            <FlickityImg src="https://i.imgur.com/VIu5ALb.png"/>
                            <FlickityImg src="https://i.imgur.com/EqqCfwc.png"/>
                            <FlickityImg src="https://i.imgur.com/wVrC8XD.png"/>
                            <FlickityImg src="https://i.imgur.com/JCglp2W.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
            </ColumnsWrapper>

            {/*Quinta linha*/}
            <ColumnsWrapper>
                <Column width="45vw">
                    <SectionTitleWrapper justify="end">
                        <SectionNumber>4</SectionNumber>
                        <SectionTitle>ILUMINAÇÃO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"right"} top={"20px"}>
                    Nesta fase definiu-se o artefato e a identidade visual final e foi produzido mockup do conjunto para testes e melhor visualização.
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/z6UplWA.png"/>
                            <FlickityImg src="https://i.imgur.com/KB3hvNp.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
                <Column width="45vw"></Column>
            </ColumnsWrapper>

            
            {/*Sexta linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw">
                    <SectionTitleWrapper>
                        <SectionNumber>5</SectionNumber>
                        <SectionTitle>ELABORAÇÃO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"20px"}>
                    Desenhos técnicos e proporcionais do artefato e identidade visual.
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/klnf2Mz.png"/>
                            <FlickityImg src="https://i.imgur.com/kF2oKHS.png"/>
                            <FlickityImg src="https://i.imgur.com/OghnhpI.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
            </ColumnsWrapper>

             
            {/*Sétima linha*/}
            <ColumnsWrapper marginBottom="200px">
                <Column  width="75vw">
                    <SectionTitleWrapper justify="center">
                        <SectionNumber>6</SectionNumber>
                        <SectionTitle>RESULTADO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"center"} top={"20px"}>
                    Modelo final do conjunto de caneca e prato médio em cerâmica, com acabamento fosco ou brilhoso, identidade visual da marca Sollasta aplicada na embalagem e cartaz de divulgação do produto.
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImgBig src="https://i.imgur.com/dQFHhCM.png"/>
                            <FlickityImgBig src="https://i.imgur.com/4KpWzms.png"/>
                            <FlickityImgBig src="https://i.imgur.com/FUsfJnn.png"/>
                            <FlickityImgBig src="https://i.imgur.com/jLsvjq1.png"/>
                            <FlickityImgBig src="https://i.imgur.com/ZC7jCa2.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
            </ColumnsWrapper>

            <Footer></Footer>
        </>

    )
}

const MLogo = styled.img`
  padding-top: 40px;
  width: 150px;
  position: absolute;
  margin: 50%;
`
const VLine = styled.img`
  height: ${(props)=>props.height};
  width: 2px;
  bottom: 0px;
  top: 150px;
  position: absolute;
`

const BGDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 50px;
    width: 100vw;
    height: 150px
`

const ColumnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props)=>props.marginBottom};
`

const Column = styled.div`
    width: ${(props)=> props.width};
    margin-left: 25px;
    margin-right: 25px;
    margin-top: ${(props)=>props.marginTop};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props)=> props.alignment};
`

const ScrollDiv = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
`

const FlickityImg = styled.img`
    width: 35vw !important;
`

const FlickityImgBig = styled.img`
    width: 60vw !important;
`

const TitleImg = styled.img`
    width: 450px;
    margin-top: 250px;
`

const GenericImg = styled.img`
    margin-top: ${(props)=>props.marginTop};
    width: ${(props)=> props.width};
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