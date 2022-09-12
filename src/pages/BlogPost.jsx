import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableBlogPost from '../components/admin/TableBlogPost';


const BlogPost = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        console.log("clicked");
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    console.log(isModalOpen);

    const breadcumb = [
        {
            name: 'Blog Post',
            link: '/blogpost',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" onOk={handleOk} onCancel={handleCancel} visible={isModalOpen}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <TableBlogPost />
        </LayoutAdmin>

    )

}
export default BlogPost;