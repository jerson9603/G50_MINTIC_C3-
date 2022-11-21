import React from "react";
import { NavBar } from "./navigation/nav-bar";

export const PageLayout = ({ children }) => {
    return (
      <div className="page-layout">
        <NavBar />
        <div className="page-layout__content">{children}</div>
        {/* //TODO <PageFooter /> */}
      </div>
    );
  };