import { lazy } from "react";
// import { Sales } from "../pages/Sales";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "styled-components";
// import { Invoices } from "./Invoices";
import { InvoiceDetails } from "./InvoiceDetails";
import { Layout } from "./Layout";
// import Customers from "../pages/Customers";
import CustomerDetails from "../pages/CustomerDetail";

const Sales = lazy(() => import("../pages/Sales"));
const Customers = lazy(() => import("../pages/Customers"));
const Invoices = lazy(() => import("./Invoices"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="sales" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
