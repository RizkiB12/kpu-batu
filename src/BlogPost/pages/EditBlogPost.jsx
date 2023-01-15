import { useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import LayoutAdmin from "../../components/admin/LayoutAdmin"

const EditBlogPost = () => {
    const navigate = useNavigate()
    const { idBlogPost } = useParams()
    const { state } = useLocation()

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

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            test
        </LayoutAdmin>
    )
}

export default EditBlogPost