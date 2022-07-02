document.querySelector('#search').oninput = function() {

        /* get value from input 
        the search goes all over the site in paragraphs*/

        let val = this.value.trim();
        let searchItems = document.querySelectorAll('body p');

        /* input check */

        if (val != '') {
            searchItems.forEach(function(elem) {


                if (elem.innerText.search(val) == -1) {
                    elem.classList.add('hide');
                    elem.innerHTML = elem.innerText;
                } else {
                    /*   loop through all elements in body paragraphs */
                    elem.classList.remove('hide');
                    let str = elem.innerText;
                    elem.innerHTML = inserMark(str, elem.innerText.search(val), val.length);
                }
            })
        } else { /*  hide unwanted elements */
            searchItems.forEach(function(elem) {
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            })

        }
        console.log(val)
    }
    /*mark found material */

function inserMark(string, pos, len) {
    return string.slice(0, pos) + "<mark>" + string.slice(pos, pos + len) +
        "</mark>" + string.slice(pos + len);
}