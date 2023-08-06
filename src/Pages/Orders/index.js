import {  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";


function Orders() {
  
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch('orders.json')
    .then(res => res.json())
    .then(data => setDataSource(data))
    }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
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
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (di) => <span>${di}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
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
export default Orders;
