// 获取配置项
hexo.extend.helper.register("conf", cfg => {
    let conf = hexo.theme.config[cfg]
    if (hexo.config[cfg]) {
        conf = hexo.config[cfg]
    }
    return conf
})

// 搜索引擎
hexo.extend.helper.register("search_url_keyword", name => {
    switch (name) {
        case "baidu":
            return {url: "https://www.baidu.com/s?", keyword: "wd"};
        case "google":
            return {url: "https://www.google.com/search?", keyword: "q"};
        case "bing":
            return {url: "https://www.bing.com/search?", keyword: "q"};
        case "github":
            return {url: "https://github.com/search?", keyword: "q"};
        default:
            return {url: "https://github.com/search?", keyword: "q"};
    }
})

hexo.extend.generator.register('404', function (locals) {
    return {
        path: '404.html',
        data: {},
        layout: ['404', 'layout']
    };
});
hexo.extend.generator.register('tags', function (locals) {
    return {
        path: 'tags.html',
        data: {},
        layout: ['tags', 'layout']
    };
});

hexo.extend.generator.register('categories', function (locals) {
    return {
        path: 'categories.html',
        data: {},
        layout: ['categories', 'layout']
    };
});