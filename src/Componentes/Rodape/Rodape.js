import './Rodape.css'

const Rodape = () => {
    return(
        <section className='rodape'>
            <div className='rodape-imgs-left'>
                <a href='https://www.linkedin.com/in/victor-cardoso-cloud-front/' target='a_blank'><img className='img-rodape' src='imgs/linkedin-icon.png' alt='linkedin-image'/></a>
            </div>
            <img className='rodape-imgs-center' src='imgs/logo.png' alt='logo-image'/>
            <h4>Desenvolvido por Victor Cardoso.</h4>
        </section>
    )
}

export default Rodape