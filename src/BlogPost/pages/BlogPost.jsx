import { Button, Divider, Table } from 'antd'
import { ColumnBlogPost } from '../utils/ColumnBlogPost';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import LayoutAdmin from '../../components/admin/LayoutAdmin'
import ModalViewPost from '../components/ModalViewPost';
import { useNavigate } from "react-router-dom"

const BlogPost = () => {
    const { authUser } = useSelector(state => state.authUser)
    const navigate = useNavigate()
    const [blogPost, setBlogPost] = useState([])
    const [eachPost, setEachPost] = useState({})
    const [page, setPage] = useState(1)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const breadcumb = [
        {
            name: "Blog Post",
            link: "/blogpost",
        },
    ];
    const propsColumn = {
        navigate
    }

    useEffect(() => {
        const fetchBlog = () => {
            setLoading(true)
            axios.get(`${process.env.REACT_APP_API_URL}news?limit=10&page=${page}`, {
                headers: { 'Authorization': 'Bearer ' + authUser.access_token }
            })
                .then((res) => {
                    setBlogPost(res.data)
                    setLoading(false)
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
            <Button type='primary' onClick={() => navigate('create')}>Buat Berita</Button>
            <Divider />
            <Table
                loading={loading}
                onRow={(record, idx) => ({ onClick: e => onRowClick(e, record, idx) })}
                pagination={{
                    position: 'bottomRight',
                    current: page,
                    pageSize: 10,
                    total: blogPost?.meta?.total,
                    onChange: (e) => setPage(e)
                }}
                dataSource={blogPost.data}
                columns={ColumnBlogPost(propsColumn)}
            />
            <ModalViewPost
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                eachPost={eachPost}
            />
        </LayoutAdmin>
    )
}
export default BlogPost