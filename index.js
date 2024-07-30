// high level languages - let name = 'John' (example); js,python,php,ts
// low level languages - 010100101101110010 (example); go,rust,c++,c,c

// let arr = [1,2,3,4,5]
// arr.trim() - deletes all spaces

// for of - arrs
// for in - objs

// vocabulary 
// obj[key]
// arr[i]
let arr = [
    {
        id : Math.random(),
        name : 'Timur',
        info : {
            school : '235',
            faculity : 'Frontend'
        }
    },
    {
        id : Math.random(),
        name : 'Alex',
        info : {
            school : '232',
            faculity : 'Backend'
        }
    },
    {
        id : Math.random(),
        name : 'Alex',
        info : {
            school : '232',
            faculity : 'Backend'
        }
    }
]
let categories = [
    {
        course :' FRONTEND',
        count : 0
    },
    {
        course :' BACKEND',
        count : 0
    }
]
for (item of arr) {
    let f = item.info.faculity.toLowerCase().trim()
    for (elem of categories) {
        let c = elem.course.toLowerCase().trim()
        if(f == c) {
            ++elem.count
        }
    }
}
console.log(categories);

let obj = {
    name : 'diyor',
    age : 30
}
for (item in obj) {
    console.log(item);
}


let i = 0;
while (i < 0) {
    i++
    console.log(i);
}

do {
    i++
    console.log('hello ' + i);
} while(i < 0)
// while do while meme - easiest way to remember(^-^)

// atrue bfalse


let people = [
    {
        name: 'Makima',
        age: 36,
        boolean: true
    },
    {
        name: 'Denzhi',
        age: 24,
        boolean: false
    },
    {
        name: 'Aki',
        age: 20,
        boolean: false
    }
];
let varTrue = {
    arr : [],
    count : 0
}
let varFalse = {
    arr : [],
    count : 0
}
for (item of people) {
    if (item.boolean == true) {
        varTrue.arr.push(item)
        ++varTrue.count
    }
    else if (item.boolean == false) {
        varFalse.arr.push(item)
        ++varFalse.count
    }
    else {
        console.log('error');
    }
}
console.log(varTrue,varFalse);