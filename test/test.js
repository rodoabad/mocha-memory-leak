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