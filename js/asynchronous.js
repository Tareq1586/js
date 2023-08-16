// console.log('Task 1');
// const statuss = true;
// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (statuss) {
//             resolve('Task 2');
//         } else {
//             reject('failed');
//         }
//     }, 2000);
// });
// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
// console.log('Task 3');
// promise.then(
//     function (value) {
//         console.log(value);
//     },
//     function (err) {
//         console.log(err);
//     }
// );
// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// console.log('Task 3');

// Promise:
const paymentSuccess = true;
const marks = 70;

function enroll() {
    console.log('Enrollment is in prgress...');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve('Payment succeed');
            } else {
                reject('Payment failed');
            }
        }, 2000);

    });
    return promise;
}

function progress() {
    console.log('Course is in progress...');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject(`You wouldn't get enough marks to get the certificate`);
            }
        }, 2000);
    });
    return promise;
}

function getCertificate() {
    console.log('Certificate is in progress...');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Congrats! You got the certificate');
        }, 1000);
    });
    return promise;
}
// enroll()
//     .then()
// .then(function(value){
//     console.log(value);
// })
// .then(progress)
// .then(progress)
// .then(getCertificate)
// .then(function (value) {
//     console.log(value);
// })
// .catch(function (err) {
//     console.log(err);
// })
// async function hello() {
//     return "Hello";
// }
// console.log(hello());
async function course() {
    try {
        await enroll();
        await progress();
        const msg = await getCertificate();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}
course();