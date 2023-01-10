import React from 'react'
import CreateFormBlog from '../components/admin/BlogPost/CreateFormBlog';
import LayoutAdmin from '../components/admin/LayoutAdmin';

const addBlogPost = () => {
    const breadcumb = [
        {
            name: "Add Blog Post",
            link: "/addblog",
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <CreateFormBlog />
        </LayoutAdmin>
    )
}
export default addBlogPost