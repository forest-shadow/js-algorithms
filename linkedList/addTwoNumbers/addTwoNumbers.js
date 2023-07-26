export class ListNode {
  /**
   * @param {Number | undefined} value
   * @param {ListNode | undefined} nextNode
   */
  constructor(value, nextNode) {
    this.value = value === undefined ? 0 : value;
    this.next = nextNode === undefined ? null : nextNode;
  }
}

/**
 * @param {ListNode} listNode
 * @returns {Number}
 */
export const getNumFromLinkedList = (listNode) => {
  let result = [];
  let currentNode = listNode;
  while (currentNode) {
    result.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return Number(result.reverse().join(''));
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = function (l1, l2) {
  const sum = getNumFromLinkedList(l1) + getNumFromLinkedList(l2);
  const sumCharArr = (sum + '').split('').reverse();

  const headNode = new ListNode();
  let currentNode = headNode;
  
  while (sumCharArr.length) {
    const currentChar = sumCharArr.shift();
    currentNode.value = Number(currentChar);
    currentNode.next = sumCharArr.length > 0 ? new ListNode() : null;
    currentNode = currentNode.next;
  }

  return headNode;
};
