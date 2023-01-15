import { Form } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LayoutAdmin from "../../components/admin/LayoutAdmin"
import FormBlogPost from "../components/FormBlogPost"

const CreateBlogPost = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [fileList, setFileList] = useState([])
    const [fieldContent, setFieldContent] = useState(null)

    const breadcumb = [
        {
            name: "Create Blog Post",
            link: "/blogpost/create",
        },
    ]

    const onChangeFile = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        setTimeout(() => {
            form.setFields([{ name: 'thumbnail_img', value: newFileList[0].originFileObj }])
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
        if (values.thumbnail_img) {
            formData.append('thumbnail_img', values.thumbnail_img)
        }
        if (fieldContent.length > 0) {
            formData.append('description', fieldContent)
        }
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
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
                fieldContent={fieldContent}
                setFieldContent={setFieldContent}
            />
        </LayoutAdmin>
    )
}

export default CreateBlogPost