async function a() {
    return "First";
}
async function b() {
    return "Second";
}
async function c() {
    return "Third";
}
const proma = new Promise((resolve, reject) => {
    if (1 === 2) {
        resolve(a());
    } else {
        reject("Not true");
    }
});
const promb = new Promise((resolve, reject) => {
    resolve(b());
});
const promc = new Promise((resolve, reject) => {
    resolve(c());
});
proma.then(c => console.log(c)).catch(x => console.log(x));
promb.then(c => console.log(c));
promc.then(c => console.log(c));
const promd = new Promise((resolve, reject) => {
    resolve(console.log("First Promise"));
});
const prome = new Promise((resolve, reject) => {
    resolve(console.log("Second promise"));
});
const promf = new Promise((resolve, reject) => {
    resolve(console.log("Third Promise"));
});
//Promise Chaining
promf.then(promd).then(prome);
const promg = new Promise(function (resolve, reject) {
    resolve("Anon function syntax of promise");
});
promg.then(a => console.log(a));
const promh = new Promise((resolve, reject) => {
    resolve("A promise *")
});
const promi = new Promise((resolve, reject) => {
    resolve("B Promise *");
});
const promj = new Promise((resolve, reject) => {
    resolve("C Promise *");
});
const promk = new Promise((resolve, reject) => {
    resolve("D Promise *");
});
const proml = new Promise((resolve, reject) => {
    resolve("E Promise *");
});
var arr = [promh, promi, promj, promk, proml];
Promise.all(arr).then(c => console.log(c));
function ff() {
    console.log("Normal Function");
}
ff();

let promaa = new Promise(function (res, rej) {
    res(console.log("My Promise"));
});
promaa.then(console.log);
promh.then(console.log);
let itr = arr[Symbol.iterator]();
for (let i = itr.next(); i.done !== true; i = itr.next()) {
    const t = i.value;
    t.then(console.log);
}
for (const i of arr) {
    i.then(console.log);
}
for (const k in arr) {
    const t = arr[k];
    t.then(console.log);
}
arr.forEach(n => {
    n.then(console.log);
});
