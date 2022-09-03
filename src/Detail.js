import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const getDetail = async (id) => {
    try {
      const { data } = await axios.get(`https://api.belajartableau.com/api/WarehouseReps/${id}`);
      setDetail([...detail, data]);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getDetail(id);
  }, []);

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
  ];

  return (
    <div>
      <div style={{ padding: "8px" }}>
        <Link to="/" style={{ color: "blue", textDecoration: "none" }}>
          ← Back to Warehouse List
        </Link>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={detail} columns={columns} getRowId={(row) => row.WarehouseID} loading={loading}/>
      </div>
    </div>
  );
};

export default Detail;
