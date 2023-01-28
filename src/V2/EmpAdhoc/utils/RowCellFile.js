import { Row } from "antd";
import {
    FileImageOutlined,
    FilePdfOutlined,
} from "@ant-design/icons";

export const RowCellFile = (props) => {
    const { typeFile } = props
    switch (typeFile) {
        case 'pdf':
            return <Row justify="center"><FilePdfOutlined style={{ fontSize: "32px" }} /></Row>
        case 'image':
            return <Row justify="center"><FileImageOutlined style={{ fontSize: "32px" }} /></Row>
        default:
            break;
    }
}