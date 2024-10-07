////////////// TASK 1 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 1.Sum all the numbers in 'arr1'
const sum = arr1.reduce((acc, item) => acc + item, 0);
console.log("sum", sum)

// 2.Add two numbers (10,88) to end of arr1 (push methods)
arr1.push(10, 88);
console.log("arr1", arr1);

// 3.Remove first two numbers from arr1
arr1.splice(0, 2); 
console.log("arr1", arr1);


// 4.Add three numbers (0,9,11) in front of arr1(unshift)
arr1.unshift(0, 9, 11);
console.log("arr1", arr1);

// 5.Remove four numbers in front of arr1(shift)
arr1.splice(0, 4)
console.log("arr1", arr1);

////////////// TASK 2 //////////////

const arr02 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]
// 1.Console values from "Rufet" to "Ali"
console.log(arr02.slice(arr02.indexOf("Rufet"), arr02.indexOf("Ali") + 1));

// 2.Change Mehman to Fidan
arr02[arr02.indexOf("Mehman")] = "Fidan";
console.log(arr02);

// 3.Console each name with map
arr02.map(name => console.log(name));

// 4.Console only names which is Fatime
console.log(arr02.filter(name => name === "Fatime"));

// 5.Console all names where name is Gunel, then change it to "Nihad"
console.log(arr02[arr02.indexOf("Gunel")]);  
arr02[arr02.indexOf("Gunel")] = "Nihad";    
console.log(arr02);

// 6.Console last second value of arr2
console.log(arr02[arr02.length - 2]);

// 7.Console length of arr2
console.log(arr02.length);



////////////// TASK 3 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// 1.Show only numbers
const numbers1 = arr3.filter(item => typeof item === 'number')
console.log("numbers1", numbers1);

// 2.Show only true values
const values1 = arr3.filter(item => item === true)
console.log("values1", values1);

// 3.Show only false values
const values2 = arr3.filter(item => item === false)
console.log("values2", values2);

// 4.Show only strings
const strings1 = arr3.filter(item => typeof item === 'string')
console.log("strings1",strings1);


////////////// TASK 4 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// 1.Console (only even numbers)
const numbers2 = numbers.filter(num => num % 2 === 0);
console.log("numbers2", numbers2);

// 2.Console (only odd numbers)
const numbers3 = numbers.filter(num => num % 2 !== 0)
console.log("numbers3", numbers3);


////////////// TASK 5 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]
const arr5 = arr4.map(value => {
    if (typeof value === 'number') {
        return value + 10;  
    } else if (typeof value === 'string') {
        return value + " is string"; 
    } else if (!value) {  
        return value + " is falsy value";
    }
    return value; 
});

console.log(arr5);

// 2.Sum all numbers of arr4
const sum1 = arr1.reduce((acc, item) => acc + item, 0);
console.log("sum1", sum1)

// 3.Count only the values that are true
const counttrue = arr4.filter(value => value === true).length;
console.log("counttrue", counttrue)

// 4.Count only the values that are string
const countstrings = arr4.filter(value => typeof value === 'string').length;
console.log("countstrings", countstrings);

// 5.Count only the values that are false
const countfalse = arr4.filter(value => value === false).length;
console.log("Count of false values:", countfalse)

////////////// TASK 6 //////////////

// let fullName = 'Ulfat Zakirli Rovshen'
let fullName = "Gunel Jafarova Sultan"

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
let letterArray = fullName.split('');
console.log(letterArray)

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)
let nameparts = fullName.split(' ')
let newname = [nameparts[1], nameparts[0], nameparts[2]].join(' ');
console.log(newname);



let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
let result = arr.filter(num => num === 5).length;
console.log("result",result);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let sum2 = arr.reduce((sum, num) => sum + num, 0);
console.log("sum2", sum2);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
let result2 = arr.filter((num, index, array) => array.indexOf(num) !== index) 
    .filter((num, index, array) => array.indexOf(num) === index); 
    result2.sort((a, b) => a - b); 
console.log("result2", result2)

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
let maxnum = Math.max(...arr);
let countmax = arr.filter(num => num === maxnum).length;
console.log("maxnum", maxnum, "countmax", countmax);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
let nameLength = 'Gunel'.length
let result3 = arr.find(num => num === nameLength) !== undefined;
console.log("result3", result3)

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
let result4 = arr.map((num, index) => {
    if (num % 3 === 2) {
        return {num, index};
    }
}).filter(item => item);
console.log("result4", result4);

//10) arraydaki en boyuk reqemin ilk indexini tapin
let maxNum = Math.max(...arr);
let result5 = arr.indexOf(maxNum)

console.log("maxNum",maxNum);
console.log("result5", result5);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
let result6 = [];
arr.forEach((num, index) => {
    if (num === 4) {
        result6.push(index);
    }
});
console.log("result6", result6);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
let result7 = arr.indexOf(5);
let result8 = arr.lastIndexOf(5);

