import { BackTop } from 'antd';
import React from 'react';
import {
    VerticalAlignTopOutlined
} from '@ant-design/icons';
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 5,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

const Backtop = () => (
    <div
        style={{
            padding: 8,
        }}
    >
        <BackTop>
            <div style={style}><VerticalAlignTopOutlined /></div>
        </BackTop>
    </div>
);

export default Backtop;