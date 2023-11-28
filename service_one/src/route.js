import React from 'react';
import Menu from "./App"
import Card from "./Card";

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
        path: "/card",
        element: <Card />,
    }
];