console.log('result7', result7);
console.log("result8", result8);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
let result9 = arr.filter(num => num > 2);
let result10 = arr.length - result9.length;

console.log("result9", result9);
console.log("result10", result10);

//14) 7 reqeminin indexleri cemini tapin.
let result11 = arr.reduce((sum, num, index) => num === 7 ? sum + index : sum, 0)
console.log("result11", result11);


///////////// TASK 7//////////////

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//QEYD - !!! Bu tasklarda arr2 istifade edilecekdir və hər bir algorithm funksiya daxilində yazılmalıdır...

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
//  16.1
function filtername(arr) {
    return arr.filter(item => item.name.startsWith('t'));
}
console.log(filtername(arr2))

//16.2
function filtername1(arr) {
    let result = [];
    for (let item of arr) {
        if (item.name[0] === 't') {
            result.push(item);
        }
    }
    return result;
}
console.log(filtername1(arr2))

//16.3
function filtername2(arr) {
    let result = [];
    arr.forEach(item => {
        if (item.name.startsWith('t')) {
            result.push(item);
        }
    });
    return result;
}
console.log(filtername2(arr2));


//16.4
function filtername3(arr) {
    return arr.reduce((acc, item) => {
        if (item.name.startsWith('t')) {
            acc.push(item);
        }
        return acc;
    }, []);
}
console.log(filtername3(arr2))

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
//17.1
function countname(arr) {
    return arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
}
console.log(countname(arr2));

//17.2
function countname1(arr) {
    let count = 0;
    for (let item of arr) {
        if (item.name.startsWith('t') && item.name.endsWith('t')) {
            count++;
        }
    }
    return count;
}
console.log(countname1(arr2))

//17.3
function countname2(arr) {
    let count = 0;
    arr.forEach(item => {
        if (item.name.startsWith('t') && item.name.endsWith('t')) {
            count++;
        }
    });
    return count;
}
console.log(countname2(arr2))

//17.4
function countname3(arr) {
    return arr.map(item => item.name.startsWith('t') && item.name.endsWith('t') ? 1 : 0).reduce((sum, num) => sum + num, 0);
}
console.log(countname3(arr2));

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 18.1
function sumkeys(arr) {
    return arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t'))
              .reduce((sum, item) => sum + item.key, 0);
}
console.log(sumkeys(arr2))

//18.2
function sumkeys1(arr) {
    let sum = 0;
    for (let item of arr) {
        if (item.name.startsWith('t') && item.name.endsWith('t')) {
            sum += item.key;
        }
    }
    return sum;
}
console.log(sumkeys1(arr2))

//18.3
function sumkeys2(arr) {
    let sum = 0;
    arr.forEach(item => {
        if (item.name.startsWith('t') && item.name.endsWith('t')) {
            sum += item.key;
        }
    });
    return sum;
}
console.log(sumkeys2(arr2))

//18.4
function sumkeys3(arr) {
    return arr.map(item => (item.name.startsWith('t') && item.name.endsWith('t')) ? item.key : 0)
              .reduce((sum, key) => sum + key, 0);
}
console.log(sumkeys3(arr2));

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
//19.1
function replacename(arr) {
    return arr.map(item => item.name.endsWith('e') ? { ...item, name: 'SuperDev' } : item);
}
console.log(replacename(arr2))

//19.2
function replacename1(arr) {
    for (let item of arr) {
        if (item.name.endsWith('e')) {
            item.name = 'SuperDev';
        }
    }
    return arr;
}
console.log(replacename1(arr2));

//19.3
function replacename2(arr) {
    arr.forEach((item, index) => {
        if (item.name.endsWith('e')) {
            arr.splice(index, 1, { ...item, name: 'SuperDev' });
        }
    });
    return arr;
}
console.log(replacename2(arr2));

//19.4
function replacename3(arr) {
    for (let item of arr) {
        if (item.name.endsWith('e')) {
            item.name = 'SuperDev';
        }
    }
    return arr;
}
console.log(replacename3(arr2));

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
//20.1
function findkey(arr) {
    return arr.reduce((longest, item) => item.name.length > longest.name.length ? item : longest).key;
}
console.log(findkey(arr2));

//20.2
function findkey1(arr) {
    let longest = arr[0];
    for (let item of arr) {
        if (item.name.length > longest.name.length) {
            longest = item;
        }
    }
    return longest.key;
}
console.log(findkey1(arr2));

//20.3
function findkey2(arr) {
    return arr.slice().sort((a, b) => b.name.length - a.name.length)[0].key;
}
console.log(findkey2(arr2))

