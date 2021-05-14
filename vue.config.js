 {
    module: {
        rules: [
            {  publicPath: process.env.NODE_ENV === 'production' ? '/vue-fake-article-website/' : '/'
        },
            { test: /\.scss$/ },
            {
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            data: `
                        @import "@/scss/_variables.scss";
                        @import "@/scss/_mixins.scss";
                        `,

                        }
                    }
                ]
            }
        ]
    
}




}


