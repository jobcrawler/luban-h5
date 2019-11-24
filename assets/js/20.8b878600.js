(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{271:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("blockquote",[s("p",[t._v("重要：关于此部分有疑惑，请在下面直接评论，或者到社区讨论")])]),t._v(" "),s("blockquote",[s("p",[t._v("欢迎大家到"),s("a",{attrs:{href:"https://support.qq.com/products/93432/",target:"_blank",rel:"noopener noreferrer"}},[t._v("鲁班H5-社区"),s("OutboundLink")],1),t._v(" 交流，在这里可以提问、反馈意见和建议，与作者直接互动")])]),t._v(" "),s("h1",{attrs:{id:"视频教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频教程"}},[t._v("#")]),t._v(" 视频教程")]),t._v(" "),s("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=76827615&cid=131403430&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}),t._v(" "),s("h2",{attrs:{id:"基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),s("blockquote",[s("p",[t._v("首先你需要大概了解下 Node.js 的相关生态、Node.js 的安装\n我们接下来会花一分钟介绍一下基础概念. 我们默认你知道 Linux 和 Git 的基本操作")])]),t._v(" "),s("h3",{attrs:{id:"node-js、npm、nvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js、npm、nvm"}},[t._v("#")]),t._v(" Node.js、npm、nvm")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Node.js")]),t._v(" \n服务器端的JavaScript 运行环境，你可以理解为和Python、Java等一样，它也是一门后端语言")]),t._v(" "),s("li",[s("code",[t._v("npm(or yarn)")]),t._v(" Node.js 的包版本工具")])]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("类似于 Python 的pip，或 Centos 的yum，或 Ubuntu 的 apt-get")]),t._v(" "),s("li",[t._v("你在python 中安装requrest 库，通常是通过 "),s("code",[t._v("pip install requests")]),t._v(" 来安装")]),t._v(" "),s("li",[t._v("在 Node.js 中，也是一样的，只是把 "),s("code",[t._v("pip")]),t._v(" 换成 "),s("code",[t._v("pip")]),t._v(" or "),s("code",[t._v("yarn")]),t._v(" 即可： "),s("code",[t._v("npm install requests")]),t._v("  or "),s("code",[t._v("yarn add requests")])])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("code",[t._v("nvm")]),t._v(" ：Node.js 版本工具")])]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("使用 nvm可以快速安装 Node 的某个版本，比如通过 "),s("code",[t._v("node -v")]),t._v(" 查看你的Node 当前版本。")]),t._v(" "),s("li",[t._v("假如这个版本(假设当前版本为 v.8.0.0)不符合要求，你可以通过 "),s("code",[t._v("nvm install v10.15.3")]),t._v(" 来安装 "),s("code",[t._v("v10.15.3")])])])]),t._v(" "),s("h3",{attrs:{id:"node、yarn、npm-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node、yarn、npm-安装"}},[t._v("#")]),t._v(" Node、Yarn、npm 安装")]),t._v(" "),s("ol",[s("li",[t._v("请参照 "),s("a",{attrs:{href:"https://strapi.io/documentation/3.0.0-beta.x/getting-started/install-requirements.html#installation-requirements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strapi 的 预安装文档指导"),s("OutboundLink")],1),t._v(" ，安装 Node、npm 和 Yarn")]),t._v(" "),s("li",[t._v("因为 yarn 的仓库源在海外，所以，请配置国内镜像源，提高速度")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" config get registry\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> https://registry.yarnpkg.com")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改成 taobao 的源：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> yarn config v0.15.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# -> success Set "registry" to "https://registry.npm.taobao.org".')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 看到 succes 表示安装完毕")]),t._v("\n")])])]),s("h2",{attrs:{id:"技术栈-当前"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术栈-当前"}},[t._v("#")]),t._v(" 技术栈(当前)")]),t._v(" "),s("ul",[s("li",[t._v("前端：Vue.js")]),t._v(" "),s("li",[t._v("后端：Strapi")]),t._v(" "),s("li",[t._v("存储：Sqlite")])]),t._v(" "),s("h1",{attrs:{id:"项目环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目环境搭建"}},[t._v("#")]),t._v(" 项目环境搭建")]),t._v(" "),s("ol",[s("li",[t._v("鲁班H5的后端接口，由 "),s("a",{attrs:{href:"https://github.com/strapi/strapi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strapi"),s("OutboundLink")],1),t._v(" 强力驱动")]),t._v(" "),s("li",[t._v("后端部分文档会尽量和 "),s("code",[t._v("[github-后端部分文档说明(project/back-end/h5-api/README.md)](https://github.com/ly525/luban-h5/blob/dev/back-end/h5-api/README.md)")]),t._v("保持同步")])]),t._v(" "),s("h2",{attrs:{id:"后端环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端环境搭建"}},[t._v("#")]),t._v(" 后端环境搭建")]),t._v(" "),s("h3",{attrs:{id:"_1-快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-快速上手"}},[t._v("#")]),t._v(" 1. 快速上手")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认当前目录为 luban 项目的根目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" back-end/h5-api\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 yarn 安装依赖，而非 yarn")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 原因参见：https://github.com/ly525/luban-h5/issues/92")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 补充说明: 如果需要在 vscode 中进行debug ，请使用 npm run localdev")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# #!en: default database is sqlite3(h5-api/.tmp/data.db)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# #!zh: 默认数据库是 sqlite3，位置在 h5-api/.tmp/data.db")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问 http://locahost:1337/admin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# visit http://locahost:1337/admin")]),t._v("\n\n请继续阅读，进行相关配置\n")])])]),s("h3",{attrs:{id:"_2-注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-注意事项"}},[t._v("#")]),t._v(" 2. 注意事项")]),t._v(" "),s("ol",[s("li",[t._v("本地开发，如果后端接口报错 403 Forbidden，请按照下图的操作，打开接口的访问权限接口："),s("code",[t._v("[Roles And Permission] -> [Public] - [Permissions]")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/65381949-32addd00-dd2e-11e9-967a-e313dc6fca89.png",alt:"1567438464273-e0892ee2-5dca-45ec-a528-8090d80b23bd"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/65381950-32addd00-dd2e-11e9-859a-dbec0941dc5a.png",alt:"1567438463824-d6b87f12-eecf-4ae2-aa9c-bb4c73c4127d"}})]),t._v(" "),s("h5",{attrs:{id:"上传封面图使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传封面图使用"}},[t._v("#")]),t._v(" 上传封面图使用")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/65381948-32154680-dd2e-11e9-95ea-589f808ce095.png",alt:"1567858269172-44561808-5d49-43b5-89c1-f4f876eeec24"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("如果后端没有安装 strapi-hook-ejs 或者 没有在 hook.json 中进行配置，会报错(如下)。解决方案：只要装了 ejs 插件并且正确配置即可")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("error TypeError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render is not a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("\n  at "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("previewOne")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("luban"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h5"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("back"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h5"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("work"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("controllers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"前端环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端环境搭建"}},[t._v("#")]),t._v(" 前端环境搭建")]),t._v(" "),s("p",[t._v("这部分会尽量和  "),s("code",[t._v("[project/front-end/h5/README.md](https://github.com/ly525/luban-h5/blob/dev/front-end/h5/README.md)")]),t._v(" 保持同步")]),t._v(" "),s("h3",{attrs:{id:"_1-快速上手-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-快速上手-2"}},[t._v("#")]),t._v(" 1. 快速上手")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认当前位置目录为 luban-h5 项目的根目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" front-end/h5\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install dependencies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" serve "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# develop")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更多命令")]),t._v("\n请参见 project/front-end/h5/package.json\n")])])]),s("h3",{attrs:{id:"_2-构建预览所需的渲染引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-构建预览所需的渲染引擎"}},[t._v("#")]),t._v(" 2. 构建预览所需的渲染引擎")]),t._v(" "),s("blockquote",[s("p",[t._v("关于此部分有疑惑，请直接评论")])]),t._v(" "),s("h4",{attrs:{id:"基本原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[t._v("#")]),t._v(" 基本原理")]),t._v(" "),s("p",[t._v("作品预览的基本原理参见 "),s("a",{attrs:{href:"https://github.com/ly525/luban-h5/blob/bd486ce16fc24bfd7030fc51857a579776e12e68/back-end/h5-api/api/work/controllers/Work.js#L12",target:"_blank",rel:"noopener noreferrer"}},[t._v("luban-h5/back-end/h5-api/api/work/controllers/Work.js/previewOne"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("previewOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" work "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" strapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'engine'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" work "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h4",{attrs:{id:"如何构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何构建"}},[t._v("#")]),t._v(" 如何构建")]),t._v(" "),s("ol",[s("li",[t._v("在"),s("code",[t._v("front-end/h5")]),t._v("目录下，运行："),s("code",[t._v("yarn engine:build")])]),t._v(" "),s("li",[t._v("构建完成之后,后端的"),s("code",[t._v("h5-api/public")]),t._v("里面会多一个文件夹 "),s("code",[t._v("engine-assets")])]),t._v(" "),s("li",[t._v("打开的预览窗口"),s("code",[t._v("preview.vue")]),t._v(", 里面的预览部分对应的其实是一个 iframe，可以看看对应的源码\n也就是说，这个预览其实依赖后端的渲染引擎，比如 ejs 或者 jade 这种模板引擎，所以参照这里："),s("code",[t._v("luban-h5/front-end/h5/vue.config.js")]),t._v(" "),s("code",[t._v("engineOutputDir")]),t._v(" 变量，preview engine 构建完成，会生成到后端的 "),s("code",[t._v("back-end/h5-api/public/engine-assets")]),t._v(" 目录")])]),t._v(" "),s("h3",{attrs:{id:"_3-前端组件说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-前端组件说明"}},[t._v("#")]),t._v(" 3. 前端组件说明")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("lbp-")]),t._v("\n全称为 "),s("code",[t._v("lu-ban-plugin:``鲁班H5的插件")]),t._v("，位置："),s("code",[t._v("front-end/h5/src/components/plugins")])])]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("欢迎大家到"),s("a",{attrs:{href:"https://support.qq.com/products/93432/",target:"_blank",rel:"noopener noreferrer"}},[t._v("鲁班H5-社区"),s("OutboundLink")],1),t._v(" 交流，在这里可以提问、反馈意见和建议，与作者直接互动")])]),t._v(" "),s("Vssue",{attrs:{issueId:"6"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);