import {
    TeamOutlined,
    HomeOutlined,
    LogoutOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const LayoutAdmin = (props) => {
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem('Dashboard', '/dashboard', <HomeOutlined />),
        getItem('Employees', '/employees', <TeamOutlined />),
        getItem('Add Data', '/adddata', <UserAddOutlined />),
        getItem('Logout', '/login', <LogoutOutlined />),
    ];

    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark"
                    defaultSelectedKeys={useLocation().pathname}
                    mode="inline">
                    {items.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.key}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >

                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        {
                            props.breadcumb !== [''] && props.breadcumb.map((item, index) => {
                                return (
                                    <Breadcrumb.Item key={index}>
                                        {item.name}
                                    </Breadcrumb.Item>
                                )
                            })
                        }
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {props.children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default LayoutAdmin;
