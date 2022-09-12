import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableBlogPost from '../components/admin/TableBlogPost';


const BlogPost = () => {
    const breadcumb = [
        {
            name: 'Blog Post',
            link: '/blogpost',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <TableBlogPost />
        </LayoutAdmin>

    )

}
export default BlogPost;