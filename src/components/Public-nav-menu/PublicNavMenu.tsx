/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
//  import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Image,
  Button,
} from 'react-bootstrap';
import { useState } from 'react';

// import { Link, useNavigate } from 'react-router-dom';
const PublicNavMenu = (): JSX.Element => {
  const [isHoveredFinanceDetails, setIsHoveredFinanceDetails] = useState(false);
  const [isClickedFinanceDetails, setIsClickedFinanceDetails] = useState(false);
  const [isHoveredCrmMenu, setIsHoveredCrmMenu] = useState(false);
  const [isClickedCrmMenu, setIsClickedCrmMenu] = useState(false);
  // const { t, i18n } = useTranslation()
  // let navigate = useNavigate()
  function onClick(event: React.MouseEvent<HTMLAnchorElement>): void {
    event.preventDefault();
  }
  return (
    <Navbar
      expand="lg"
      className="main-header-menu-wrap white-bg border-bottom navbar-open"
      id="logoAndNav"
    >
      <Container className="container">
        <Navbar.Brand href="/">
          <Link className="navbar-brand" to="/">
            <Image
              src="/assets/img/head-logo-mrdomain.png"
              width="120"
              alt="logo"
              className="img-fluid"
            />
          </Link>
          <Button
            className="navbar-toggler btn"
            aria-expanded="false"
            aria-controls="navBar"
            data-toggle="collapse"
            data-target="#navBar"
          >
            <span id="hamburgerTrigger">
              <span className="fas fa-bars" />
            </span>
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navBar">
          <span id="hamburgerTrigger">
            <span className="fas fa-bars" />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="custom-nav-link collapse navbar-collapse"
            >
              خانه
            </Nav.Link>
            <NavDropdown
              title="پرتال مشتریان"
              id="basic-nav-dropdown"
              className="collapse navbar-collapse custom-nav-item nav-item"
              onMouseEnter={() => setIsHoveredCrmMenu(true)}
              onMouseLeave={() => setIsHoveredCrmMenu(false)}
              onToggle={() => setIsClickedCrmMenu(!isClickedCrmMenu)}
              show={isClickedCrmMenu || isHoveredCrmMenu}
            >
              <NavDropdown.Item
                href="https://crm.mrdomain.ir/register.php"
                className="text-left nav-item custom-nav-item"
              >
                پرتال ریالی
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://cryptocrm.mrdomain.ir/register.php"
                className="text-left"
              >
                پرتال دلاری
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://zarinp.al/eae966"
                className="text-left"
              >
                درگاه پرداخت
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="اطلاعات مالی"
              id="basic-nav-dropdown"
              className="nav-item hs-has-mega-menu custom-nav-item"
              data-max-width="720px"
              data-position="right"
              onMouseEnter={() => setIsHoveredFinanceDetails(true)}
              onMouseLeave={() => setIsHoveredFinanceDetails(false)}
              onToggle={() =>
                setIsClickedFinanceDetails(!isClickedFinanceDetails)
              }
              show={isClickedFinanceDetails || isHoveredFinanceDetails}
            >
              <Nav.Link
                as={Link}
                to="/companyBankAccounts"
                className="text-left"
                style={{ width: '10vw' }}
              >
                حسابهای بانکی و کارتها
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PublicNavMenu;
