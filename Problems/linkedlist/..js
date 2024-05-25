// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head ?? null);
    }
    size() {
        if (!this.head) return 0;
        else {
            let size = 1;
            let currentNode = this.head;
            while (currentNode.next) {
                size++;
                currentNode = currentNode.next;
            }
            return size;
        }
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        return lastNode;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (this.head.next) this.head = this.head.next;
        else this.head = null;
    }
    removeLast() {
        if (!this.head?.next) {
            this.head = null;
            return;
        }
        let SecondLastNode = this.head;
        while (SecondLastNode.next?.next) {
            SecondLastNode = SecondLastNode.next;
        }
        SecondLastNode.next = null;
    }
    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data, null);
        } else {
            let lastNode = this.head;
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
            lastNode.next = new Node(data, null);
        }
    }

    getAt(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentIndex === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getAt(index - 1);
        if (!previousNode || !previousNode.next) {
            return;
        }
        previousNode.next = previousNode.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        let previousIndex = index - 1;
        let previousNode = this.getAt(previousIndex);

        while (!previousNode && previousIndex > 0) {
            previousIndex--;
            previousNode = this.getAt(previousIndex);
        }

        if (previousIndex) {
            previousNode.next = new Node(data, previousNode.next);
        }
    }
    forEach(func) {
        const size = this.size();
        for (let i = 0; i < size && size > 0; i++) {
            func(this.getAt(i));
        }
    }
}

module.exports = { Node, LinkedList };
