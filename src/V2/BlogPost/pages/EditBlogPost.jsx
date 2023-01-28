import { Form, message } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import LayoutAdmin from "../../../components/admin/LayoutAdmin"
import FormBlogPost from "../components/FormBlogPost"

const EditBlogPost = () => {
    const { authUser } = useSelector(state => state.authUser)
    const navigate = useNavigate()
    const { idBlogPost } = useParams()
    const { state } = useLocation()
    const [form] = Form.useForm()
    const [fileList, setFileList] = useState([{ url: state?.thumbnail_img }])
    const [fieldContent, setFieldContent] = useState(state?.description)
    const [loadingSubmit, setLoadingSubmit] = useState(false)

    const breadcumb = [
        {
            name: "Edit Blog Post V2",
            link: `/v2/addblog/edit/${idBlogPost}`,
        },
    ];

    useEffect(() => {
        if (state === null) {
            navigate('/v2/blogpost')
        }
    })

    const handleUpdateBlogPost = (values) => {
        const formData = new FormData()
        if (fileList[0]?.originFileObj instanceof File) {
            formData.append('thumbnail_img', fileList[0].originFileObj)
        }
        formData.append('id', values.id)
        formData.append('title', values.title)
        formData.append('description', fieldContent)
        formData.append('author_id', values.author_id)
        setLoadingSubmit(true)
        const loading = message.loading('Loading...')
        axios.post(`${process.env.REACT_APP_API_URL}news/update`, formData, {
            headers: {
                Authorization: 'Bearer ' + authUser.access_token
            }
        }).then(res => {
            message.success('Sukses mengubah blog post baru!')
            navigate('/blogpost')
        }).catch(err => {
            message.error(err.message)
        }).finally(() => {
            setLoadingSubmit(false)
            loading()
        })
    }

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

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <FormBlogPost
                eachPost={state}
                form={form}
                fileList={fileList}
                loadingSubmit={loadingSubmit}
                onChangeFile={onChangeFile}
                onRemoveFile={onRemoveFile}
                fieldContent={fieldContent}
                setFieldContent={setFieldContent}
                onFinish={handleUpdateBlogPost}
                navigate={navigate}
            />
        </LayoutAdmin>
    )
}

export default EditBlogPost