import './PackagesSection1Container.css'
const PackagesSection1Container = (props) => {
    return (
        <div className='PackagesSection1CardContainer'>
            {props.children}
        </div>
    )
}

export default PackagesSection1Container