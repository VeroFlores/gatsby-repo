import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"

// Global styles and component-specific styles

const Layout = ({ children }) => (
  <div>
    <Helmet title="Simple Authentication With Gatsby" />
    <Header />
    <main >{children}</main>
  </div>
)

export default Layout