import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';


import Layout from '../../common/components/Layout';
import OrderList from './OrderList';

const breadcrumb = (props) => (
    <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>订单列表</Breadcrumb.Item>
    </Breadcrumb>
    );

export default class ListLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <Layout {...this.props}
                    header={'列表'}
                    breadcrumb={breadcrumb}
                    content={OrderList}/>
        );
    }
}