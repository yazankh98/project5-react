import './PackagesSection1.css'
const PackagesSection1 = ({img ,date ,people ,title , description , price , rate }) => {
    return (
        <div className='PackagesSection1Container' >
            <div className="PackagesSection1Card">
                <img src={img} alt="" />
                <div className="PackagesSection1Information">
                    <p > {date} </p>
                    <p>  {people} </p>
                </div>
                <h3 className='PackagesSection1Title' >{title}</h3>
                <p className='PackagesSection1Des' >{description}</p>
                <div className="Packages-Section1-Rate-And-Price">
                    <p className='Packages-Section1-Rate' >{price} </p>
                    <p className='Packages-Section1-Price' > <i class="fa-solid fa-star"></i>{rate}</p>
                </div>
            </div>
        </div>
    )
}

export default PackagesSection1