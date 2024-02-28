let lst = document.querySelectorAll('td')
console.log(lst)

lst.forEach((elem) =>  {
    elem.addEventListener('mouseover', function (e) {
        e.target.style.background = '#fbf2e9';
    })
    elem.addEventListener('mouseout', function (e) {
        e.target.style.background = '';
    })
});