import styled from 'styled-components'


export const Title = styled.h1 `
        font-family: sans-serif;
        padding: 10px;
        color: #000000;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;

        .titulo2 {
            color: #209ed8;
            font-size: 1,3rem;
            text-align: start;
        }
          
        span {
            color: #0c3584;
            display: block;
            font-size: 1,2rem;
            text-align: start;
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
    font-weight: bold;
    font-family: sans-serif;
    color: #0c3584 ;

    .item2 {
        color: #0e4e57;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
    }
    
`;

export const Item = styled.h4`
        font-family: serif;
        font-size: 15px;
        color: #000000;


`;


export const Header = styled.header`
        width: 100%;
        height: 200px;
        background-color: #dce3ed;

`;

export const Section = styled.section`
        width: 100%;
        height: 950px;
        background-color: #f3eae8;

`;

export const Footer = styled.footer` 
       display: flex;
       flex-direction: column;
       align-items: start;
       gap: 20px;
        margin: 50px 0 0 0;
        width: 100%;
        height: 300px;
        background-color: #dce3ed;

`;