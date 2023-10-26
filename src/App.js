import "./App.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import MainView from "./programs/MainView";
import MainViewB from "./programs/MainViewB";
import CalcViewA from "./calc/calcA/CalcViewA";
import CalcViewB from "./calc/calcB/CalcViewB";
import AdmissionVersion1 from "./Addmissions/Pages/AdmissionVersion1";
import AdmissionVersion2 from "./Addmissions/Pages/AdmissionVersion2";
import AdmissionVersion3 from "./Addmissions/Pages/AdmissionVersion3";
import AdmissionVersion4 from "./Addmissions/Pages/AdmissionVersion4";
import AdmissionVersion5 from "./Addmissions/Pages/AdmissionVersion5";
import AdmissionMobileVersion1 from "./Addmissions/Pages/AdmissionMobileVersion1";
import Versions from './programs/Versions'
import { StrictMode } from "react";
import { version } from "react-dom";

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    // element: <Versions />,
    children: [
      {
        path: "/",
        element: <Versions />
      },
      {
        path: "/versionA1",
        element: <MainView fview="f1" />
      },
      {
        path: "/versionA2",
        element: <MainView fview="f2" />
      },
      {
        path: "/versionA3",
        element: <MainView fview="f3" />
      },
      {
        path: "/versionB",
        element: <MainViewB />
      },
      {
        path: "/calcA",
        element: <CalcViewA />
      }, {
        path: "/calcB",
        element: <CalcViewB />
      }, {
        path: "addmissionsv1",
        element: <AdmissionVersion1 />
      }, {
        path: "addmissionsv2",
        element: <AdmissionVersion2 />
      }, {
        path: "addmissionsv3",
        element: <AdmissionVersion3 />
      }, {
        path: "addmissionsv4",
        element: <AdmissionVersion4 />
      }, {
        path: "addmissionsv5d",
        element: <AdmissionVersion5 />
      }, {
        path: "addmissionsmobilev1",
        element: <AdmissionMobileVersion1 />
      }

    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
