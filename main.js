console.log(arrowTitle)
    /* START CODE UNDER THIS LINE */

/*--------------------Pulse Check--------------------*/
//______________________________________________________
//Q1
// for (let i = 0; i < 10; i++) {
// console.log(i)
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
//______________________________________________________
//Q2
// let x = 0
// while (x <= 5) {
//     console.log(x);
//     x = x + 1;
// }
//______________________________________________________
//Q3
// for (let i = 10; i <= 20; i++) {
//     console.log(i);
// }
//______________________________________________________
//Q4
// const galaxies = ["Andromeda", "Milky Way", "Magellanic Clouds"];
// for (let i = 0; i < galaxies.length; i++) {
//     console.log(galaxies[i]);
// }
//______________________________________________________
//Q5
// const randomString = "bwaxaawqaacasghwera";

// for (let i = 0; i < randomString.length; i++) {
//     //how to print all letters that aren't ?a?
//     if (randomString[i] !== 'a') {
//         console.log(randomString[i]);
//     }
// }









/*--------------------Practice--------------------*/
//______________________________________________________
//Q1
// const sum = function(numbers) {
//     let x = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         x += numbers[i]
//     }
//     return x;

// };

// sum([1, 2, 3, 4, 5, 6]); // => 21
// sum([1, 2, 3]); // => 6
//______________________________________________________
//Q2
// const users = [
//     { username: "Jane", password: "123456" },
//     { username: "admin", password: "abc123" },
// ];
// //why we need to do it as  a loop
// const login = function(username, password) {
//     for (i = 0; i < users.length; i++)
//         if (username === users[0].username && password === users[0].password ||
//             username === users[1].username && password === users[1].password) {
//             return "Login Successful"
//         } else {
//             return "Login Failed"
//         }

// };

// login("Jane", "123456"); // => "Login Successful"
// login("Jane", "5321"); // => "Login Failed"
// login("Mark", "123456"); // => "Login Failed"
// login("admin", "abc123"); // => "Login Successful"
// login("admin", "aaabc123"); // => "Login Failed"
//______________________________________________________
//Q3
// const onlyStrings = function(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'string') {
//             return array[i];
//         }
//     };
// }
// onlyStrings([0, 1, "Hello", true, 4, "World", 6]); // => ["Hello", "World"]
// onlyStrings(["John", 87, true, 26, "Doe", false]); // => ["John", "Doe"]
//______________________________________________________
//Q4
// const range = function(start, end) {

//     let i = start;
//     let x = end;
//     for (i, x; i <= x; i++) {
//         return i, x;
//     }


// };

// range(5, 8); // => "5, 6, 7, 8"
// range(8, 5); // => "5, 6, 7, 8"
// range(5); // => "0, 1, 2, 3, 4, 5"
// range(-5); // => "-5, -4, -4, -2, -1, 0"
// range(-5); // => "-5, -4, -4, -2, -1, 0"
//______________________________________________________
//Q5
const onlyOddNumbers = function(numbers) {
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
};

onlyOddNumbers([0, 1, 2, 3, 4, 5, 6]); // => [1, 3, 5]
onlyOddNumbers([0, 12, 6]); // => []
//______________________________________________________
//Q6
const maximumNumber = function(numbers) {
    let max = numbers[0];
    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] > max)
            max = numbers[i];
    }

    return max;
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
maximumNumber([0, 5, 6]); // => 6
//______________________________________________________
//Q7
const reversString = function(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"
//______________________________________________________
//Q8
// make sure to use the same array
const onlyEven = function(numbers) {
    let eve = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            numbers.splice(i, 1);
        }
        return numbers[i]
    }
};

onlyEven([0, 1, 2, 3, 4, 5, 6]); // =>[0, 2, 4, 6]
onlyEven([1, 9, 2, 3, 4]); // => [2, 4]
//______________________________________________________
//Q9
const allUsers = [
    { username: "Jane", password: "123456" },
    { username: "admin", password: "abc123" },
];

const createUser = function(username, password) {
    for (let i = 0; i < allUsers.length; i++) {
        if (username === allUsers[i]['username']) {
            return "That username is not available";
        } else {
            return "Registration successful";
        }
    }
};
createUser("James", "123456"); // => "Registration successful"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}]

createUser("Jane", "5321"); // => "That username is not available"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}]

createUser("Mark", "22222"); // => "Registration successful"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}, {username: "Mark", password: "22222"}]

createUser("admin", "abc123"); // => "That username is not available"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}, {username: "Mark", password: "22222"}]
//______________________________________________________
//Q10
const convertToObject = function(array) {

    for (const property in array) {
        return `${property}: ${array[property]}`;
    }
};

convertToObject(["one", "two", "three"]); // => { 0: "one", 1: "two", 2: "three" }
convertToObject(["Hello", "World", "!!!"]); // => { 0: "Hello", 1: "World", 2: "!!!" }
//______________________________________________________








/*--------------------Extra Practice--------------------*/
//______________________________________________________
//Q1
const sumArguments = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
};

sumArguments(1, 2); // => 3
sumArguments(1, 2, 3, 4); // => 10
sumArguments(4, 5, 6, 7, 8); // => 30
sumArguments(1); // => 1
sumArguments(); // => 0
//______________________________________________________
//Q2
// make sure to use the same array
const sort = function(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
            }
        }
    };
    return numbers;
}
sort([0, 1, 2, 3, 4, 5, 6]); // => [6, 5, 4, 3, 2, 1, 0]
sort([3, 6, 2, 0, 4, 1, 5]); // => [6, 5, 4, 3, 2, 1, 0]
//______________________________________________________
//Q3
const compareArrays = function(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            return false;
        }
    }
    return true;
};

compareArrays(["one", "two", "three"], ["one", "two", "three"]); // => true
compareArrays(["one", "two", "three"], ["one", "three", "two"]); // => true
compareArrays(["one", "two", "four"], ["one", "two", "three"]); // => false
compareArrays(["one", "two"], ["one", "three", "two"]); // => false
compareArrays(["one", "two", "three"], ["one", "two"]); // => false