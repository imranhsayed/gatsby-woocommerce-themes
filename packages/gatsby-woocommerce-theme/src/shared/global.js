import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body.sb-show-main {
    height: 100vh !important;
    width: 106vw;
 }
 .mobile-menu-open {
    position: static;
 }
 
 .header-nav {
    right: -100vw;
 }
`;
