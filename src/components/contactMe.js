import React from 'react'
import { Row, Col, Input } from 'antd';

export default function ContactMe() {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Input placeholder="Email"/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Input placeholder="Email"/>
            </Col>
    </Row>
    )
}
