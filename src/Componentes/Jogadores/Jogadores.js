import { HiArchiveBoxXMark } from "react-icons/hi2";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

import './Jogadores.css'

const Jogadores = ({ imagem, nome, time, selecao, cor, favorito, corDeFundo, toDelete, user }) => { //desestruturação (sem usar o props)

    function favoritaOuNao() {
        favorito(user.id)
    }

    const buttonFavorite = {
        size: 25,
        onClick : favoritaOuNao
    }

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
            <div>
                {user.favorito 
                    // ? <BsSuitHeartFill size={25} onClick={favoritaOuNao} color="ff0000" />
                    // : <BsSuitHeart size={25} onClick={favoritaOuNao} />
                    ? <BsSuitHeartFill {...buttonFavorite} color="ff0000" />
                    : <BsSuitHeart {...buttonFavorite} />
                }
            </div>
        </div>
    )
}

export default Jogadores