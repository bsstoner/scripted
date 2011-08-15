# scripted.js

  tiny js lib for handling time-based scripted functionality

## Usage

    <script src="scripted.js"></script>
    <script>

      // schedule functions to be run

      var hello = scripted.register({
        1000: function(){
          console.log("hello");
        },
        2000: function(){
          console.log("world");
        }
      });

      // start the script

      hello.start();


      // at any point you may want to stop it:

      hello.stop();


      // and you can restart it again whenever:

      hello.start();


      // destroy if you don't want it any more:

      hello.destroy();


      // you can also register with an id, if you don't want to manage the objects yourself:

      scripted.register("hello",{
        1000: function(){
          console.log("hello");
        },
        2000: function(){
          console.log("world");
        }
      });

      // start/stop/destroy using scripted:

      scripted.start("hello");

      scripted.stop("hello");

      scripted.destroy("hello");


    </script>

## License

  (The MIT License)

  Copyright (c) 2011 Brian Stoner

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  'Software'), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

