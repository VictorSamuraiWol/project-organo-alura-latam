import './Rodape.css'

const Rodape = () => {
    return(
        <section className='rodape'>
            <div className='rodape-imgs-left'>
                <img className='img-rodape' src='imgs/fb.png' alt='face-image'/>
                <img className='img-rodape' src='imgs/tw.png' alt='twitter-image'/>
                <img className='img-rodape' src='imgs/ig.png' alt='instagram-image'/>
            </div>
            <img className='rodape-imgs-center' src='imgs/logo.png' alt='logo-image'/>
            <h4>Desenvolvido por Victor Cardoso.</h4>
        </section>
    )
}

export default Rodape