// find element by id
function e(id) { return document.getElementById(id) }

//create element by specified type or craete a DIV
function c(et = 'DIV') { return document.createElement(et) }

function ce(ob) { 
    const el = c(ob.e)
      if(ob.i) { a(el, 'id', ob.id) }
      if(ob.c) { a(el, 'class', ob.cl) }
      if(ob.t) { t(el, ob.t) }
      if(ob.a) { ao(el, ob.a) }
      if(ob.s) { ss(el, so(ob.so)) }
      if(ob.ih) { ih(el, ob.ih) }
      if(ob.oh) { oh(el, ob.oh) }
      if(ob.e && ob.e.length) { for(ch of ob.e) { ae(el, ce(ch)) } }
    return el
}

// create object from element
function co(el) {
    var o = {}
      o.e = el.nodeName
      if(el.attributes.length) {
          o.a = {}
          for(attr of el.attributes) {o.a[attr.name] = attr.value}
      }
      if(el.children.length) {
          o.c = []
          for(ch of el.children) {o.c.push(co(ch))}
          const cln = el.cloneNode(true)
          const cl = cln.children.length
          for(var i = 0; i < cl; i++) { cln.children[0].remove() }
          if(cln.innerText && cln.innerText.length) { o.t = cln.innerText.trim()}
      }
      else if(el.innerText && el.innerText.length ) { o.t = el.innerText.trim()}
    return o
}

// set attribute
function a(el, at, va) { el.setAttribute(at, va) }

// set elements inner text
function t(el, text) { el.innerText = text || '' }

// set attributes from object (use _ instead of -)
function ao(el, ob) { for(at in ob) { a(el, at, ob[at].replace(/_/g, '-')) } }

// set style
function ss(el, st) { a(el, 'style', st) }
                        
// set styles from object.
// _ gets replaced with -
function so(ob) {
    var st = ''
    for(s in ob) { st += s + ':' + ob[s] + '; ' }
    return st.replace(/_/g, '-')
}

// add element to element (as the last)
function ae(el, ch) { el.append(ch) }
                     
// insert element as the first element
function ie(el, ch) { el.prepend(ch) }         
                     
// set elements inner html
function ih(el, h) {el.innerHTML = h}
                     
// set elements outer html
function oh(el, h) {el.outerHTML = h}

// local storage (data)
// set data
function ds(ke, va) { window.localStorage.setItem(ke, va)}
                     
// get data
function dg(ke) { return window.localStorage.getItem(ke)}
                     
// set object as data string
function dso(ke, ob) { window.localStorage.setItem(ke, JSON.stringify(ob))}
                     
// get data string as object
function dgo(ke) { return JSON.parse(window.localStorage.getItem(ke))}

// get parent element
function p(el) { return el.parentNode }
                     
// get grandparent element
function gp(el) { return p(el.parentNode) }

// get all siblings
function si(el) { return p(el).children }
                     
// query the document and return first match
function q(qu) { return document.querySelector(qu) }
                     
// query the document and return all matches
function qa(qu) { return document.querySelectorAll(qu) }

// query element and return first match
function qe(el, qu) { return el.querySelector(qu) }
                     
// query element and return all matches
function qea(el, qu) { return el.querySelectorAll(qu) }
