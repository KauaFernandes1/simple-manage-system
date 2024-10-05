import styled from 'styled-components'

export const Container = styled.div`
width: 425px;
height: 160px;
display: flex;
flex-direction: column;
border-radius: 8px;
box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08);

`
// div dos circulos
export const CircleSection = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

`

// Estilizaçao circulo
export const Circle = styled.div`
width: 49px;
height: 49px;
border-radius: 50%;
background-color: #007AFF;
color: white;
display: flex;
align-items: center;
justify-content: center;
transition: 0.5s;
cursor: pointer;

&:hover{
        background-color: #005EC4;
        color: #E6E6E6;
    }
`

// estilizaçao div por circulo
export const IndividualCircle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center
`
