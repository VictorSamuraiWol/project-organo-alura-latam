import './Jogadores.css'

const Jogadores = ({ nome, time, selecao, cor, corDeFundo }) => { //desestruturação (sem usar o props)

    return(
        <div className='cardPlayer' style={{ backgroundColor: corDeFundo }} >
            <h3>{nome}</h3>
            <h3>{time}</h3>
            <h3>{selecao}</h3>
            <h3>{cor}</h3>
        </div>
    )
}

export default Jogadores