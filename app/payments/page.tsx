import React from "react";
import { columns } from "./column";
import { DataTable } from "./data-table";
import { getData } from "./data";


const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="p-4">
      <div className="mb-8 px-4 bg-secondary rounded">
        <h1 className="font-semibold py-2">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
      
    </div>
  );
};

export default PaymentsPage;
