import React from 'react';
import styled from 'styled-components';

const StepCont = styled.div`
    max-width: 290px;
    padding-top:10px;
`;

const StepBold = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 12px;
    display:inline;
`;

const StepReg = styled.p`
    width: 100%;    
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    display:inline-block;
    text-align: justify;
    margin: 0;
    margin-bottom: ${props=>props.marginB}px;
`;
const StepImg = styled.div`
    display: block;
    margin: 0 auto;
    margin-bottom: ${props=>props.marginB}px;
`;


const Steps = ({
    text="Introduce your cat to its new upcycled cat tent!",
    boldtext="Step 10:",
    marginB = 20,
    images="/cattent.svg",
}) => {

    return <StepCont>
        <StepReg marginB={marginB}>
            <StepBold>{boldtext}</StepBold> 
            {text}
        </StepReg>
        <StepImg>
        {images !== null && <img src={images}/>}
        </StepImg>
    </StepCont>
}

export default Steps;