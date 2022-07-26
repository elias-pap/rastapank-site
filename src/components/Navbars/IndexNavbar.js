/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import $ from 'jquery';

function TheNavbar({ categories }) {
    const white_logo = require("assets/img/logoweb2.png")
    const black_logo = require("assets/img/logoweb2dark.png")
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [logo, setLogo] = React.useState(white_logo);
    const [navbarIsClosed, setNavbarClosed] = React.useState(true);
    const toggleNavbar = () => {
        if (navbarIsClosed)
            openNavbar()
        else
            closeNavbar()

    };
    const openNavbar = () => {
        if (navbarIsClosed) {
            setNavbarClosed(false);
            document.documentElement.classList.add("nav-open");
        }
    };
    const closeNavbar = () => {
        if (!navbarIsClosed) {
            setNavbarClosed(true);
            document.documentElement.classList.remove("nav-open");
        }
    };


    const scroll_to_main = () => {
        if (window.location.pathname === "/" || window.location.pathname === "/index") {
            window.scrollTo({ top: 0 });
        } else {
            $('html, body').animate({
                scrollTop: $("#content_s").offset().top - 112
            }, 1000);
        }

    };
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
                setLogo(black_logo)
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
                setLogo(white_logo)
            }
        };
        window.addEventListener("new_page", closeNavbar);
        window.addEventListener("new_page", scroll_to_main);
        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
            window.removeEventListener("new_page", closeNavbar);
            window.removeEventListener("new_page", scroll_to_main);
        };

    });

    if (!categories && !categories.length)
        return (<>Test</>);
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand tag={Link} to={'/'}
                        data-placement="bottom"
                        title="Ρασταπανκ FM 96.7">
                        <img
                            alt="Ρασταπανκ FM 96.7"
                            className="img-brand img-no-padding img-responsive"
                            src={logo}
                        />
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarIsClosed}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: !navbarIsClosed
                        })}
                        onClick={toggleNavbar}>
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    id="collapse_menu"
                    className="justify-content-end"
                    navbar
                    isOpen={navbarIsClosed}>
                    <Nav navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">
                                <p className="">Home</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/radio">
                                <p className="">Radio</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/chat">
                                <p className="">CHAT</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/misc">
                                <p className="">Culture</p>
                            </Link>
                        </NavItem>
                        {/*
                        <NavDropdown title="ΑΡΘΡΑ" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to='/articles'>ΟΛΑ ΤΑ ΑΡΘΡΑ</Link>
                            {categories.map((category, i) => (
                                <Link
                                    className="dropdown-item" key={i}
                                    to={`/articles_category/${category.id}`}>{category.name}
                                </Link>
                            ))}
                        </NavDropdown>
                        <NavItem>
                            <Link className="nav-link" to="/events">
                                <p className="">ΕΚΔΗΛΩΣΕΙΣ</p>
                            </Link>
                        </NavItem>
                        */}
                        <NavItem>
                            <Link className="nav-link" to="/heraklion_diy">
                                <p className="">HERAKLION DIY</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/about_us">
                                <p className="">ABOUT</p>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

class IndexNavbar extends Component {
    state = {
        categories: [{ 'id': 0, 'name': "" }],
    };


    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_categories')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                this.setState(data);
            })
            .catch(console.log);
    }

    render() {
        return (
            <>
                <TheNavbar categories={this.state.categories} />
            </>
        )
    }
}


export default IndexNavbar;
