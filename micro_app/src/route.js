import React from 'react';
import Menu from "./App"
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";

export const MainRoute = [
    {
        id: 1,
        name: "dashboard",
        path: "/",
        element: <Menu />,
    },
    {
        id: 2,
        name: "feature1",
        path: "/feature1",
        element: <Feature1 />,
    },
    {
        id: 3,
        name: "feature2",
        path: "/feature2",
        element: <Feature2 />,
    },
    {
        id: 4,
        name: "feature3",
        path: "/feature3",
        element: <Feature3 />,
    }
];
