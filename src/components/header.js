import React, { Component, Fragment, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../store/auth/thunks";
import { filterProducts } from "../store/products/thunks";
import { showCart } from "../store/cart/thunks";
import NavBar from "./layout/navbar";
import InfoBar from "./layout/header/navbar/infoBar";
import NavLink from "./layout/nav-link";
import UserName from "./layout/header/navbar/userName";
import UserMenu from "./layout/userMenu";
import Search from "./layout/searchForm.js";
import IconUser from "./layout/iconUser";
import { filter as _filter } from "lodash";
import IconCart from "./layout/iconWithBadge";
import LoginBtn from "./layout/header/navbar/btn";

const Header = props => {
  const [openUserMenu, setUserMenu] = useState(false);

  const handleOpenMenu = () => {
    setUserMenu(openUserMenu === false ? true : false);
  };

  const handleSubmit = async ({ term }) => {
    // criar thunk para filtrar por qualquer termo
    const filtered = _filter(
      props.products.list,
      i => i.item.indexOf(term) > -1
    );
    return await props.filterProducts(filtered);
  };

  const Right = styled.nav`
    flex: 1;
    text-align: right;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  `;
  return (
    <div>
      <NavBar {...props.auth}>
        <NavLink to="/">Home</NavLink>
        <IconCart
          icon="shopping-cart"
          bg="primary"
          color="white"
          margin="12px"
          badgeContent={props.cart.length}
          onClick={() => props.showCart(true)}
        />
        <Right>
          {props.auth.logged ? (
            <Fragment>
              <UserName>
                <i className="fa fa-caret-down" />
                {props.auth.user.name}
              </UserName>
              <IconUser
                className="fa fa-user"
                onClick={() => handleOpenMenu()}
              />
              {openUserMenu && (
                <UserMenu>
                  {props.auth.user.access === "1" ? (
                    <NavLink to="/admin" onClick={() => setUserMenu(false)}>
                      Admin
                    </NavLink>
                  ) : (
                    <NavLink to="/profile" onClick={() => setUserMenu(false)}>
                      Profile
                    </NavLink>
                  )}
                  <NavLink to="/" onClick={props.logout}>
                    Logout
                  </NavLink>
                </UserMenu>
              )}
            </Fragment>
          ) : (
            <Fragment>
              <LoginBtn border="true" to="/login">
                Login
              </LoginBtn>
              <LoginBtn bg="true" color="true" to="/register">
                Register
              </LoginBtn>
            </Fragment>
          )}
        </Right>
      </NavBar>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  products: state.products,
  cart: state.cart
});

export default connect(
  mapStateToProps,
  {
    logout,
    filterProducts,
    showCart
  }
)(Header);
