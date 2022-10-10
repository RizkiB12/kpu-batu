import React from 'react';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableBlogPost from '../components/admin/TableBlogPost';
import CreateFormBlog from '../components/admin/CreateFormBlog';
import { useSelector } from 'react-redux';



const BlogPost = () => {
    const { authUser } = useSelector(state => state.authUser)

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
                <CreateFormBlog />
            }
            <TableBlogPost />
        </LayoutAdmin>

    )

}
export default BlogPost;