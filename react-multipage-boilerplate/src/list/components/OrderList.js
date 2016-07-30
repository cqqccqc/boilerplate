import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: '订单号',
        dataIndex: 'orderNo',
        key: 'orderNo',
        render: (text) => <a href="#">{text}</a>,
    },
    {
        title: '酒店',
        dataIndex: 'hotelName',
        key: 'hotelName',
        render: (text) => <a href="#">{text}</a>,
    },
    {
        title: '房型',
        dataIndex: 'roomType',
        key: 'roomType',
        render: (text) => <a href="#">{text}</a>,
    },
    {
        title: '手机号',
        dataIndex: 'cellPhone',
        key: 'cellPhone',
        render: (text) => <a href="#">{text}</a>,
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text) => <a href="#">{text}</a>,
    }
];

export default class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.props.list} />
            </div>
        );
    }
}