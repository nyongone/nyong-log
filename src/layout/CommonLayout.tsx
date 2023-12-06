import React from "react";
import { Header } from "@components/layout";

type Props = {
    children: React.ReactNode;
};

const CommonLayout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default CommonLayout;
