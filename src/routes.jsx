import React from "react";
import Users from "./Pages/Users/Users";
import Courses from "./Pages/Courses/Courses";
import Articles from "./Pages/Articles/Articles";
import Info from "./Pages/Info/Info";

const routes = [
    { path: "/", element: <Users /> },
    { path: "/users", element: <Users /> },
    { path: "/courses", element: <Courses /> },
    { path: "/articles", element: <Articles /> },
    { path: "/info", element: <Info /> },
]

export default routes
