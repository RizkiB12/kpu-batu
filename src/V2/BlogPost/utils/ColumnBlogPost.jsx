import { Image, Row } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import moment from 'moment'

const ColumnBlogPost = propsColumn => [
    {
        title: 'Image Thumbnail',
        key: 'thumbnail_img',
        render: item =>
            <>
                <Image src={item.thumbnail_img} alt="Img Post" />
            </>,
        width: 100,
    },
    {
        title: 'Judul Post',
        key: 'title',
        dataIndex: 'title',
        width: 150,
    },
    {
        title: 'Penulis',
        key: 'author',
        render: item => item.user.name,
        width: 100,
    },
    {
        title: 'Terakhir Diubah',
        key: 'updatedAt',
        render: item => moment(item.updatedAt).startOf('minute').fromNow(),
        width: 150,
    },
    {
        title: 'Aksi',
        key: 'action',
        fixed: 'right',
        width: 50,
        render: (record) => {
            return (
                <Row justify="space-evenly">
                    <EditOutlined
                        style={{ color: "black", fontSize: "15px" }}
                        onClick={() => propsColumn.navigate(`edit/${record.id}`, { state: record })}
                    />
                    <DeleteOutlined
                        style={{ color: "red", marginLeft: 12 }}
                        onClick={() => propsColumn.handleDeleteBlogPost(record)}
                    />
                </Row>
            );
        },
    },
]

export { ColumnBlogPost }