import React from "react";
import { connect } from "react-redux";
import Loading from "../../components/layout/spinner";
import { requestProducts } from "../../store/products/thunks";
import { addCart } from "../../store/cart/thunks";
import Content from "./containers/content";
import Filter from "./components/filter";
import Grid from "./components/grid";
import ProductList from "./components/productList";
import Sidebar from "./components/sidebar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false
    };
    this.handleSidebar = this.handleSidebar.bind(this);
  }
  componentDidMount() {
    const { requestProducts } = this.props;
    requestProducts();
  }

  handleAddCart = async product => {
    this.setState({
      moveToCart: "animated zoomOutRight delay-0.5s"
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

  handleSidebar() {
    if (!this.state.openSidebar) {
      this.setState({
        openSidebar: true
      });
    } else {
      this.setState({
        openSidebar: false
      });
    }
  }
  render() {
    const { products } = this.props;
    return (
      <Content>
        <Loading show={products.loading} />
        <Sidebar open={this.state.openSidebar} />
        <Grid>
          {/*<Filter>
						<i className="fa fa-filter" onClick={this.handleSidebar} />
					</Filter>*/}
          <ProductList {...this.props} onClick={this.handleAddCart} />
        </Grid>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  {
    requestProducts,
    addCart
  }
)(Home);
