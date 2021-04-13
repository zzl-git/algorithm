var data = [
    {
        codeKey: '528879589041111259',
        nameKey: '农改股',
        code: '801',
        parentKey: '525969049436291086'
    },
    {
        codeKey: '528879589041111289',
        nameKey: '测试单位',
        code: null,
        parentKey: '528879589041111259'
    },
    {
        codeKey: '525969049436291086',
        nameKey: '农改股',
        code: '911',
        parentKey: 0
    },
    {
        codeKey: '528879589041111260',
        nameKey: '漳浦县财政局农改股',
        code: '999909',
        parentKey: '528879589041111259'
    }
]

function getData(data, key) {
    const parentArr = [];
    for (let index = 0; index < data.length; index++) {
        const parentObj = data[index];
        if (parentObj.parentKey === key) {
            parentArr.push({
                value: parentObj.code,
                label: parentObj.code + parentObj.nameKey,
                children: getData(data, parentObj.codeKey)//递归
            })
        }
    }
    return parentArr;
}
const arr = getData(data, 0)
console.log(JSON.stringify(arr));
var arr1 = [
    {
        "value": "911",
        "label": "911农改股",
        "children": [
            {
                "value": "801",
                "label": "801农改股",
                "children": [
                    {
                        "value": null,
                        "label": "null测试单位",
                        "children": []
                    },
                    {
                        "value": "999909",
                        "label": "999909漳浦县财政局农改股",
                        "children": []
                    }
                ]
            }]
    }]
console.log(JSON.stringify(Object({}).valueOf()) );
var obj = {};
console.log(obj === new Object(obj));
console.log(obj === Object(obj));
console.log(new Object(obj) === Object(obj));