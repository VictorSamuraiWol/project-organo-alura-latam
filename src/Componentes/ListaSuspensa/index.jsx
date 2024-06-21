import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label className='label-lista-suspensa'>
                {props.label}
            </label>
            <select value={props.value} onChange={evento => {props.newValue(evento.target.value)}} required={props.obrigatorio} className='select-lista-suspensa'>
                <option value="" />
                {props.itens.map(item => {
                    return <option key={item}>
                        {item}
                    </option>
                })}
            </select>
        </div>
    );
}

export default ListaSuspensa