import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { AppMenu } from "./AppMenu/AppMenu";
import { Loader } from "./Loader";

export const Layout = () => {
    return <>
        <AppMenu />
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </>
}