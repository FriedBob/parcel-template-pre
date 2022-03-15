// npm i -D @babel/core @babel/preset-env 로 설치
// npm i -D @babel/plugin-transform-runtime 로 설치한 플러그인을 명시하여 등록
module.exports={
    presets: ['@babel/preset-env'],
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}