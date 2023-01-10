import {
    TeamOutlined,
    HomeOutlined,
    CalendarOutlined,
    LogoutOutlined,
    UserAddOutlined,
    SettingOutlined,
    UserOutlined,
    CreditCardOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../redux/slice/AuthSlice';
const { Header, Content, Footer, Sider } = Layout;

const LayoutAdmin = (props) => {
    const dispatch = useDispatch()

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };

    }

    const handleLogout = () => {
        console.log("clicked");
        dispatch(logout())
    }



    const items = [
        getItem('Dashboard', '/dashboard', <HomeOutlined />),
        getItem('Schedule', '/schedule', <CalendarOutlined />),
        getItem('Blog Post', '/blogpost', <CreditCardOutlined />),
        getItem('Add Blog Post', '/addblog', <UserAddOutlined />),
        getItem('Employee', '/employee', <UserOutlined />),
        getItem('Employee Adhoc', '/employeeadhoc', <TeamOutlined />),
        getItem('Add Data', '/adddata', <UserAddOutlined />),
        getItem('Print Adhoc', '/print', <FileTextOutlined />),
        getItem('Edit Profile', '/editProfile', <SettingOutlined />),
        getItem('Logout', '/', <LogoutOutlined />),
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
                        <Menu.Item key={item.label} icon={item.icon} onClick={item.label === "Logout" && handleLogout}>
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
                    KPU Kota Batu ©2022
                </Footer>
            </Layout>
        </Layout>
    );
}

export default LayoutAdmin;
