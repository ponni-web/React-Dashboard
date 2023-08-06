import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";


function Customers() {
  
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
   
    fetch('users.json')
    .then(res => res.json())
    .then(data => setDataSource(data))
}, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        
        columns={[

          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
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
export default Customers;
