import { Image, Row } from "antd";
import { RowCellFile } from "./RowCellFile";
import moment from "moment";
import ActionEmpAdhoc from "../components/ActionEmpAdhoc";

export const ColumnEmpAdhoc = ({ handleDelete, authUser, setModalCell, setDataCell, handleOpenEditing }) => [
    {
        key: "user.name",
        title: "Name",
        render: (item) => item.user.name,
        sorter: (a, b) => a.user_id > b.user_id,
        sortDirections: ["descend"],
        fixed: "left",
        width: 100,
    },
    {
        key: "foto",
        title: "Foto",
        width: 150,
        onCell: (record, rowIndex) => ({ onClick: (e) => { setModalCell(true); setDataCell({ fileSrc: record.foto, typeFile: 'image' }); } }),
        render: (item, record) => (<Row justify="center"><Image preview={false} src={item?.foto || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="Foto Employee Adhoc" /></Row>)
    },
    {
        key: "dob",
        title: "Tanggal Lahir",
        width: 200,
        render: (item) => moment(item.dob).format("Do MMMM YYYY"),
    },
    {
        key: "dop",
        title: "Tempat",
        dataIndex: "dop",
        width: 150,
    },
    {
        key: "alamat",
        title: "Alamat",
        dataIndex: "alamat",
        width: 150,
    },
    {
        key: "no_hp",
        title: "Nomer HP",
        dataIndex: "no_hp",
        width: 150,
    },
    {
        key: "kes",
        title: "BPJS Kesehatan",
        dataIndex: "kes",
        width: 150,
    },
    {
        key: "ket",
        title: "BPJS Ketenagakerjaan",
        dataIndex: "ket",
        width: 150,
    },
    {
        key: "npwp",
        title: "NPWP",
        dataIndex: "npwp",
        width: 150,
    },
    {
        key: "agama",
        title: "Agama",
        dataIndex: "agama",
        width: 150,
    },
    {
        key: "pendidikan_terakhir",
        title: "Pendidikan",
        dataIndex: "pendidikan_terakhir",
        width: 150,
    },
    {
        key: "ijazah",
        title: "Ijazah",
        width: 150,
        onCell: (record, rowIndex) => ({ onClick: (e) => { setModalCell(true); setDataCell({ fileSrc: record.ijazah, typeFile: 'pdf' }); } }),
        render: (item, record) => (item.ijazah !== null ? RowCellFile({ typeFile: 'pdf' }) : null),
    },
    {
        key: "ktp",
        title: "KTP",
        width: 150,
        onCell: (record, rowIndex) => ({ onClick: (e) => { setModalCell(true); setDataCell({ fileSrc: record.ktp, typeFile: 'pdf' }); } }),
        render: (item, record) => (item.ktp !== null ? RowCellFile({ typeFile: 'pdf' }) : null),
    },
    {
        key: "action",
        title: authUser?.role === "admin" ? "Actions" : "",
        width: authUser?.role === "admin" ? 150 : 0,
        fixed: "right",
        render: (record) => (authUser?.role === "admin" && <ActionEmpAdhoc handleOpenEditing={handleOpenEditing} setDataCell={setDataCell} handleDelete={handleDelete} record={record} />)
    },
];