import Editor from "ckeditor5-custom-build"
import { CKEditor } from "@ckeditor/ckeditor5-react"

const MyCKEditor = (props) => {
    const { onChange, initialValue } = props
    return (
        <CKEditor
            editor={Editor}
            data={initialValue}
            onReady={editor => { }}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data)
            }}
            onBlur={(event, editor) => { }}
            onFocus={(event, editor) => { }}
        />
    )
}

export default MyCKEditor