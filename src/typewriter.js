/* Interface */
function typewriteText(id, speed=100, textcolor='#000000', cursor='|', cursorcolor='#000000') {
    new _eeTypewriter(id=id, speed=speed, textcolor=textcolor, cursor=cursor, cursorcolor=cursorcolor);
}    

/* TYPEWRITER */
var _eeTypewriterDict = {};  // For matching object with observed element
class _eeTypewriter {
    constructor(id, speed, textcolor, cursor, cursorcolor) {
        this.id = id;
        this.speed = speed;
        this.textColor = textcolor;
        this.cursor = cursor;
        this.cursorColor = cursorcolor;
        this.elem = null;
        this.text = '';
        this.textElem = null;
        this.cursorElem = null;

        _eeTypewriterDict[this.id] = this;
        window.addEventListener('load', (event) => {
            this.initialize(this);
        });
    }

    initialize() {
        this.elem = document.getElementById(this.id);
        this.elem.style.height = this.elem.offsetHeight+"px";
        this.text = (this.elem.innerHTML).trim();
        this.elem.innerHTML = "<span id='"+this.id+"_typewriting_text'></span><span id='"+this.id+"_typewriting_cursor'>"+this.cursor+"</span>"
        this.textElem = document.getElementById(this.id+"_typewriting_text");
        this.cursorElem = document.getElementById(this.id+"_typewriting_cursor");
        this.textElem.style.color = this.textColor;
        this.cursorElem.style.color = this.cursorColor;

        _eeObserver.observe(this.elem);
    }

    start() {
        this.cursorHidden = false;
        this.charCount = 0;
        var t = this;
        this.textInterval = setInterval(function() {
            if (t.charCount <= t.text.length) {
                let char = t.text.charAt(t.charCount);
                if ((char == '<') && (t.text.substring(t.charCount,t.charCount+4).toLowerCase() == '<br>')) {
                    char="<br>";
                    t.charCount += 3;
                }
                t.textElem.innerHTML += char;
                t.charCount++;
            } else {
                clearInterval(t.textInterval);
            }
        }, t.speed);
    
        window.setInterval(function() {
            t.cursorElem.hidden = t.cursorHidden;
            t.cursorHidden = !t.cursorHidden; 
        }, 440);
    }
}

/* Observer */
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
};
var _eeObserver = new IntersectionObserver(_typewritingObserver, options);

function _typewritingObserver(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            obj = _eeTypewriterDict[entry.target.id];
            if (obj) obj.start();
            observer.unobserve(entry.target);
        }
    });
}
