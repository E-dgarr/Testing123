//private module code
const secret = "Super secret code";

//public module code
sayHi = (name) => {
    console.log(`Hello, ${name}!`);
}

module.exports = sayHi;