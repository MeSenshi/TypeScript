import {Sorter} from "./Sorter";
import {NumberCollection} from "./numberCollection";
import {CharCollection} from "./CharCollection";
import {LinkedList} from "./Linkedlist";

const numbers = new NumberCollection([100, 3, -5, 0]);
const strings = new CharCollection('FtJHsbnKh');
// const sorter = new Sorter(numbers);
// const sorter1 = new Sorter(strings);
numbers.sort();
strings.sort();
console.log(numbers.data);
console.log(strings.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(234);

// const sorter2 = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
