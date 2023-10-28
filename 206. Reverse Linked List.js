/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var curr=head;
    var prev=null;
    while(curr!=null)
    {
      prev = new ListNode(curr.val,prev);
      curr=curr.next;
    }

    return prev;

};