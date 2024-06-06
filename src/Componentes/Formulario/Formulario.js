import './Formulario.css'
import Campo from '../Campo/Campo'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Form(props) {

    const [imagem, setImagem] = useState('');
    const [nome, setNome] = useState('');
    const [time, setTime] = useState('');
    const [selecao, setSelecao] = useState('');
    const [cor, setCor] = useState('');
    const [nomeGrupo, setNomeGrupo] = useState('');
    const [corGrupo, setCorGrupo] = useState('#8D173A');
    
    const aoSalvar = (event) => {
        event.preventDefault()
        // console.log('Form foi submetido!', nome, time, selecao, cor)
        props.newUserAssign(
            {
                imagem,
                nome, 
                time, 
                selecao, 
                cor
            }
        )
        alert('Card criado com sucesso!')
        //limpando os inputs após o submit
        setImagem('')
        setNome('')
        setTime('')
        setSelecao('')
        setCor('')
    };

    return (
        <section className='sectionForm'>
            <form 
                onSubmit={aoSalvar} >
                <Campo 
                    value={imagem} 
                    newValue={value => setImagem(value)} obrigatorio={true} 
                    label='Imagem:' 
                    placeholder='Link da imagem:' 
                />
                <Campo 
                    value={nome} 
                    newValue={value => setNome(value)} obrigatorio={true} 
                    label='Nome:' 
                    placeholder='Digite seu nome:' 
                />
                <Campo 
                    value={time} 
                    newValue={value => setTime(value)} obrigatorio={true} 
                    label='Time:' 
                    placeholder='Digite seu time:' 
                />
                <Campo 
                    value={selecao} 
                    newValue={value => setSelecao(value)} obrigatorio={true} 
                    label='Seleção:' 
                    placeholder='Digite sua seleção:' 
                />
                <ListaSuspensa 
                    value={cor} 
                    newValue={value => setCor(value)} 
                    obrigatorio={true} 
                    label='Cor principal do time/Seleção:' itens={props.cardsStylesCor} 
                />
                <Botao>Enviar Card</Botao>
            </form>
            <form 
                onSubmit={(event) => {
                    event.preventDefault()
                    props.criarGrupo({ cor: nomeGrupo, corSecundaria: corGrupo })
                    alert('Grupo criado com sucesso!')
                    setNomeGrupo('')
                    }} 
                >
                <Campo 
                    label='Nome:' 
                    placeholder='Digite o nome do grupo:' 
                    value={nomeGrupo} 
                    newValue={value => setNomeGrupo(value)} obrigatorio={true} //se for true, não precisa atribuir o valor {true}
                    />
                <Campo
                    className='input-color-form'
                    label='Cor:' 
                    typeInput='color'
                    obrigatorio={true} //se for true, não precisa atribuir o valor {true} 
                    value={corGrupo} 
                    newValue={value => setCorGrupo(value)} 
                />
                <Botao>Criar Grupo</Botao>
            </form>
        </section>
    );

}
