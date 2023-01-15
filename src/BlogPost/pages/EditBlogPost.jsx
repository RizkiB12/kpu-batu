import { Form } from "antd"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import LayoutAdmin from "../../components/admin/LayoutAdmin"
import FormBlogPost from "../components/FormBlogPost"

const EditBlogPost = () => {
    const navigate = useNavigate()
    const { idBlogPost } = useParams()
    const { state } = useLocation()
    const [form] = Form.useForm()
    const [fileList, setFileList] = useState([{ url: state?.thumbnail_img }])
    const [fieldContent, setFieldContent] = useState(state?.description)

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
        console.log(values)
    }

    const onChangeFile = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        setTimeout(() => {
            form.setFields([{ name: 'thumbnail_img', value: newFileList[0]?.originFileObj }])
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