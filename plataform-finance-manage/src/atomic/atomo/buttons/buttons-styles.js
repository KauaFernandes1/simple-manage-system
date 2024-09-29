import styled from 'styled-components'


export const LoginButton = styled.button` 
    width: 150px;
    height: 35px;

    border: none;
    transition: 1s;

    background-color: #000000;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #303030;
        color: rgb(208, 208, 208);
    }
`

export const CancelButton = styled(LoginButton)`
    background-color: rgb(208, 208, 208);
    color: black;


`

