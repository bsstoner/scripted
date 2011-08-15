!function(window){

  var _script = function(steps){
    this.steps = steps;
    this.init();
  }

  _script.prototype = {

    destroy: function(){
      clearTimeout(this.curTimeout);
      this.fns = null;
      this.steps = {};
    },

    init: function(){
      this.fns = [];

      for(var step in this.steps){
        if(this.steps.hasOwnProperty(step)
           && typeof this.steps[step]=="function"){

          this.fns.push({
            fn: this.steps[step],
            ms: parseInt(step)
          });
        }
      }

      this.fns.sort(sortByMs);
    },

    nextFn: function(){
      var self = this
        , step = this.fns.shift()
        , nextFn = this.fns[0];

      if(nextFn){
        this.curTimeout = setTimeout(function(){
          self.nextFn();
        },(nextFn.ms - step.ms));
      } else {
        this.stop();
      }

      step.fn();
    },

    start: function(){
      var self = this
        , step = this.fns[0];

      this.curTimeout = setTimeout(function(){
        self.nextFn();
      },step.ms);
    },

    stop: function(){
      clearTimeout(this.curTimeout);
      this.init(); // get it ready for next time;
    }

  }

  function sortByMs(a,b){
    return (a.ms > b.ms) ? 1 : 0;
  }

  var _scriptr = function(){
    this.scripts = {};
  };

  _scriptr.prototype = {
    destroy: function(id){
      if(this.scripts[id]){
        this.scripts[id].destroy();
        delete this.scripts[id];
      }
    },
    register: function(a,b){
      if(!b && typeof a=="object"){
        return new _script(a);
      } else {
        return this.scripts[id] = new _script(ops);
      }
    },
    start: function(id){
      this.scripts[id] && this.scripts[id].start();
    },
    stop: function(id){
      this.scripts[id] && this.scripts[id].stop();
    }
  }

  return window.scriptr = new _scriptr();

}(window)


