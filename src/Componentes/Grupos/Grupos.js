import Jogadores from '../Jogadores/Jogadores'
import './Grupos.css'

const Grupos = (props) => {

    return(
        props.users.length > 0 && <section className='grupos' style={{ background: props.corSecundaria }}>
            <h2 style={{ borderBottomColor: props.corPrimaria, color: props.corPrimaria }}>Grupo da cor: {props.cor} </h2>
            <div className='cardsPLayers' style={{ color: props.corPrimaria }}>
                {props.users.map(user => <Jogadores key={user.nome} imagem={user.imagem} nome={user.nome} time={user.time} selecao={user.selecao} cor={user.cor} style={{ border: props.corPrimaria }} corDeFundo={props.corSecundaria} />)}
            </div>
        </section>
    )
}

export default Grupos