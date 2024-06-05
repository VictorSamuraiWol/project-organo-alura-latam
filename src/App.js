import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner/Banner';
import { Form } from './Componentes/Formulario/Formulario';
import Rodape from './Componentes/Rodape/Rodape';
import Grupos from './Componentes/Grupos/Grupos';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const inicial = [
    {
      cor: 'Vermelho',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },
    {
      cor: 'Azul',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },
    {
      cor: 'Amarelo',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },    {
      cor: 'Verde',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },    {
      cor: 'Roxo',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },    {
      cor: 'Violeta',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },    {
      cor: 'Laranja',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },    {
      cor: 'Branco',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },    {
      cor: 'Preto',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },    {
      cor: 'Cinza',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    },
    {
      cor: 'Vinho',
      imagem: 'https://github.com/VictorSamuraiWol.png',
      nome: 'Victor',
      selecao: 'Brasil',
      time: 'Real Madrid',
      id: uuidv4()
    }
  ]

  const [users, setUsers] = useState(inicial);

  const newUserFunc = (user) => {
    setUsers([...users, user])
    // console.log(user);
  }

  const [cardsStyles, setCardsStyles] = useState([
    {
      id: uuidv4(),
      cor: 'Vermelho',
      corPrimaria: '#410000',
      corSecundaria: 'radial-gradient(circle, #ff5e5e, #eb4f4c, #d8403b, #c4312b, #b1201a, #b1201a, #b1201a, #b1201a, #c4312b, #d8403b, #eb4f4c, #ff5e5e)'
    },
    {
      id: uuidv4(),
      cor: 'Azul',
      corPrimaria: '#080297',
      corSecundaria: 'radial-gradient(circle, #43e7ff, #00cfff, #00b5ff, #0097ff, #0074ff, #0074ff, #0074ff, #0074ff, #0097ff, #00b5ff, #00cfff, #43e7ff)'
    },
    {
      id: uuidv4(),
      cor: 'Amarelo',
      corPrimaria: '#595901',
      corSecundaria: 'radial-gradient(circle, #eaff5e, #d5e44d, #c0cb3d, #abb12d, #96991c, #96991c, #96991c, #96991c, #abb12d, #c0cb3d, #d5e44d, #eaff5e)'
    },
    {
      id: uuidv4(),
      cor: 'Verde',
      corPrimaria: '#083900',
      corSecundaria: 'radial-gradient(circle, #5eff88, #51dd6d, #44bd53, #359d3a, #257f22, #257f22, #257f22, #257f22, #359d3a, #44bd53, #51dd6d, #5eff88)'
    },
    {
      id: uuidv4(),
      cor: 'Roxo',
      corPrimaria: '#11001A',
      corSecundaria: 'radial-gradient(circle, #c05eff, #a04ad6, #8237af, #642589, #481465, #481465, #481465, #481465, #642589, #8237af, #a04ad6, #c05eff)'
    },
    {
      id: uuidv4(),
      cor: 'Violeta',
      corPrimaria: '#480048',
      corSecundaria: 'radial-gradient(circle, #c000e9, #b100cf, #a200b6, #92009e, #810087, #810087, #810087, #810087, #92009e, #a200b6, #b100cf, #c000e9)'
    },
    {
      id: uuidv4(),
      cor: 'Laranja',
      corPrimaria: '#894E00',
      corSecundaria: 'radial-gradient(circle, #ffa602, #f39b02, #e79002, #da8501, #ce7a01, #ce7a01, #ce7a01, #ce7a01, #da8501, #e79002, #f39b02, #ffa602)'
    },
    {
      id: uuidv4(),
      cor: 'Branco',
      corPrimaria: '#A8A8A8',
      corSecundaria: 'linear-gradient(to right top, #ffffff, #fbfbfb, #f6f6f6, #f2f2f2, #eeeeee, #eeeeee, #eeeeee, #eeeeee, #f2f2f2, #f6f6f6, #fbfbfb, #ffffff)'
    },
    {
      id: uuidv4(),
      cor: 'Preto',
      corPrimaria: '#040404',
      corSecundaria: 'radial-gradient(circle, #424242, #383838, #2f2f2f, #262626, #1d1d1d, #1d1d1d, #1d1d1d, #1d1d1d, #262626, #2f2f2f, #383838, #424242)'
    },
    {
      id: uuidv4(),
      cor: 'Cinza',
      corPrimaria: '#373737',
      corSecundaria: 'radial-gradient(circle, #999999, #8d8d8d, #828282, #767676, #6b6b6b, #6b6b6b, #6b6b6b, #6b6b6b, #767676, #828282, #8d8d8d, #999999)'
    },
    {
      id: uuidv4(),
      cor: 'Vinho',
      corPrimaria: '#4b0000',
      corSecundaria: 'linear-gradient(19deg, rgba(154,43,43,1) 30%, rgba(131,0,0,1) 77%)'
    }
  ])

  const mudarCorFunc = (cor, id) => {
    setCardsStyles(cardsStyles.map(cards => {
      if(cards.id === id) {
        cards.corPrimaria = cor;
      }
      // console.log(cards)
      return cards; 
    }))
  }

  const deleteFuncConst = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className='allContent'>
      <Banner />
      <Form 
        newUserAssign={user => newUserFunc(user)} 
        cardsStylesCor={cardsStyles.map(jogadores => jogadores.cor)} 
      />
      {cardsStyles.map(grupo => 
      <Grupos 
        id={grupo.id}
        key={grupo.cor} 
        cor={grupo.cor} 
        corPrimaria={grupo.corPrimaria} 
        corSecundaria={grupo.corSecundaria}
        users={users.filter(user => user.cor === grupo.cor)}
        deleteFunc={deleteFuncConst}
        mudarCor={mudarCorFunc}
      />)}
      <Rodape />
    </div>
  )
};

export default App;
