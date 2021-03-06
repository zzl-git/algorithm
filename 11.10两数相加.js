// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式
// 存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 创建链表节点
function listNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    if(!l1 || !l2) return null;
    let dummyHead  = new listNode(0);
    let cur1 = l1;
    let cur2 = l2;
    let cur = dummyHead;
    let carry = 0;
    while(cur1 || cur2) {
        let val1 = cur1? cur1.val: 0;
        let val2 = cur2? cur2.val: 0;
        let sum  = val1 + val2+ carry;
        let newNode = new listNode(sum%10);
        carry = sum>=10? 1: 0;
        cur.next = newNode;
        cur =  cur.next;
        console.log(cur);
        console.log(dummyHead);
        if(cur1){
            cur1 =cur1.next;
        }
        if(cur2){
            cur2 =cur2.next;
        }
    }
    if(carry >0) {
        cur.next = new listNode(carry)
    }
    return dummyHead.next;
}
const l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}
const l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}
console.log(addTwoNumbers(l1, l2));


