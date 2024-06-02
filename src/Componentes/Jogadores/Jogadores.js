import { HiArchiveBoxXMark } from "react-icons/hi2";
import './Jogadores.css'

const Jogadores = ({ imagem, nome, time, selecao, cor, corDeFundo }) => { //desestruturação (sem usar o props)

    return(
        <div className='cardPlayer' style={{ backgroundColor: corDeFundo, boxShadow: cor }} >
            <HiArchiveBoxXMark className='deletePlayer' size={25} />
            <img className='imgCards' src={imagem} alt='Link da imagem' />
            <h3>{nome}</h3>
            <h3>{time}</h3>
            <h3>{selecao}</h3>
            <h3>{cor}</h3>
        </div>
    )
}

export default Jogadores