### INSTALL
```npm install limited-array```

### EXAMPLES
```
import { LimitedArray } from 'limited-array';

let limitedArray = new LimitedArray({ size: 3 });

limitedArray.push(1);
limitedArray.push(2);
limitedArray.push(3);
console.log(limitedArray); // LimitedArray [1, 2, 3]

limitedArray.push(4);
console.log(limitedArray); // LimitedArray [2, 3, 4]

for(let i in limitedArray) {
    console.log("Element", i, limitedArray[i]);
}

```