function Books(name,type,author){
    this.name = name;
    this.type = type;
    this.author = author;
}


function DisplayBook() {

}
DisplayBook.prototype.add = function (newbook) {
    tableBody = document.getElementById('tableBody');
    let tableRows = `<tr>
                        <td>${newbook.name}</td>
                        <td>${newbook.author}</td>
                        <td>${newbook.type}</td>
                    </tr>`;
    tableBody.innerHTML += tableRows;
}



DisplayBook.prototype.clear = function () {
    let lForm = document.getElementById('lForm');
    lForm.reset();
}

DisplayBook.prototype.validate = function (newbook) {
    if (newbook.author.length < 2 || newbook.name.length <2 ) {
        return false;
    }else {
        return true;
        }
}


let lForm = document.getElementById('lForm');
lForm.addEventListener('submit', libraryFSubmit);

function libraryFSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bName').value;
    let author = document.getElementById('bAuthor').value;
    let type;
    let fiction = document.getElementById('fiction');
    let sports = document.getElementById('sports');
    let programming = document.getElementById('programming');


    if (fiction.checked) {
        type = fiction.value;
    }  else if (programming.checked)
    {
        type = programming.value;
    }
    else if (sports.checked) {
        type = sports.value;
    }

    let newbook = new Books(name,type,author);
    console.log(newbook);

    let display = new DisplayBook();

    if (display.validate(newbook)) {

        display.add(newbook);
        display.clear();
    }

}