import styled from 'styled-components'


export const Title = styled.h2 `
        font-family: sans-serif;
        color: #000000;
        font-size: 2rem;
          
        span {
            color: #0c3584;
            display: block;
            font-size: 1,5rem;
        }
`;
export const Btn = styled.button `
    border: 0;
    border-radius: 5px;
    font-family: serif;
    background-color: #00f;
    color: #fff;
    margin: 10px auto;
    display: block;
    padding: 10px;
    font-size: ${props =>  `${props.font}px`} ;

  :before { 
    content: "${props =>  `${props.name}`}";
}

`;

export const BtnNew = styled(Btn)`
    background-color: #090;
`;

export const SubTitle = styled.h1`
    font-size: 2,5rem;
    font-family: sans-serif;
    color: #0c3584 ;
`

export const Item = styled.h4`
        font-family: serif;
        font-size: 15px;
        color: #000000;

`