import React, { useState } from 'react';
import "./AdminPage.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 const navigate = useNavigate()
  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
         <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          items={[
            {icon: UserOutlined, title: "List Product", url: "/admin"}, 
            {icon: VideoCameraOutlined, title: "Add Product", url : "/admin/add_product"}, 
            {icon: UploadOutlined, title: "List Categories",url : "/admin/list_categories"}, 
            {icon: UserOutlined, title: "Add Caregories", url : "/admin/list_customer"},
          ].map(
            (item, index) => ({
              key: String(index + 1),
              icon: React.createElement(item.icon),
              label: `${item.title}`,
              onClick: () => {
                navigate(`${item.url}`)
              }
            }),
          )}
        />
        
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
      
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
       
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;