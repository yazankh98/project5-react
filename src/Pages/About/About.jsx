import React from 'react'
import NavBar from './../../components/NavBar/NavBar'
import AboutHero from '../../components/AboutHero/AboutHero'
import AboutSection1 from '../../components/AboutSection1/AboutSection1'
import AboutSection2 from '../../components/AboutSection2/AboutSection2'
import AboutSection3 from '../../components/AboutSection3/AboutSection3'
import Footer from './../../components/footer/Footer'
import FooterContainer from './../../components/footer/FooterContainer'
import FooterCopyRight from './../../components/footer/FooterCopyRight'


const About = () => {
    return (
        <div>
            <NavBar img='/img/logo.png' menu={[{ title: "Home", path: '/' }, { title: "About", path: '/about' }, { title: "Packages", path: '/packages' }, { title: "Services", path: '/services' }]} btn="Get in Touch" />
            <AboutHero img='/img/aboutHero.png' title={'About Us'} />
            <AboutSection1 title={"Promotion"} title1={"We Provide You Best Europe Sightseeing Tours"} description={"Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"}
                btn={"View Packages"}
                img={"/img/AboutSection1.png"} />
            <AboutSection2 />
            <AboutSection3 img={"/img/AboutSection3.png"} title={"Trend"} title1={"Our Popular Tour Plans"}
                description={"Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium."} />
            
            <FooterContainer>
                <Footer />
            </FooterContainer>
            <FooterCopyRight />
        </div>

    )
}

export default About