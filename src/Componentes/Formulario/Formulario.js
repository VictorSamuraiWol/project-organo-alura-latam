import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react';

export function Form(props) {

    const [nome, setNome] = useState('');
    const [time, setTime] = useState('');
    const [selecao, setSelecao] = useState('');
    const [cor, setCor] = useState('');
    
    const aoSalvar = (event) => {
        event.preventDefault()
        // console.log('Form foi submetido!', nome, time, selecao, cor)
        props.newUserAssign({
            nome, 
            time, 
            selecao, 
            cor
        })
        //limpando os inputs após o submit
        setNome('')
        setTime('')
        setSelecao('')
        setCor('')
    };

    return (
        <section>
            <form onSubmit={aoSalvar} >
                <CampoTexto value={nome} newValue={nome => setNome(nome)} obrigatorio={true} label='Nome:' placeholder='Digite seu nome:'></CampoTexto>
                <CampoTexto value={time} newValue={time => setTime(time)} obrigatorio={true} label='Time:' placeholder='Digite seu time:'></CampoTexto>
                <CampoTexto value={selecao} newValue={selecao => setSelecao(selecao)} obrigatorio={true} label='Seleção:' placeholder='Digite sua seleção:'></CampoTexto>
                <ListaSuspensa value={cor} newValue={cor => setCor(cor)} obrigatorio={true} label='Cor principal do time/Seleção' itens={props.cardsStylesCor} />
                <Botao>
                    Enviar
                </Botao>
            </form>
        </section>
    );

}