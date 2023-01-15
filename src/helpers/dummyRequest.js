export const dummyRequest = async ({ file, onSuccess }) => {
    setTimeout(() => {
        onSuccess('ok')
    }, 100);
}