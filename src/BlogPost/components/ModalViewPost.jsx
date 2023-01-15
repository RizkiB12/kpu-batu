import { Col, Divider, Image, Modal, Row, Typography } from 'antd'
import React from 'react'
const { Title, Text } = Typography

export default function ModalViewPost(props) {
    const { isOpenModal, setIsOpenModal, eachPost } = props
    console.log(eachPost)
    return (
        <Modal
            visible={isOpenModal}
            width={1000}
            onCancel={() => setIsOpenModal(false)}
            footer={false}
        >
            <Divider />
            <Row>
                <Col span={24} style={{ overflow: 'hidden' }}>
                    <Title level={3}>{eachPost.title}</Title>
                    <Image
                        preview={false}
                        style={{
                            maxWidth: '100%',
                            width: '1000px',
                            height: "600px",
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                        src={eachPost.thumbnail_img}
                        alt="Thumbnail Post"
                    />
                    <Divider />
                    <Text>
                        {eachPost.description}
                    </Text>
                </Col>
            </Row>
        </Modal>
    )
}
