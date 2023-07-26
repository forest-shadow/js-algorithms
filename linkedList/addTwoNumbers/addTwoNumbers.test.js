import { iteratee } from 'lodash';
import { ListNode, getNumFromLinkedList, addTwoNumbers } from './addTwoNumbers';

describe('Linked list: addTwoNumbers', () => {
  describe('ListNode', () => {
    it('should create linked list node without errors', () => {
      const node1 = new ListNode();
      expect(node1.value).toEqual(0);
      expect(node1.next).toEqual(null);
      const node2 = new ListNode(5);
      expect(node2.value).toEqual(5);
      expect(node2.next).toEqual(null);
      const node3 = new ListNode(7, node2);
      expect(node3.value).toEqual(7);
      expect(node3.next.value).toEqual(node2.value);
    });
  });
  describe('getNumFromLinkedList', () => {
    const node1 = new ListNode(2);
    const node2 = new ListNode(4);
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    it('should return the number from linked list', () => {
      expect(getNumFromLinkedList(node1)).toEqual(342);
    });
  });
  describe('addTwoNumbers', () => {
    const node1 = new ListNode(2);
    const node2 = new ListNode(4);
    const node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;

    const node4 = new ListNode(5);
    const node5 = new ListNode(6);
    const node6 = new ListNode(4);
    node4.next = node5;
    node5.next = node6;

    const node7 = new ListNode(7);
    const node8 = new ListNode(0);
    const node9 = new ListNode(8);
    node7.next = node8;
    node8.next = node9;
    it('should return the sum of numbers provided by two linked lists wrapped in linked list', () => {
      expect(addTwoNumbers(node1, node4)).toEqual(node7);
    });
  });
});
