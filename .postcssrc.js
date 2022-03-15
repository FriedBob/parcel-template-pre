// "bowserslist": [
//     "> 1%",
//     "last 2 versions" 
//   ]
// }   --> package.json 에서 점유율 1% 이상의 브라우저들의 마지막 2버전을 지원하겠다는 의미
//---------------------------------------------------------------------------------------

// ESM x -> 브라우저 동작 환경
// CommonJS o -> nodejs 환경

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer');

// // export {
//     plugins: [
//         autoprefixer
//     ]
// }

// npm i -D postcss autoprefixer로 설치

module.exports = {
    plugins: [
        // autoprefixer
        require('autoprefixer')
    ]
}