import { Button, Divider, Table } from 'antd'
import { ColumnBlogPost } from '../utils/ColumnBlogPost';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import LayoutAdmin from '../../components/admin/LayoutAdmin'
import ModalViewPost from '../components/ModalViewPost';

const BlogPostV2 = () => {
    const { authUser } = useSelector(state => state.authUser)
    const [blogPost, setBlogPost] = useState([])
    const [eachPost, setEachPost] = useState({})
    const [page, setPage] = useState(1)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const breadcumb = [
        {
            name: "Add Blog Post V2",
            link: "/v2/addblog",
        },
    ];

    useEffect(() => {
        const fetchBlog = () => {
            axios.get(`${process.env.REACT_APP_API_URL}news?limit=10&page=${page}`, {
                headers: { 'Authorization': 'Bearer ' + authUser.access_token }
            })
                .then((res) => {
                    setBlogPost(res.data)
                })
        }
        fetchBlog();
    }, [authUser.access_token, page])

    const onRowClick = (e, record, idx) => {
        if (e.target.className === 'ant-table-cell ant-table-cell-row-hover') {
            setEachPost(record)
            setIsOpenModal(true)
        }
    }

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type='primary'>Buat Berita</Button>
            <Divider />
            <Table
                onRow={(record, idx) => ({ onClick: e => onRowClick(e, record, idx) })}
                pagination={{
                    position: 'bottomRight',
                    current: page,
                    pageSize: 10,
                    total: blogPost?.meta?.total,
                    onChange: (e) => setPage(e)
                }}
                dataSource={blogPost.data}
                columns={ColumnBlogPost}
            />
            <ModalViewPost
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                eachPost={eachPost}
            />
        </LayoutAdmin>
    )
}
export default BlogPostV2