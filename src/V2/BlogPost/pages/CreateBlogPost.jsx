import { Form, message } from "antd"
import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import LayoutAdmin from "../../components/admin/LayoutAdmin"
import FormBlogPost from "../components/FormBlogPost"

const CreateBlogPost = () => {
    const { authUser } = useSelector(state => state.authUser)
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [fileList, setFileList] = useState([])
    const [fieldContent, setFieldContent] = useState(null)
    const [loadingSubmit, setLoadingSubmit] = useState(false)

    const breadcumb = [
        {
            name: "Create Blog Post",
            link: "/blogpost/create",
        },
    ]

    const onChangeFile = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        setTimeout(() => {
            form.setFields([{ name: 'thumbnail_img', value: newFileList[0]?.originFileObj, errors: false }])
        }, 1000);
    }

    const onRemoveFile = () => {
        setFileList([])
        setTimeout(() => {
            form.setFields([{ name: 'thumbnail_img', value: null }])
        }, 1000);
    }

    const handleCreateBlogPost = (values) => {
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('author_id', values.author_id)
        if (values.thumbnail_img) {
            formData.append('thumbnail_img', values.thumbnail_img)
        }
        if (fieldContent.length > 0) {
            formData.append('description', fieldContent)
        }

        setLoadingSubmit(true)
        const loading = message.loading('Loading...')
        axios.post(`${process.env.REACT_APP_API_URL}news/create`, formData, {
            headers: {
                Authorization: 'Bearer ' + authUser.access_token
            }
        }).then(res => {
            message.success('Sukses membuat blog post baru!')
            navigate('/blogpost')
        }).catch(err => {
            message.error(err.message)
        }).finally(() => {
            setLoadingSubmit(false)
            loading()
        })
    }

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <FormBlogPost
                form={form}
                fileList={fileList}
                onChangeFile={onChangeFile}
                onRemoveFile={onRemoveFile}
                onFinish={handleCreateBlogPost}
                navigate={navigate}
                loadingSubmit={loadingSubmit}
                fieldContent={fieldContent}
                setFieldContent={setFieldContent}
            />
        </LayoutAdmin>
    )
}

export default CreateBlogPost