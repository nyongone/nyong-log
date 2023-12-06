import { ReactNode } from "react";

export type RouteType = {
    name: string;
    path: string;
    element: ReactNode;
};

export type RouteListType = RouteType[];
