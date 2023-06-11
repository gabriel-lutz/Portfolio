import { styled} from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

export default function DryerProductPage () {
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
                    <TitleImg src={"https://i.imgur.com/NHi997x.png"}/>
                    <SectionText align={"center"} top={"50px"}>
                    Projeto desenvolvido no Laboratório Profissionalizante de Utensílios em 2022/1, no qual através de um problema e oportunidade foi desenvolvido um secador de Proteina de soja texturizada, um produto inovador por não haver concorrentes no mercado. A metodologia projetual utilizada foi o Diamante duplo (Design Council UK), Design Centrado no Ser Humano e Metodologia Experiemental de Gui Bonsiepe.
                    </SectionText>
                </Column>
                <Column width="45vw">
                    <GenericImg src={"https://i.imgur.com/cSWDEsM.png"} marginTop={"250px"} width={"45vw"}/>
                </Column>
            </ColumnsWrapper>

            {/*Segunda linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw" marginTop={"100px"}>
                    <SectionTitleWrapper>
                        <SectionNumber>1</SectionNumber>
                        <SectionTitle>ANÁLISES E OBSERVAÇÕES</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"20px"}>
                    Para contextualizar o problema do projeto foram considerada questões norteadoras sobre o tema, considerando que o probduto possui uma usabilidade e público inicial mais nichado, foi necessário fazer uma pesquisa sobre o alimento com qual o artefato terá contato e usabilidade, portanto definiu-se o que é a proteína e seus tipos com intuito de conhecer melhor o alimento que o produto projetado irá interagir.
                    </SectionText>
                    <ColumnsWrapper>
                        <GenericImg src={"https://i.imgur.com/fSKjM0C.png"} marginTop={"40px"} width={"15vw"} marginRight="20px"/>
                        <SectionMidText top={"20px"}>
                        “A proteína Texturizada de Soja é um alimento feito a partir dos farelos que sobram da soja após a extração do óleo, é rico em fibras, tem baixo teor de gordura e também é o responsável pelos aminoácidos essenciais, as moléculas formadoras das proteínas no organismo, além de ser uma das opções mais baratas para substituir proteína animal, é um alimento interessante para incrementar a dieta e economizar.”
                        </SectionMidText>
                    </ColumnsWrapper>

                    <SectionTitleWrapper>
                        <SectionMidTitle>CERTEZAS</SectionMidTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"10px"}>
                    O produto deve ser eficaz, de fácil usabilidade e inclusivo, diminuir ou acabar com a necessidade de outros utensílios para executar a ação. Ter longa durabilidade e pouco impacto ambiental além de ter um custo acessível.
                    </SectionText>

                    <SectionTitleWrapper>
                        <SectionMidTitle>SUPOSIÇÕES</SectionMidTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"10px"}>
                    Seu uso deve ser tão prático a ponto de aumentar a frequência de ingestão do alimento ou a probabilidade de novos usuários de adicionar ou conhecer a proteína. Seu encaixe deve ser fácil e seguro. Seu uso poderia ser aplicado a outros alimentos além da PTS. Seria ideal que o produto não necessitasse do uso de duas mãos para cumprir a ação, idealmente seria de fácil manutenção.
                    </SectionText>

                    <SectionTitleWrapper>
                        <SectionMidTitle>DÚVIDAS</SectionMidTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"10px"}>
                    Como secar a PTS sem esforço do pulso, ou de forma que desmanche-a. Como adicionar a fase de Hidratação da Proteína no produto quando ela é feita no fogão. Como evitar complicações nos supostos encaixes e ordem no produto? Como facilitar o processo de lavagem de forma que economize água?
                    </SectionText>
                </Column>
            </ColumnsWrapper>

            {/*Terceira linha*/}
            <ColumnsWrapper>
                <Column width="45vw">
                    <SectionTitleWrapper justify="right">
                        <SectionNumber>2</SectionNumber>
                        <SectionTitle>DEFINIÇÃO DO PROBLEMA</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"right"} top={"20px"}>
                    Pouco conhecida entre pessoas não adeptas a dietas restritivas, quem tem contato com o alimento por vezes avalia-o como muito trabalhoso para o preparo, isso porque a PTS necessita ser hidratada, lavada e seca corretamente para ficar apta a ser cozinhada, esse processo de Hidratar-Lavar-Secar é considerando fatigante entre consumidores, grande parte pelo fato de não haver no mercado algum produto específico para tal. O processo é feito atualmente com uso de utensílios que auxiliam na tarefa, mas não facilitam o processo, gerando fadiga no punho, muita sujeira e desperdício de alimento e água.
                    </SectionText>
                    <GenericImg src={"https://i.imgur.com/iirbOQ3.png"} marginTop={"40px"} width={"45vw"}/>
                    <SectionText align={"right"} top={"20px"}>
                    Desta forma definiu-se o problema do projeto, desenhar um utensílio para secagem da PTS, o produto deve ser de fácil entendimento por parte do usuário e facilite de maneira significativa a toda atividade, para sua fabricação, deve analisar quais materiais e processos resultam em um menor impacto ambiental e um ciclo de vida durável.
                    </SectionText>
                </Column>
                <Column width="45vw"></Column>

            </ColumnsWrapper>

            {/*Quarta linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw">
                    <SectionTitleWrapper>
                        <SectionNumber>3</SectionNumber>
                        <SectionTitle>ANÁLISES</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"20px"}>
                    Na fase Descobrir do Diamante duplo iniciou-se as análises do projeto, com intuito de identificar processos comuns, utensílios semelhantes usados na tarefa, detalhes específicos da tarefa e no que implicam na ação, materiais usados e valores de custo e venda de artefatos, como e porque são determinadas formas e estruturas dos utensílios analisados e principalmente Análises em relação ao uso, contato com o usuário e implicações ergonômicas e ambientais da tarefa.
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/vbC61rZ.png"/>
                            <FlickityImg src="https://i.imgur.com/SPcCJE0.png"/>
                            <FlickityImg src="https://i.imgur.com/v82GntM.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
            </ColumnsWrapper>

            {/*Quinta linha*/}
            <ColumnsWrapper>
                <Column width="45vw">
                    <SectionTitleWrapper justify="end">
                        <SectionNumber>4</SectionNumber>
                        <SectionTitle>MAPA CONCEITUAL</SectionTitle>
                    </SectionTitleWrapper>
                    <GenericImg src={"https://i.imgur.com/Prpfbxr.png"} marginTop={"40px"} width={"45vw"} marginRight="20px"/>
                </Column>
                <Column width="45vw"></Column>
            </ColumnsWrapper>

            {/*Sexta linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw">
                    <SectionTitleWrapper justify="start">
                        <SectionNumber>5</SectionNumber>
                        <SectionTitle>LISTA DE REQUISITOS</SectionTitle>
                    </SectionTitleWrapper>
                    <GenericImg src={"https://i.imgur.com/6lt68an.png"} marginTop={"40px"} width={"45vw"} marginRight="20px"/>
                </Column>
            </ColumnsWrapper>

            {/*Sétima linha*/}
            <ColumnsWrapper>
                <Column width="45vw">
                    <SectionTitleWrapper justify='end'>
                        <SectionNumber>6</SectionNumber>
                        <SectionTitle>PAINÉIS SEMÂNTICOS</SectionTitle>
                    </SectionTitleWrapper>
                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/nIDZy3N.png"/>
                            <FlickityImg src="https://i.imgur.com/0IyopzI.png"/>
                            <FlickityImg src="https://i.imgur.com/5b2EbSp.png"/>
                            <FlickityImg src="https://i.imgur.com/BeIn3ss.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
                <Column width="45vw"></Column>
            </ColumnsWrapper>

            {/*Oitava linha*/}
            <ColumnsWrapper>
                <Column width="45vw"></Column>
                <Column width="45vw">
                    <SectionTitleWrapper>
                        <SectionNumber>7</SectionNumber>
                        <SectionTitle>GERAÇÃO DE ALTERNATIVAS</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"left"} top={"20px"}>
                    Na fase Desenvolver do Duplo diamante iniciam-se a geração de alternativas baseadas na Lista de Requisitos de Bonsiepe e Mapa conceitual.
                    </SectionText>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/EWvpqVW.png"/>
                            <FlickityImg src="https://i.imgur.com/s697hDo.png"/>
                            <FlickityImg src="https://i.imgur.com/DWNjLCx.png"/>
                            <FlickityImg src="https://i.imgur.com/urtRU6d.png"/>
                            <FlickityImg src="https://i.imgur.com/7WliO7t.png"/>
                            <FlickityImg src="https://i.imgur.com/SvN2fsg.png"/>
                            <FlickityImg src="https://i.imgur.com/DxXyVvw.png"/>
                            <FlickityImg src="https://i.imgur.com/i5DZWed.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
            </ColumnsWrapper>

            {/*Nona linha*/}
            <ColumnsWrapper>
                <Column width="45vw">
                    <SectionTitleWrapper justify='end'>
                        <SectionNumber>8</SectionNumber>
                        <SectionTitle>REFINAMENTO E DEFINIÇÃO</SectionTitle>
                    </SectionTitleWrapper>
                    <SectionText align={"right"} top={"20px"}>
                    Após análises das opções geradas considerando a lista de requisitos do projeto definiu-se uma forma para produção de mockup e testes com usuários. Após testes com o Mockup feito, foram ajustadas algumas proporções na pega do secador, para melhor conforto e segurança na pega, além de ajustes no encaixe do cesto de na vasilha de vidro, semelhante ao encaixe de liquidificador.
                    </SectionText>
                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImg src="https://i.imgur.com/RoUrfEW.png"/>
                            <FlickityImg src="https://i.imgur.com/xLcaV05.png"/>
                            <FlickityImg src="https://i.imgur.com/mwzI247.png"/>
                        </Slider>
                    </ScrollDiv>
                </Column>
                <Column width="45vw"></Column>
            </ColumnsWrapper>

            {/*Décima linha*/}
            <ColumnsWrapper marginBottom="100px">
                <Column width="75vw">
                    <SectionTitleWrapper justify="center">
                        <SectionNumber>9</SectionNumber>
                        <SectionTitle>INFOGRÁFICO DE PROCESSOS PRODUTIVOS</SectionTitle>
                    </SectionTitleWrapper>
                    <GenericImg src={"https://i.imgur.com/GF9Dnk5.png"} marginTop={"40px"} width={"75vw"} marginRight="20px"/>
                </Column>
            </ColumnsWrapper>
            
             
            {/*LAST linha*/}
            <ColumnsWrapper marginBottom="200px">
                <Column  width="75vw">
                    <SectionTitleWrapper justify="center">
                        <SectionNumber>10</SectionNumber>
                        <SectionTitle>RESULTADO</SectionTitle>
                    </SectionTitleWrapper>

                    <ScrollDiv>
                        <Slider {...setting} >
                            <FlickityImgBig src="https://i.imgur.com/LZNQI9I.png"/>
                            <FlickityImgBig src="https://i.imgur.com/CNaHFzc.png"/>
                            <FlickityImgBig src="https://i.imgur.com/9pXUq3Z.png"/>
                            <FlickityImgBig src="https://i.imgur.com/8Wt8ssr.png"/>
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
    margin-right: ${(props)=>props.marginRight};
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

const SectionMidTitle = styled.h1`
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    margin-bottom: 6px;
    margin-right: 10px;
    margin-top: 20px;
    color: #1F2022 ;
`

const SectionText = styled.p`
    margin-top: ${(props)=>props.top};
    text-align: ${(props)=>props.align};
    line-height: 26px;
    font-weight: 300;
    font-size: ${(props)=>props.size};
`

const SectionMidText = styled.p`
    margin-top: ${(props)=>props.top};
    text-align: justify;
    line-height: 20px;
    font-weight: 300;
    font-size: 12px;
`

const SectionTitleWrapper = styled.div`
    display: flex;
    justify-content: ${(props)=>props.justify};
    align-items: end;
    /* position: sticky;
    top: 0;
    z-index: 100;
    background-color: white; */
`