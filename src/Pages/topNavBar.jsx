import React, { useState } from 'react';
import {
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CContainer,
  CForm,
  CFormInput,
  CButton
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopNavBar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#" className='fw-bold'>E-COMMERCE</CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="/products" active>
                  Products
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/cart">Cart</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/checkout">Checkout</CNavLink>
              </CNavItem>
             
            </CNavbarNav>
        
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}
