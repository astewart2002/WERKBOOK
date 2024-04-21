// function([string1, string2],target id,[color1,color2])    
 consoleText(['Enter.', 'Click me.', 'Please Enter.'], 'text',['white','white','white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#000000','#000000', '#000000'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.style.color = colors[0];
  target.setAttribute('style', 'red:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

// create instance of kinet with custom settings
var kinet = new kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });
  
  // select circle element
  var cursor = document.getElementById('cursor');
  
  // set handler on kinet tick event
  kinet.on('tick', function(instances) {
    cursor.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
  });
  
  // call kinet animate method on mousemove
  document.addEventListener('mousemove', function (event) {
    kinet.animate('x', event.clientX - window.innerWidth/2);
    kinet.animate('y', event.clientY - window.innerHeight/2);
  });
  
  
  
  // log
  kinet.on('start', function() {
    console.log('start');
  });
  
  kinet.on('end', function() {
    console.log('end');
  });