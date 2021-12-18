import './ProductPage.scss'

const ProductPage = ({match}) =>{
    return(
        <>
            <h1>Product Page</h1>
            <span>{match.params.id}</span>
        </>
    )
}

export default ProductPage