import React from 'react';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableBlogPost from '../components/admin/TableBlogPost';

import CreateFormBlog from '../components/admin/CreateFormBlog';


const BlogPost = () => {

    const breadcumb = [
        {
            name: 'Blog Post',
            link: '/blogpost',
        },
    ];



    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <CreateFormBlog />
            <TableBlogPost />
        </LayoutAdmin>

    )

}
export default BlogPost;