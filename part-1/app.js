let favNum = 13;
let baseURL = 'http://numbersapi.com/';

// 1
async function numberRequest(){
    let res = await axios.get(`${baseURL}/${favNum}?json`);
    console.log(res);
}
numberRequest();

// 2
let favNums = [2,4,6];
async function multiNums(){
    let res = await axios.get(`${baseURL}/${favNums}?json`);
    console.log(res);
}
multiNums();

// 3
async function fourFacts(){
    let res = await Promise.all(
        Array.from({ length: 4 }, () => {`${baseURL}/${favNum}?json`})
    );
    fourFacts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
fourFacts();