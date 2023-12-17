export default function metaMiddleware (route) {
    const {title} = route.meta;

    if (title) {
        document.title = title
    }
}
