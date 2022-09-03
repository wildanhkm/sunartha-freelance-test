import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { useHistory } from "react-router-dom";
import axios from "axios";

function App() {
  // const history = useHistory()
  const [warehouses, setWarehouses] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`https://api.belajartableau.com/api/WarehouseReps`);
    setWarehouses(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RenderBtnDetail = (el) => {
    return (
      <button
        onClick={(evt) => {
          evt.stopPropagation();
          // history.push("Detail")
          console.log(el.row);
        }}
      >
        Click
      </button>
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
      renderCell: RenderBtnDetail,
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={warehouses} columns={columns} getRowId={(row) => row.WarehouseID} />
    </div>
  );
}

export default App;
