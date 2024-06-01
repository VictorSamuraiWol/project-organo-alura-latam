import './CampoTexto.css'

export default function CampoTexto(props) {
    
    const newValueFunction = (event) => {
        props.newValue(event.target.value);
    }

    return (
        <div className='campo'>
            <label>{props.label}</label>
            <input onChange={newValueFunction} value={props.value} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
}
