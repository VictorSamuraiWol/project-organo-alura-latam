import { HiArchiveBoxXMark } from "react-icons/hi2";
import './Jogadores.css'

const Jogadores = ({ imagem, nome, time, selecao, cor, corDeFundo, toDelete, user }) => { //desestruturação (sem usar o props)

    console.log(user)

    return(
        <div className='cardPlayer' style={{ backgroundColor: corDeFundo, boxShadow: cor }} >
            <HiArchiveBoxXMark 
                onClick={() => toDelete(user.id)} 
                className='deletePlayer' 
                size={25} 
            />
            <img 
                className='imgCards' 
                src={imagem} 
                alt='Link da imagem' 
            />
            <h3>{nome}</h3>
            <h3>{time}</h3>
            <h3>{selecao}</h3>
            <h3>{cor}</h3>
        </div>
    )
}

export default Jogadores