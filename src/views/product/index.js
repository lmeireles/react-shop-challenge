import React, { Fragment } from "react";
import { connect } from "react-redux";
import Loading from "../../components/layout/spinner";
import { detailProduct } from "../../store/products/thunks";
import { addCart } from "../../store/cart/thunks";
import Container from "./containers/container";
import Back from "./components/backTo";
import HeaderProduct from "./components/headerProduct";
import ContentProduct from "./components/contentProduct";
import InfosProduct from "./components/infos/infosProduct";
import Gallery from "./components/gallery/gallery";
import NextImages from "./components/gallery/nextImages";
import SpotlightImage from "./components/gallery/spotlightImage";
import Image from "./components/gallery/image";
import ImagesGallery from "./components/gallery/imagesGallery";
import Button from "../../components/layout/button";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moveToCart: ""
    };
  }

  componentDidMount() {
    const { match, detailProduct, auth } = this.props;
    detailProduct(match.params.id);
  }

  handleAddCart = async product => {
    this.setState({
      //moveToCart: "animated zoomOutRight delay-0.5s"
    });
    setInterval(
      () =>
        this.setState({
          moveToCart: ""
        }),
      1000
    );
    return await this.props.addCart(product);
  };

  render() {
    const { products, cart } = this.props;
    return (
      <Container>
        <Loading show={products.loading} />
        <HeaderProduct>
          <Back to="/">Voltar</Back>
        </HeaderProduct>
        {products.product && (
          <ContentProduct className={this.state.moveToCart}>
            <Gallery>
              <NextImages>
                <ImagesGallery src={products.product.picture} />
                <ImagesGallery src={products.product.picture} />
                <ImagesGallery src={products.product.picture} />
              </NextImages>
              <SpotlightImage>
                <Image
                  src={products.product.picture}
                  alt={products.product.item}
                />
              </SpotlightImage>
            </Gallery>
            <InfosProduct {...products.product}>
              <Button
                gradient="true"
                onClick={() => this.handleAddCart(products.product)}>
                Add to Cart
              </Button>
            </InfosProduct>
          </ContentProduct>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  products: state.products,
  cart: state.cart
});

export default connect(
  mapStateToProps,
  {
    detailProduct,
    addCart
  }
)(Product);
