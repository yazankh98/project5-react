import './AboutHero.css'
const AboutHero = ({ img, title }) => {
    return (
        <div className='AboutHero' >
            <img src={img} alt="" />
            <h1>{title}</h1>
        </div>
    )
}

export default AboutHero