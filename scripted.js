!function(window){

  var _script = function(steps){
    this.steps = steps;
    this.init();
  }

  _script.prototype = {

    destroy: function(){
      clearTimeout(this.curTimeout);
      this.fns = null;
      this.doneFn = null;
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

      if(!nextFn){
        this.doneFn && this.doneFn();
      }
    },

    start: function(fn){
      var self = this
        , step = this.fns[0];

      this.doneFn = fn;

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

  var _scripted = function(){
    this.scripts = {};
  };

  _scripted.prototype = {
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
    start: function(id,fn){
      this.scripts[id] && this.scripts[id].start(fn);
    },
    stop: function(id){
      this.scripts[id] && this.scripts[id].stop();
    }
  }

  return window.scripted = new _scripted();

}(window)


