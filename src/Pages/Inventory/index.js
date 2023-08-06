import {  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";


function Inventory() {

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {

    fetch('inventory.json')
    .then(res => res.json())
    .then(data => setDataSource(data))
    }, []);


  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        
        columns={[
 
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (di) => <span>${di}</span>,
           
          },
          {
            title: "Rating",
            dataIndex: "rating",
           
           
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Inventory;
