import React from 'react'
import Hero from './../../components/Hero/Hero'
import NavBar from './../../components/NavBar/NavBar'
import Card from './../../components/Section1/Card/Card'
import Section1 from './../../components/Section1/Section1'
import Section1_Container from './../../components/Section1/Section1-Container/Section1_Container'
import Section2 from './../../components/Section2/Section2'
import Footer from './../../components/footer/Footer'
import FooterContainer from './../../components/footer/FooterContainer'
import FooterCopyRight from './../../components/footer/FooterCopyRight'
import Section3 from './../../components/section3/Section3'
import Card2 from './../../components/section3/Section3-Card/Card2'
import Section3_Container from './../../components/section3/Section3_Container/Section3_Container'
const Home = () => {
    return (
        <div>
            <NavBar img='/img/logo.png' menu={[{ title: "Home", path: '/' }, { title: "About", path: '/about' }, { title: "Packages", path: '/packages' }, { title: "Services", path: '/services' }]} btn="Get in Touch" />
            <Hero img='/img/hero.png' title={'No matter where you’re going to,we’ll take you there'} />

            <Section1 />

            <Section1_Container>
                <Card img="/img/sec1-1.png" title="Guided Tours" des="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
                <Card img="/img/sec1-2.png" title="Best Flights Options" des="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
                <Card img="/img/sec1-3.png" title="Religious Tours" des="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
                <Card img="/img/sec1-4.png" title="Medical insurance" des="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
            </Section1_Container>
            <Section2 />

            <Section3 />

            <Section3_Container>
                <Card2 img="/img/sec3-1.png" flag="./img/sec3-1-1.png" days="8" count="30" countryName="Switzerland" des="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod
                eligendi. Et labore harum non nobis ipsum eum 
                molestias mollitia et corporis praesentium a  laudantium internos"/>
                <Card2 img="/img/sec3-2.png" flag="./img/sec3-2-1.png" days="8" count="60" countryName="Amazon" des="Nam exercitationem commodi et ducimus quia
      in dolore animi sit mollitia amet id quod 
      eligendi. Et labore harum non nobis ipsum eum 
      molestias mollitia et corporis praesentium a
      laudantium internos"/>
                <Card2 img="/img/sec3-3.png" flag="./img/sec3-3-1.png" days="8" count="120" countryName="Giza" des="Nam exercitationem commodi et ducimus quia in
          dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." />
            </Section3_Container>

            <FooterContainer>
                <Footer />
            </FooterContainer>
            <FooterCopyRight />
        </div>
    )
}

export default Home