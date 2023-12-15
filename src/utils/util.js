export const registerPlugins = (plugins) => {
    return {
        install(app) {
            plugins.forEach(plugin => {
                app.use(plugin)
            })
        }
    }
}