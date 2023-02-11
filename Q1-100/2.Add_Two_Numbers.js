/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const i = (x1, x2, rest = 0) => {
        if (!x1 && !x2 && !rest) 
            return null;
        const newVal = (x1?.val || 0) + (x2?.val || 0) + rest;
        const nextNode = i(x1?.next, x2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return i(l1, l2);
};