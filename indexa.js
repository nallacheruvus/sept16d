async function myDisp() {
    let prom = new Promise((res, rej) => {
        res("Test Output!");
    });
    let d = await prom;
    console.log(d);
}
myDisp();