import React, { Suspense } from "react";
import {Layout} from '../components'
import { Route, Routes } from "react-router-dom";
import {authRoutes, privateRoutes} from './index'
import { useSelector } from "react-redux";
import { get } from "lodash";

const appRoutes = (routes) =>{
    return routes.map((route, i)=>(
        <React.Fragment key={i}>
            <Route
                path={route.path}
                index={route.index}
                element={<Suspense fallback='LOADING...'>{route.element}</Suspense>}
            />
            {route.children && appRoutes(route.children)}
        </React.Fragment>
    ))
}

const routesWraper = () => {
    // const {isAuthenticated} = useSelector(state => get(state, 'auth'))
    const isAuthenticated = true
    return (
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Layout />}>
            {appRoutes(privateRoutes)}
          </Route>
          {appRoutes(authRoutes)}
      </Routes>
    );
}

export default routesWraper