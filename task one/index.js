Z = {
    a: 1,
    b: {e: 2, f: 6},
    c: 3,
    d: 4,
    g: {h: 'i', j: {k: 7}}
};
console.log('Z object', Z);

Y = deepCopy(Z);

function deepCopy(obj)
{
    let copyObj = {};
    for(let i in obj)
    {
        if(obj[i] instanceof Object)
        {
            copyObj[i] = deepCopy(obj[i]);
            continue;
        }
        copyObj[i] = obj[i];
    }
    return copyObj;
}

Y.l = 88;
console.log('Z object', Z);
console.log('Y object', Y);