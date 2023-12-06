import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import { RouteListType } from "@_types/route";
import CommonLayout from "@layout/CommonLayout";
import { GlobalStyle } from "@styles/globals";

const routeList: RouteListType = [
    { name: "home", path: "/", element: <Home /> },
];

const Router = () => {
    return (
        <BrowserRouter>
            <CommonLayout>
                <GlobalStyle />
                <Routes>
                    {routeList.map(({ name, path, element }) => (
                        <Route key={name} path={path} element={element} />
                    ))}
                </Routes>
            </CommonLayout>
        </BrowserRouter>
    );
};

export default Router;
