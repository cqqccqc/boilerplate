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
        title: '预订人',
        dataIndex: 'bookingPerson',
        key: 'bookingPerson',
        render: (text) => <a href="#">{text}</a>,
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text) => <a href="#">{text}</a>,
    }
];

const pagination = {
    total: 100,
    showSizeChanger: true,
    onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
    },
    onChange(current) {
        console.log('Current: ', current);
    },
};

export default class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    mapPropToDataSource() {
        return this.props.orderList.map((item, index) => {
            let key = item.orderNo;
            return Object.assign({}, item, {
                key: key
            })
        });
    }

    render() {
        return (
            <div>
                <Table columns={columns} 
                       dataSource={this.mapPropToDataSource() }
                       pagination={pagination} />
            </div>
        );
    }
}