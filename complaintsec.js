let addB = document.getElementById("addB");
addB.addEventListener("click", function (e) {
    let addComp = document.getElementById("addComp");
    let comp = localStorage.getItem("comp");
    if (comp == null) {
        compObj = [];
    }else {
        compObj = JSON.parse(comp);
    }
    compObj.push(addComp.value);
    localStorage.setItem("comp", JSON.stringify(compObj));
    addComp.value = "";
    showComp();
});


function showComp() {
    let comp = localStorage.getItem("comp");
    if (comp == null) {
        compObj = [];
    } else {
        compObj = JSON.parse(comp);
    }
    let html = "";
    compObj.forEach(function (elements, index) {
        html += `

                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${elements}</p>
                        <button id="${index}"onclick="deleteComp(this.id)" class="btn1">Delete Comp</button>
                    </div>`;
    });
    let compElm = document.getElementById("comPlaints");
    if (compObj.length != 0) {
        compElm.innerHTML = html;
    } else {
        compElm.innerHTML = `No Complaints till yet`;
    }
}

// Function to delete a note
function deleteComp(index) {
    //   console.log("I am deleting", index);

    let comp = localStorage.getItem("comp");
    if (comp == null) {
        compObj = [];
    } else {
        compObj = JSON.parse(comp);
    }

    compObj.splice(index, 1);
    localStorage.setItem("comp", JSON.stringify(compObj));
    showComp();
}

