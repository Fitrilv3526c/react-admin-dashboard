import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));
const Bar = lazy(() => import("./pages/charts/Bar"));
const Pie = lazy(() => import("./pages/charts/Pie"));
const Line = lazy(() => import("./pages/charts/Line"));
const StopWatch = lazy(() => import("./pages/apps/StopWatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const ManageTransactions = lazy(
  () => import("./pages/management/ManageTransactions")
);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/transactions" element={<Transactions />} />
            <Route path="/admin/customers" element={<Customers />} />

            {/* Charts */}
            <Route path="/admin/charts/bar" element={<Bar />} />
            <Route path="/admin/charts/pie" element={<Pie />} />
            <Route path="/admin/charts/line" element={<Line />} />

            {/* Apps */}
            <Route path="/admin/apps/stopwatch" element={<StopWatch />} />
            <Route path="/admin/apps/coupon" element={<Coupon />} />
            <Route path="/admin/apps/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route
              path="/admin/transaction/:id"
              element={<ManageTransactions />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
