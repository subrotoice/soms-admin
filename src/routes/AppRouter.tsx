import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LeaveApplication from "../pages/LeaveApplication";
import LeaveList from "../pages/LeaveList";
import TransferApproval from "../pages/TransferApproval";
import TransferOwn from "../pages/TransferOwn";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/transfer-own", element: <TransferOwn /> },
      { path: "/transfer-approval", element: <TransferApproval /> },
      { path: "/leave-list", element: <LeaveList /> },
      { path: "/leave-application", element: <LeaveApplication /> },
    ],
  },
]);

export default router;
