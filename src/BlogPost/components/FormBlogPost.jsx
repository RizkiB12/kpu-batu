import { Button, Col, Form, Input, Row, Typography } from "antd"
import { InboxOutlined } from "@ant-design/icons"
import Dragger from "antd/lib/upload/Dragger"
import { dummyRequest } from "../../helpers/dummyRequest"
import { useSelector } from "react-redux"
import MyCKEditor from "../../components/ckeditor5"
const { Text } = Typography

const FormBlogPost = (props) => {
    const { navigate, form, onFinish, fileList, onChangeFile, onRemoveFile, fieldContent, setFieldContent, eachPost } = props
    const { authUser } = useSelector(state => state.authUser)

    return (
        <Form
            form={form}
            labelCol={{ span: '24' }}
            wrapperCol={{ xs: { span: '24' }, lg: { span: 16 } }}
            onFinish={onFinish}
        >
            <Form.Item hidden={true} nanme="author_id" initialValue={authUser?.id} />

            <Form.Item
                label="Judul Post"
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Judul berita harus diisi!',
                    },
                ]}
                initialValue={eachPost?.title}
            >
                <Input placeholder="Masukkan judul post" />
            </Form.Item>

            <Form.Item
                label="Image Thumbnail Post"
                name="thumbnail_img"
                rules={[
                    {
                        required: true,
                        message: 'Thumbnail post harus diisi!',
                    },
                ]}
            >
                <Dragger
                    multiple={false}
                    style={{ backgroundColor: 'white' }}
                    maxCount={1}
                    listType="picture"
                    fileList={fileList}
                    onChange={onChangeFile}
                    onRemoveFile={onRemoveFile}
                    customRequest={dummyRequest}
                    accept={['image/jpeg', 'image/jpg', 'image/png']}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Upload gambar atau drag pada kolom</p>
                    <p className="ant-upload-hint">
                        Thumbnail untuk poster dari berita atau kaegiatan
                    </p>
                </Dragger>

                <Row style={{ marginTop: '10px' }}>
                    <Text type="secondary">Maksimal 1mb, hanya file berformat .jpg, .jpeg, .png</Text>
                </Row>
            </Form.Item>

            <Form.Item
                label="Deskripsi"
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Deskripsi berita harus diisi!',
                    },
                ]}
                initialValue={fieldContent}
            >
                <MyCKEditor
                    initialValue={fieldContent}
                    onChange={setFieldContent}
                />
            </Form.Item>

            <Row>
                <Col span={24} style={{ padding: '20px 20px 20px 20px' }}>
                    <Col xs={24} lg={16}>
                        <Row justify="end" style={{ gap: '10px', marginRight: '-10px' }}>
                            <Button onClick={() => navigate(-1)}>Cancel</Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Submit</Button>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Form>
    )
}

export default FormBlogPost