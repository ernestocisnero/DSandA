'use strict'

function matchingStrings(strings, queries) {
    let count = 0;
    let totalApp = [];

    queries.forEach(qry => {
        strings.forEach(str =>{
            str === qry ? count+=1 : {}
        })
        totalApp.push(count);
        count = 0;
    });

    console.log(totalApp);
}

const strings = ['ab', 'ab', 'bc', 'abc'];
const queries = ['ab', 'abc', 'bc'];

matchingStrings( strings, queries );