window.addEventListener('load', () => {
    //contain-left 鼠标事件
    const lead = this.document.querySelectorAll('.lead');
    for (let i = 0; i < lead.length; i++) {
        lead[i].addEventListener('mouseover', function() {
            lead[i].className = 'leader'
        })
        lead[i].addEventListener('mouseout', () => {
            lead[i].className = 'lead'
        })
    }
    //轮播图
    let left = this.document.querySelector('.arr-left');
    let right = this.document.querySelector('.arr-right');
    let bigBox = this.document.querySelector('.mid-image');
    let smallBox = this.document.querySelector('.dy');
    let bigBoxWidth = bigBox.offsetWidth;
    let li = this.document.querySelectorAll('.mid-image-li');
    for (let i = 0; i < li.length; i++) {
        li[i].setAttribute('index', i);
        li[i].addEventListener('click', () => {
            let index = li[i].getAttribute('index');
            num = index;
            animate(smallBox, -index * bigBoxWidth)
            for (let j = 0; j < li.length; j++) {
                li[j].className = 'mid-image-li';
            }
            li[i].className = 'change'
        })
    }
    let num = 0;
    let circle = 0;
    let first = smallBox.children[0].cloneNode(true);
    smallBox.appendChild(first);
    left.addEventListener('click', () => {
        if (num == 0) {
            num = 4;
        }
        num--
        if (circle == 0) {
            circle = 4;
        }
        circle--
        for (let j = 0; j < li.length; j++) {
            li[j].className = 'mid-image-li';
        }
        console.log(circle);
        li[circle].className = 'change'
        animate(smallBox, -num * bigBoxWidth);

    })
    right.addEventListener('click', () => {
        num++
        if (num == 4) {
            num = 0
        }
        circle++
        if (circle == 4) {
            circle = 0
        }
        for (let j = 0; j < li.length; j++) {
            li[j].className = 'mid-image-li';
        }
        li[circle].className = 'change';
        animate(smallBox, -num * bigBoxWidth);
    })

})