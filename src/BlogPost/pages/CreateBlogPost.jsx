import { Form } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LayoutAdmin from "../../components/admin/LayoutAdmin"
import FormBlogPost from "../components/FormBlogPost"

const CreateBlogPost = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [fileList, setFileList] = useState([])

    const breadcumb = [
        {
            name: "Create Blog Post",
            link: "/blogpost/create",
        },
    ]

    const onChangeFile = ({ fileList: newFileList }) => {
        console.log({ fileList, newFileList })
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

    console.log(form.getFieldsValue())

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <FormBlogPost
                form={form}
                fileList={fileList}
                onChangeFile={onChangeFile}
                onRemoveFile={onRemoveFile}
                onFinish={(values) => console.log(values)}
                navigate={navigate}
            />
        </LayoutAdmin>
    )
}

export default CreateBlogPost