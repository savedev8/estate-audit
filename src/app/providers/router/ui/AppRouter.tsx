import { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
// import { PageLoader } from '@/widgets/PageLoader';
// import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';
// import { AppRoutesProps } from '@/shared/types/router';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={'...Loading'}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    // route.authOnly ? (
                    //     <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    // ) : (
                        element
                    // )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
