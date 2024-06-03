import React from 'react'
import NavBar from './../components/NavBar/NavBar'
import PackagesHero from './../components/PackagesHero/PackagesHero'
import PackagesSection1 from '../components/PackagesSection1/PackagesSection1'
import PackagesSection1Container from '../components/PackagesSection1/PackagesSection1Container/PackagesSection1Container'
import Footer from './../components/footer/Footer'
import FooterContainer from './../components/footer/FooterContainer'
import FooterCopyRight from './../components/footer/FooterCopyRight'
const Packages = () => {
    return (
        <div>
            <NavBar img='/img/logo.png' menu={[{ title: "Home", path: '/' }, { title: "About", path: '/about' }, { title: "Packages", path: '/packages' }, { title: "Services", path: '/services' }]} btn="Get in Touch" />
            <PackagesHero img='/img/PackagesHero.png' title={' Travel With Us'} />

            <PackagesSection1Container>
                <PackagesSection1 img="/img/PackagesSection1-1.png" date="27, September 2023" people="30+ People" title="Maldives" description= "Qui tempore voluptate qui quia commodi rem praesentium alias et." price="3000 $" rate="5.0" />
                <PackagesSection1 img="/img/PackagesSection1-2.png" date="13, October 2023" people="120+ People" title="Switzerland" description= "Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1290 $" rate="4.9" />
                <PackagesSection1 img="/img/PackagesSection1-3.png" date="2, November 2022" people="139+ People" title="Berlin" description= "Qui tempore voluptate qui quia commodi rem praesentium alias et." price="2790 $" rate="5.0" />
                <PackagesSection1 img="/img/PackagesSection1-4.png" date="14, December 2022" people="50+ People" title="Torronto" description= "Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1110 $" rate="4.0" />
                <PackagesSection1 img="/img/PackagesSection1-5.png" date="20, September 2022" people="80+ People" title="Baku" description= "Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1220 $" rate="4.5" />
                <PackagesSection1 img="/img/PackagesSection1-6.png" date="27, August 2022" people="100+ People" title="Chinese" description= "Qui tempore voluptate qui quia commodi rem praesentium alias et." price="2500 $" rate="5.0" />
            </PackagesSection1Container>

            <FooterContainer>
                <Footer />
            </FooterContainer>
            <FooterCopyRight />

        </div>
    )
}

export default Packages