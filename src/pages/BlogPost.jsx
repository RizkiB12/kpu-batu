import React from 'react';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableBlogPost from '../components/admin/TableBlogPost';
import CreateFormBlog from '../components/admin/BlogPost/CreateFormBlog';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const BlogPost = () => {
    const { authUser } = useSelector(state => state.authUser)
    const navigate = useNavigate()

    const breadcumb = [
        {
            name: 'Blog Post',
            link: '/blogpost',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            {
                authUser.role === 'admin' &&
           
            <Button type="primary" onClick={() => navigate('/addblog')} style={{ marginBottom: 15 }}>Add Blog Post</Button>
        }
            <TableBlogPost />
        </LayoutAdmin>

    )

}
export default BlogPost;