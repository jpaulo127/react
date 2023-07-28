import React, {useState} from 'react';
import './App.css';
// import Btn from '../Button';
import Counter from '../Counter';
import CounterState from '../CounterState';
import { Title, Btn, BtnNew, SubTitle, Item, Header, Section, Footer} from '../Styles/styles';
//import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import foto from '../../assesd/329586092_520202273550915_7590485302478832146_n.jpg'
import foto2 from '../../assesd/instagram.jpg'
import foto3 from '../../assesd/facebook.jpg'
import foto4 from '../../assesd/whatzapp.jpg'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';





function App() {

  const label = { inputProps: { 'aria-label': 'Apagar as luzes' } };
  const [Value, setValue] = React.useState(2);
  const [Node, setNode] = React.useState(4);
  const [Js, setJs] = React.useState(4);
  const [Ts, setTs] = React.useState(3);
  const [WP, setWP] = React.useState(4);




  return (
    <div className=''>
      <Header>
      <Avatar alt="Remy Sharp" src={foto} />
      <Title>Currículo de desenvolvedor
        <span className='titulo2'>João Paulo Oliveira Santos</span>
        <span>Dev Front-end</span>
      </Title>
      </Header>
      <Section>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">React</Typography>
        <Rating
          name="simple-controlled"
          value={Value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>  
      <Box
        sx={{
          '& > legend': { mt: 4 },
        }}
      >
        <Typography component="legend">Node</Typography>
        <Rating
          name="simple-controlled"
          value={Node}
          onChange={(event, newValue) => {
            setNode(newValue);
          }}
        />
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 4 },
        }}
      >
        <Typography component="legend">JavaScript</Typography>
        <Rating
          name="simple-controlled"
          value={Js}
          onChange={(event, newValue) => {
            setJs(newValue);
          }}
        />
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 3 },
        }}
      >
        <Typography component="legend">TypeScript</Typography>
        <Rating
          name="simple-controlled"
          value={Ts}
          onChange={(event, newValue) => {
            setTs(newValue);
          }}
        />
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 4 },
        }}
      >
        <Typography component="legend"> WordPress</Typography>
        <Rating
          name="simple-controlled"
          value={WP}
          onChange={(event, newValue) => {
            setWP(newValue);
          }}
        />
      </Box>  
      <hr />
      <SubTitle>Formação 
       <Item className='item2'>Desenvolvedor web</Item>
       <Item className='item2'>Wordpress</Item>
       <Item className='item2'> Web designer</Item>
       <Item className='item2'>figma</Item>
      </SubTitle>
       <SubTitle>Habilidade</SubTitle>
       <Item>Criação da parte visual e interativa de sites e aplicativos web. Isso inclui conhecimentos em HTML, CSS e JavaScript, além de frameworks populares como React. Sou um profissionais de Front-end que tambem temnho noção de design responsivo, testes, otimização e boas práticas de codificação. Minha função é transformar o design em código e garantir que o projeto funcione bem em diferentes dispositivos e navegadores. Tenho habilidades sólidas em Front-end é essencial para criar experiências de usuário agradáveis e funcionais. </Item>
       <SubTitle>experiência</SubTitle>
       <Item>Embora esteja iniciando minha carreira de desenvolvimento web, posso destacar minha experiência prática através de diversos projetos pessoais que desenvolvi até o momento. Esses projetos foram uma oportunidade para aplicar meus conhecimentos teóricos e aprimorar minhas habilidades técnicas. Além disso, eles demonstram minha paixão pela área e minha motivação para buscar soluções inovadoras e criativas. </Item>
       <SubTitle>Como posso contribuir para empresa</SubTitle>
       <Item>Minha trajetória como desenvolvedor web me permitiu trabalhar com clientes diversos, desde pequenas empresas até grandes corporações, criando desde simples sites institucionais até complexos portais de comércio eletrônico. Sempre busco me manter atualizado com as últimas tendências e tecnologias do mundo WordPress, a fim de oferecer soluções modernas e personalizadas para cada projeto </Item>
      </Section>
      <Footer>
        <div>
        <SubTitle>Rede social</SubTitle>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button a href='https://www.facebook.com/joaopaulo.oliveira.90'>facebok</Button>
            <Button a href='https://www.instagram.com/jpoliveira_127/'>instagem</Button>
            <Button a href='https://github.com/jpaulo127'>github</Button>
           </ButtonGroup>
        </div> 
        <div>
       <Avatar alt="Remy Sharp" src={foto2} />
       <Avatar alt="Travis Howard" src={foto3} />
       <Avatar alt="Cindy Baker" src={foto4} />
        </div>
      </Footer>

    </div>

  );
}

export default App;