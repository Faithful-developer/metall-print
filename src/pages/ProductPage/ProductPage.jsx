import './ProductPage.scss'
import ProductData from "../Home/Data/ProductData";
import Footer from "../../containers/Footer";

const ProductPage = ({match}) =>{
    let id = parseInt(match.params.id)

    function findArrayElementByTitle(array, idNumber) {
        return array.find((element) => {
            return element.id === idNumber;
        })
    }

    let Product = findArrayElementByTitle(ProductData, id)
    console.log(Product)
    return(
        <>
            <div className="product-wrapper">
                <div className="container">
                    <div className="container-info">
                        <div className="img-wrapper">
                            <img src={Product.imgLink} alt=""/>
                        </div>
                        <div className="content-wrapper">
                            <h1>{Product.title}</h1>
                        </div>
                    </div>
                    <div className="container-overview">
                        <p>{Product.overview}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dolorum ex facere labore necessitatibus non officiis quo reprehenderit sit? Assumenda dolor eum excepturi exercitationem explicabo id nemo pariatur, perferendis reprehenderit sapiente. A asperiores atque, corporis delectus eaque earum fugiat inventore ipsam iusto odio perferendis, possimus quas ratione reprehenderit soluta?
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProductPage