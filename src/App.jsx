import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
// import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import SignIn from "./pages/SignIn/SignIn";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { createContext, Suspense } from "react";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import ManagerUser from "./templates/AdminTemplate/ManagerUser/ManagerUser";
// import ManagerJob from "./templates/AdminTemplate/ManagerJob/ManagerJob";
import ManagerComment from "./templates/AdminTemplate/ManagerComment/ManagerComment";
import SignUp from "./pages/SignUp/SignUp";
import SearchResults from "./pages/SearchResults/SearchResults";
import DetailTemplate from "./pages/Details/DetailTemplate";

export const NotificationContext = createContext();

const HomeTemplate = React.lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);

const ManagerJob = React.lazy(() =>
  import("./templates/AdminTemplate/ManagerJob/ManagerJob")
);

const arrRoutes = [
  {
    path: pathDefault.homePage,
    element: <HomeTemplate />,
  },

  {
    path: pathDefault.signIn,
    element: <SignIn />,
  },
  {
    path: pathDefault.signUp,
    element: <SignUp />,
  },

  {
    path: pathDefault.SearchResults,
    element: <SearchResults />,
  },
  {
    path: pathDefault.Details,
    element: <DetailTemplate />,
  },

  {
    path: pathDefault.admin,
    element: <AdminTemplate />,
    children: [
      {
        index: true,
        element: <ManagerUser />,
      },
      {
        path: "manager-user",
        element: <ManagerUser />,
      },
      {
        path: "manager-job",
        element: (
          <Suspense fallback={<div>hehe</div>}>
            <ManagerJob />
          </Suspense>
        ),
      },
      {
        path: "manager-comment",
        element: <ManagerComment />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(arrRoutes);

  const handleNotification = (type, content, timeClose = 3000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <NotificationContext.Provider value={handleNotification}>
        {routes}
        <ToastContainer />
      </NotificationContext.Provider>
    </>
  );
}

export default App;
