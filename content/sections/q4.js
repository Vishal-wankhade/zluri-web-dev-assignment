import React, { useState } from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import Mountain from "../images/Mountain.jpg";
import Desert from "../images/desert.jpg";
import Ocean from "../images/ocean.jpg";
import Forest from "../images/forest.jpg";
import './style2.css';

const Q3 = () => {
    
    const [dpOpen, setDpOpen] = useState(false);
    const [img, setImg] = useState(null);
    const [selectedOption, setSelectedOption] = useState( "Dropdown");
    

    function dpClick() {
        // if (!selectedOption) {
        //     setSelectedOption("Select Option");
        // }
        setDpOpen(!dpOpen);
        setSelectedOption("Dropdown")
    }

    function itemClick(e) {
        setSelectedOption(e.target.innerHTML);
        setDpOpen(false); 

       
        if (e.target.innerHTML === "Mountain") {
            setImg(Mountain);
        }
        if (e.target.innerHTML === "Desert") {
            setImg(Desert);
        }
        if (e.target.innerHTML === "Ocean") {
            setImg(Ocean);
        }
        if (e.target.innerHTML === "Forest") {
            setImg(Forest);
        }

    }

    function changeImgOnHover(e) {
        if (e.target.innerHTML === "Mountain") {
            setImg(Mountain);
        }
        if (e.target.innerHTML === "Desert") {
            setImg(Desert);
        }
        if (e.target.innerHTML === "Ocean") {
            setImg(Ocean);
        }
        if (e.target.innerHTML === "Forest") {
            setImg(Forest);
        }
    }
    function reset(){
        setSelectedOption("Dropdown");
        setDpOpen(false);
        setImg(null);
    }
    return (
        <StyledWrapper>
            <StyledContainer>
                <Title>
                    <h3>
                        <span>Task 4:</span> Build a component
                    </h3>
                    <p>In this section, you are required to build a new component based on a Figma design and prototype. The component's function should be to change the image displayed based on the item selected in the dropdown. Implement this functionality using HTML, CSS, and JavaScript.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                        <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank" ><FigmaButton>Figma</FigmaButton></a>
                        <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-559&t=YPqmYSs8rLq2ahId-1&scaling=min-zoom&page-id=30%3A35&starting-point-node-id=36%3A230" target="_blank" ><PrototypeButton>Prototype</PrototypeButton></a>
                    </AnswerDiv>
                </QuestionsGrid>
                <div className="dropdown-wrapper">
                    <div className="btnMenu">
                    <button className={`dp-btn ${dpOpen ? 'opened' : ''}`} onClick={dpClick}>
  <span className={`dropdown-text ${dpOpen ? 'opened' : ''}`}>{selectedOption}</span> 
  <span className={`dropdown-icon ${dpOpen ? 'opened' : ''}`}>{dpOpen ? "▲" : "▼"}</span>
</button>


                    {dpOpen && (
                        
                        <ul className="options">
                            <li onClick={itemClick} onMouseEnter={changeImgOnHover} className="items">Mountain</li>
                                <li onClick={itemClick} onMouseEnter={changeImgOnHover} className="items">Forest</li>
                                <li onClick={itemClick} onMouseEnter={changeImgOnHover} className="items">Ocean</li>
                                <li onClick={itemClick} onMouseEnter={changeImgOnHover} className="items">Desert</li>
                        </ul>

                        
                    )}
                    {
                       dpOpen && <button onClick={reset} className="reset">Reset</button>
                        }
                </div>

                <div className='img-can'>
                     {
                        img ? <img src={img} alt="See the picture here"/> : <h2 className="img-txt">Select option from the dropdown to see the image</h2>
                     }

                </div>

                    </div>
                
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Q3;

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const StyledContainer = styled(Container)`
margin-top: 0;
`

const Title = styled.div`
h3 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
        background: #FAE090;
    }
}

p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}
`

const QuestionsGrid = styled.div`
`

const ImageDiv = styled.div`
img {
    width: 300px;
}
`

const AnswerDiv = styled.div`
align-self: center;
display: flex;
flex-direction: row;

button {
    margin: 0 10px;
}
`

const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width: 150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor: pointer;
`

const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width: 150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor: pointer;
`
