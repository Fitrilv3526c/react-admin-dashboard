import { Column } from "react-table";
import AdminSideBar from "../components/AdminSideBar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Abdullah",
    amount: 4500,
    discount: 500,
    quantity: 2,
    status: <span className="purple">Delveried</span>,
    action: <Link to="/admin/transaction/lasjfaei">Manage</Link>,
  },
  {
    user: "Junaid",
    amount: 4500,
    discount: 300,
    quantity: 4,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/lasjfaei">Manage</Link>,
  },
  {
    user: "Tabraiz",
    amount: 7000,
    discount: 850,
    quantity: 5,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/lasjfaei">Manage</Link>,
  },
];

const Transactions = () => {
  const [data] = useState<DataType[]>(arr);

  const table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "DashboardProductBox",
      "Transactions",
      true
    ),
    []
  );

  return (
    <div className="adminConatiner">
      {/* Side Bar */}
      <AdminSideBar />
      {/* Main */}
      <main>{table()}</main>
    </div>
  );
};

export default Transactions;
