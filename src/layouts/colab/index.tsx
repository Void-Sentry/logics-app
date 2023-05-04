import React, { useCallback } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes";
import { rootState } from "store/types/store/state/root";
import { useSelector } from "react-redux";

export const Colab = (props: { [x: string]: any }) => {
  const { ...rest } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const { auth: { item: { token } } } = useSelector((state: rootState) => state);
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  const getRoutes = (routes: RoutesType[]): Array<JSX.Element> => (
    routes.map((prop, key) =>
      prop.layout === "/colab" && (
        <Route path={`/${prop.path}`} element={prop.component} key={key} />
      )
    )
  );

  const getActiveRoute = useCallback((routes: RoutesType[]): void => {
    if (token === '' ) navigate('/auth/sign-in');

    routes.forEach(item => { 
      if (window.location.href.indexOf(`${item.layout}/${item.path}`) !== -1)
        setCurrentRoute(item.name);
    });
  }, [navigate, token]);

  const getActiveNavbar = (routes: RoutesType[]): string | boolean => {
    const activeNavbar = false;

    routes.forEach(route => {
      if (window.location.href.indexOf(route.layout + route.path) !== -1)
        return route.secondary;
    });

    return activeNavbar;
  };

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname, token, getActiveRoute]);

  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/colab/entregas" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
