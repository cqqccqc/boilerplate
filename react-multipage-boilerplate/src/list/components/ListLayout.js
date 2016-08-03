import React, { Component } from 'react';
import { Breadcrumb } from 'antd';


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

    componentWillMount() {
        console.log(this.props);
        this.props.fetchOrder(1);
    }

    render() {
        return (
            <Layout {...this.props}
                    header={''}
                    breadcrumb={breadcrumb}
                    content={OrderList} />
        );
    }
}