//20.4
function findkey3(arr) {
    let lengths = arr.map(item => item.name.length);
    let maxLength = Math.max(...lengths);
    return arr.find(item => item.name.length === maxLength).key;
}
console.log(findkey3(arr2))

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
//21.1
function squareindex(arr) {
    let longestIndex = arr.reduce((longestIdx, item, idx) => item.name.length > arr[longestIdx].name.length ? idx : longestIdx, 0);
    return longestIndex * longestIndex;
}
console.log(squareindex(arr2));

//21.2
function squareindex1(arr) {
    let longestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].name.length > arr[longestIndex].name.length) {
            longestIndex = i;
        }
    }
    return longestIndex * longestIndex;
}
console.log(squareindex1(arr2))

//21.3
function squareindex2(arr) {
    let sorted = arr.slice().sort((a, b) => b.name.length - a.name.length);
    let longestItem = sorted[0];
    let longestIndex = arr.indexOf(longestItem);
    return longestIndex * longestIndex;
}
console.log(squareindex2(arr2))

//21.4
function squareindex3(arr) {
    let maxLength = arr.reduce((max, item) => Math.max(max, item.name.length), 0);
    let longestIndex = arr.findIndex(item => item.name.length === maxLength);
    return longestIndex * longestIndex;
}
console.log(squareindex3(arr2))

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
//22.1
function filternames(arr) {
    return arr.filter(item => item.name.length === 4);
}
console.log(filternames(arr2))

//22.2
function filternames1(arr) {
    let result = [];
    for (let item of arr) {
        if (item.name.length === 4) {
            result.push(item);
        }
    }
    return result;
}
console.log(filternames1(arr2))

//22.3
function filternames2(arr) {
    let result = [];
    arr.forEach(item => {
        if (item.name.length === 4) {
            result.push(item);
        }
    });
    return result;
}
console.log(filternames2(arr2))

//22.4
function filternames3(arr) {
    return arr.reduce((acc, item) => {
        if (item.name.length === 4) {
            acc.push(item);
        }
        return acc;
    }, []);
}
console.log(filternames3(arr2))

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
//23.1
function findname(arr) {
    return arr.reduce((max, item) => item.key > max.key ? item : max).name;
}
console.log(findname(arr2))

//23.2
function findname1(arr) {
    let max = arr[0];
    for (let item of arr) {
        if (item.key > max.key) {
            max = item;
        }
    }
    return max.name;
}
console.log(findname1(arr2));

//23.3 
function findname2(arr) {
    let keys = arr.map(item => item.key);
    let maxKey = Math.max(...keys);
    return arr.find(item => item.key === maxKey).name;
}
console.log(findname2(arr2))

//23.4
function findname3(arr) {
    let keys = arr.map(item => item.key);
    let maxKey = Math.max(...keys);
    return arr.find(item => item.key === maxKey).name;
}
console.log(findname3(arr2))

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
//24.1
function findIndex(arr) {
    return arr.map((item, index) => (item.name.match(/l/gi) || []).length === 2 ? index : -1).filter(index => index !== -1);
}
console.log(findIndex(arr2));

//24.2
function findIndex1(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let lCount = (arr[i].name.match(/l/gi) || []).length;
        if (lCount === 2) {
            result.push(i);
        }
    }
    return result;
}
console.log(findIndex1(arr2))

//24.3
function findIndex2(arr) {
    let result = [];
    arr.forEach((item, index) => {
        let lCount = (item.name.match(/l/gi) || []).length;
        if (lCount === 2) {
            result.push(index);
        }
    });
    return result;
}
console.log(findIndex2(arr2));

//24.4
function findIndex3(arr) {
    return arr.reduce((acc, item, index) => {
        let lCount = (item.name.match(/l/gi) || []).length;
        if (lCount === 2) {
            acc.push(index);
        }
        return acc;
    }, []);
}
console.log(findIndex3(arr2));

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
//25.1
function findKeys(arr) {
    return arr.filter(item => (item.name.match(/t/gi) || []).length === 2).map(item => item.key);
}
console.log(findKeys(arr2));

//25.2
function findKeys1(arr) {
    let result = [];
    for (let item of arr) {
        let tCount = (item.name.match(/t/gi) || []).length;
        if (tCount === 2) {
            result.push(item.key);
        }
    }
    return result;
}
console.log(findKeys1(arr2));

//25.3
function findKeys2(arr) {
    let result = [];
    arr.forEach(item => {
        let tCount = (item.name.match(/t/gi) || []).length;
        if (tCount === 2) {
            result.push(item.key);
        }
    });
    return result;
}
console.log(findKeys2(arr2));

//25.4
function findKeys3(arr) {
    return arr.reduce((acc, item) => {
        let tCount = (item.name.match(/t/gi) || []).length;
        if (tCount === 2) {
            acc.push(item.key);
        }
        return acc;
    }, []);
}
console.log(findKeys3(arr2));