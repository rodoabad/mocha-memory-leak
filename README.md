# Mocha Memory Leak

Not cleaning up your declarations results in a memory leak.

## Setup

1. `npm install`
2. Open `index.html` in Chrome.
3. Take a Heap Snapshot
4. Search for `memory`.

### Leaking

![Mocha Memory Leak](/img/mocha-memory-leak-1.JPG "Leaking")

```javascript
(function () {

  'use strict';

  function MemoryLeak() {
  }

  for (var i = 0; i < 1000; i += 1) {

    describe('Suite #' + i, function () {

      var suite;

      beforeEach(function () {

        suite = new MemoryLeak();

      });

      it('should do something', function () {

        suite.isLeaking = true;

      });

    });

  }

})();
```

### Not Leaking

![Mocha Memory Leak](/img/mocha-memory-leak-2.JPG "Not Leaking")

```
(function () {

  'use strict';

  function MemoryLeak() {
  }

  for (var i = 0; i < 1000; i += 1) {

    describe('Suite #' + i, function () {

      var suite;

      beforeEach(function () {

        suite = new MemoryLeak();

      });

      afterEach(function () {

        suite = null;

      });

      it('should do something', function () {

        suite.isLeaking = true;

      });

    });

  }

})();
```
