import './App.css';
import imag from './img/cat_transparent.gif';

console.log("Starting...")

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];


    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

    this.el.textContent = this.txt;

    var that = this;
    var delta = 160 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      this.el.style.display = 'block';  //
      this.el.style.height = '1.2em';  // set a fixed height
      
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h3>
            <p  className="typewrite" data-period="2000" data-type='[ "Hola, soy Andrés Martínez.", "안녕하세요, 마르티네스 안드레스입니다.", "Hi, I am Andres Martinez." ]'>
            <span className="wrap"></span>
            </p>
        </h3> 
        <img className = "cat" src = {imag}/> 

        <div className="App-Description">
          <p>
          Undergraduate Student of B.S. in Computer Science 
          <br/>@ Tecnológico de Monterrey CSN 
          </p>
          <a 
            className="App-link"
            href="https://github.com/andresdanielmtz"
            target="_blank"
            rel="noopener noreferrer"
          >
            about myself 
          </a>
          <br/>
          <a 
            className="App-link"
            href="https://github.com/andresdanielmtz" // TODO: change this
            target="_blank"
            rel="noopener noreferrer"
          >
            github 
          </a>
          

        </div>
      </header>
      <div className = "App-body"> 
        Hello!

        </div>
    </div>
  );
}

export default App;
