import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin';


const BlogPost = () => {
    const breadcumb = [
        {
            name: 'Blog Post',
            link: '/blogpost',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <div>
                BlogPost
            </div>
        </LayoutAdmin>

    )

}
export default BlogPost;