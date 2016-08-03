import React, { Component } from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';

require('./Layout.css');

const SubMenu = Menu.SubMenu;

export default class Layout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="ant-layout-aside">
                    <aside className="ant-layout-sider">
                        <div className="ant-layout-logo"></div>
                        <Menu mode="inline" theme="dark"
                            defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                            <SubMenu key="sub1" title={<span><Icon type="user" />订单</span>}>
                                <Menu.Item key="1">列表</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />酒店</span>}>
                                <Menu.Item key="2">新增</Menu.Item>
                                <Menu.Item key="3">编辑</Menu.Item>
                                <Menu.Item key="4">房型</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />活动</span>}>
                                <Menu.Item key="5">关联</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </aside>
                    <div className="ant-layout-main">
                        <div className="ant-layout-header">
                            {this.props.header}
                        </div>
                        <div className="ant-layout-breadcrumb">
                            {this.props.breadcrumb ? <this.props.breadcrumb {...this.props} /> : null }
                        </div>
                        <div className="ant-layout-container">
                            <div className="ant-layout-content">
                                <div style={{ height: 590 }}>
                                    {this.props.content ? <this.props.content {...this.props} /> : null }
                                </div>
                            </div>
                        </div>
                        <div className="ant-layout-footer">
                            REACT TEST
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}