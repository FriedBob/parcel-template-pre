console.log('Hello Parcel!');

async function test() {
    const promise = Promise.resolve(123);
    console.log(await promise);
    console.log("hihello");
}
// npm i -D @babel/plugin-transform-runtime 을 사용해야 babel에서 async await 인식
test();