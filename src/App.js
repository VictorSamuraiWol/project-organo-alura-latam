import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner/Banner';
import { Form } from './Componentes/Formulario/Formulario';
import Rodape from './Componentes/Rodape/Rodape';
import Grupos from './Componentes/Grupos/Grupos';

function App() {
  
  const [users, setUsers] = useState([]);

  const newUserFunc = (user) => {
    setUsers([...users, user])
    //console.log(user);
  }

  const cardsStyles = [
    {
      cor: 'Vermelho',
      corPrimaria: '#ff2323',
      corSecundaria: 'linear-gradient(19deg, rgba(218,30,81,1) 15%, rgba(145,0,37,1) 50%, rgba(145,0,0,1) 85%)'
    },
    {
      cor: 'Azul',
      corPrimaria: '#1edace',
      corSecundaria: 'linear-gradient(19deg, rgba(30,218,206,1) 15%, rgba(0,83,145,1) 50%, rgba(2,0,145,1) 85%)'
    },
    {
      cor: 'Amarelo',
      corPrimaria: '#fffa55',
      corSecundaria: 'linear-gradient(19deg, rgba(218,213,30,1) 15%, rgba(127,145,0,1) 50%, rgba(187,255,35,1) 100%)'
    },
    {
      cor: 'Verde',
      corPrimaria: '#9fff26',
      corSecundaria: 'linear-gradient(19deg, rgba(180,255,85,1) 1%, rgba(30,145,0,1) 50%, rgba(35,255,75,1) 100%)'
    },
    {
      cor: 'Roxo',
      corPrimaria: '#e3abff',
      corSecundaria: 'linear-gradient(19deg, rgba(220,161,250,1) 1%, rgba(150,30,255,1) 50%, rgba(165,0,252,1) 100%)'
    },
    {
      cor: 'Violeta',
      corPrimaria: '#fe8eff',
      corSecundaria: 'linear-gradient(19deg, rgba(254,129,255,1) 1%, rgba(255,54,244,1) 27%, rgba(255,0,254,1) 100%)'
    },
    {
      cor: 'Laranja',
      corPrimaria: '#ff7300',
      corSecundaria: 'linear-gradient(19deg, rgba(255,139,85,1) 1%, rgba(255,178,54,1) 27%, rgba(255,115,0,1) 100%)'
    },
    {
      cor: 'Branco',
      corPrimaria: '#2b2b2b',
      corSecundaria: 'linear-gradient(19deg, rgba(255,255,255,1) 1%, rgba(255,254,253,1) 34%, rgba(218,218,218,1) 100%)'
    },
    {
      cor: 'Preto',
      corPrimaria: '#ececec',
      corSecundaria: 'linear-gradient(19deg, rgba(75,75,75,1) 1%, rgba(41,41,41,1) 34%, rgba(0,0,0,1) 100%)'
    },
    {
      cor: 'Cinza',
      corPrimaria: '#cfcfcf',
      corSecundaria: 'linear-gradient(19deg, rgba(185,185,185,1) 1%, rgba(145,145,145,1) 34%, rgba(69,69,69,1) 100%)'
    }
  ]

  return (
    <div className='allContent'>
      <Banner />
      <Form 
        newUserAssign={user => newUserFunc(user)} 
        cardsStylesCor={cardsStyles.map(jogadores => jogadores.cor)} 
      />
      {cardsStyles.map(grupo => <Grupos 
        key={grupo.cor} 
        cor={grupo.cor} 
        corPrimaria={grupo.corPrimaria} 
        corSecundaria={grupo.corSecundaria}
        users={users.filter(user => user.cor === grupo.cor)} 
      />)}
      <Rodape />
    </div>
  )
};

export default App;
