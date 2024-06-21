import './Campo.css'

export default function Campo(props) {
    
    const newValueFunction = (event) => {
        props.newValue(event.target.value);
    }

    return (
        <div className='campo'>
            <label htmlFor={props.label}>{props.label}</label>
            <input type={props.typeInput} id={props.label} name={props.label} onChange={newValueFunction} value={props.value} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
}
