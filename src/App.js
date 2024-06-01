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
      corPrimaria: '#410000',
      corSecundaria: 'radial-gradient(circle, #ff5e5e, #eb4f4c, #d8403b, #c4312b, #b1201a, #b1201a, #b1201a, #b1201a, #c4312b, #d8403b, #eb4f4c, #ff5e5e)'
    },
    {
      cor: 'Azul',
      corPrimaria: '#080297',
      corSecundaria: 'radial-gradient(circle, #43e7ff, #00cfff, #00b5ff, #0097ff, #0074ff, #0074ff, #0074ff, #0074ff, #0097ff, #00b5ff, #00cfff, #43e7ff)'
    },
    {
      cor: 'Amarelo',
      corPrimaria: '#595901',
      corSecundaria: 'radial-gradient(circle, #eaff5e, #d5e44d, #c0cb3d, #abb12d, #96991c, #96991c, #96991c, #96991c, #abb12d, #c0cb3d, #d5e44d, #eaff5e)'
    },
    {
      cor: 'Verde',
      corPrimaria: '#083900',
      corSecundaria: 'radial-gradient(circle, #5eff88, #51dd6d, #44bd53, #359d3a, #257f22, #257f22, #257f22, #257f22, #359d3a, #44bd53, #51dd6d, #5eff88)'
    },
    {
      cor: 'Roxo',
      corPrimaria: '#11001A',
      corSecundaria: 'radial-gradient(circle, #c05eff, #a04ad6, #8237af, #642589, #481465, #481465, #481465, #481465, #642589, #8237af, #a04ad6, #c05eff)'
    },
    {
      cor: 'Violeta',
      corPrimaria: '#480048',
      corSecundaria: 'radial-gradient(circle, #c000e9, #b100cf, #a200b6, #92009e, #810087, #810087, #810087, #810087, #92009e, #a200b6, #b100cf, #c000e9)'
    },
    {
      cor: 'Laranja',
      corPrimaria: '#894E00',
      corSecundaria: 'radial-gradient(circle, #ffa602, #f39b02, #e79002, #da8501, #ce7a01, #ce7a01, #ce7a01, #ce7a01, #da8501, #e79002, #f39b02, #ffa602)'
    },
    {
      cor: 'Branco',
      corPrimaria: '#A8A8A8',
      corSecundaria: 'linear-gradient(to right top, #ffffff, #fbfbfb, #f6f6f6, #f2f2f2, #eeeeee, #eeeeee, #eeeeee, #eeeeee, #f2f2f2, #f6f6f6, #fbfbfb, #ffffff)'
    },
    {
      cor: 'Preto',
      corPrimaria: '#040404',
      corSecundaria: 'radial-gradient(circle, #424242, #383838, #2f2f2f, #262626, #1d1d1d, #1d1d1d, #1d1d1d, #1d1d1d, #262626, #2f2f2f, #383838, #424242)'
    },
    {
      cor: 'Cinza',
      corPrimaria: '#373737',
      corSecundaria: 'radial-gradient(circle, #999999, #8d8d8d, #828282, #767676, #6b6b6b, #6b6b6b, #6b6b6b, #6b6b6b, #767676, #828282, #8d8d8d, #999999)'
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
