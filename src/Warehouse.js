import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

const Warehouse = () => {
  const [loading, setLoading] = useState(true);
  const [warehouses, setWarehouses] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`https://api.belajartableau.com/api/WarehouseReps`);
    setWarehouses(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RenderDetail = (el) => {
    return (
      <Link to={`/detail/${el.row.WarehouseID}`} style={{ color: "blue", textDecoration: "none" }}>
        Warehouse Detail
      </Link>
    );
  };

  const columns = [
    {
      field: "WarehouseID",
      flex: 1,
      headerName: "WarehouseID",
    },
    {
      field: "Branch",
      flex: 1,
      headerName: "Branch",
    },
    {
      field: "Description",
      flex: 1,
      headerName: "Description",
    },
    {
      field: "LastModifiedDateTime",
      flex: 1,
      headerName: "LastModifiedDateTime",
    },
    {
      field: "LastSync",
      flex: 1,
      headerName: "LastSync",
    },
    {
      field: "Active",
      flex: 1,
      headerName: "Active",
    },
    {
      field: "Actions",
      flex: 1,
      headerName: "Actions",
      renderCell: RenderDetail,
    },
  ];
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={warehouses} columns={columns} getRowId={(row) => row.WarehouseID} loading={loading} />
    </div>
  );
};

export default Warehouse;
