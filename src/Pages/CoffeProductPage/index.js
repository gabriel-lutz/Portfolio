import { styled} from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"


export default function CoffeProductPage () {
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <ColumnsWrapper>
            <Column alignment={"end"}>
            <p>asdadsad</p>
            <ScrollDiv>
            <Slider {...setting} >
                <FlickityImg src="https://i.imgur.com/3gZu06U.png"/>
                <FlickityImg src="https://i.imgur.com/gEs1rnq.png"/>
            </Slider>
            </ScrollDiv>
            </Column>
            <Column>
            <p>asdadsad</p>
            </Column>
        </ColumnsWrapper>
    )
}

const ColumnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Column = styled.div`
    width: 45vw;
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props)=> props.alignment};
`

const ScrollDiv = styled.div`
    width: 30vw;
    height: 30vw;
    margin-left: 50px;
    margin-right: 50px;
`

const FlickityImg = styled.img`
    width: 200px !important;
`

