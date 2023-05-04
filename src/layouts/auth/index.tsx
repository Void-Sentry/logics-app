import Footer from "components/footer/FooterAuthDefault";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import routes from "routes";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import { useSelector } from "react-redux";
import { rootState } from "store/types/store/state/root";
import { useEffect } from "react";

export const Auth = () => {
  const { token, user } = useSelector((state: rootState) => state.auth.item);
  const navigate = useNavigate();
  const getRoutes = (routes: RoutesType[]): Array<JSX.Element> => (
    routes.map((prop, key) =>
      prop.layout === "/auth" && <Route path={`/${prop.path}`} element={prop.component} key={key} />
    )
  );

  useEffect(() => {
    if (user.tipo_usuario.descricao.includes('admin')) navigate('/admin/dashboard');
    else if (user.tipo_usuario.descricao.includes('colab')) navigate('/colab/entregas');
  }, [navigate, user, token]);

  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <FixedPlugin />
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/auth/sign-in" replace />}
                  />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
