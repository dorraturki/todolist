// todo : add the close button
    let lists = document.getElementsByTagName('li')
    for (let i = 0; i < lists.length; i++) {
        let span = document.createElement('span')
        let txt = document.createTextNode('\u00d7')
        span.appendChild(txt)
        span.classList = 'close'
        lists[i].appendChild(span)
    }
// todo : hide the elemnt when the close btn
    let closed = document.getElementsByClassName('close')
    for (let i = 0; i < closed.length; i++) {
        closed[i].addEventListener(
            'click' , function() {
                this.parentElement.style.display = 'none'
            } , false
        )
    }
// todo : check the element when click
    for (let i = 0; i < lists.length; i++) {
       lists[i].onclick = function() {
           this.classList.toggle('checked')
       }   
    }
// todo : add a new element  when add clicked (with a working close btn)
    function addElement() {
        let txt = document.getElementById('myInput').value
        let li = document.createElement('li')
        let texte = document.createTextNode(txt)
        li.appendChild(texte)
        let myul = document.getElementById('myUL')
        if (txt === ''){
            alert('Write smth')
        } else {
            myul.appendChild(li)
            document.getElementById('myInput').value = ''
        }
        let span = document.createElement('span')
        let text = document.createTextNode('\u00d7')
        span.appendChild(text)
        span.classList = 'close'
        li.appendChild(span)
        span.onclick = function() {
            this.parentElement.style.display = 'none'
        }
        li.onclick = function() {
            this.classList.toggle('checked')
        }
    }
    // * Call function
    let btn = document.getElementById('add')
    btn.onclick = addElement
