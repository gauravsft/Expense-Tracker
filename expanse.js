
showfn();
document.querySelector("#Submit").addEventListener("click", outputfn);

function outputfn() {
    event.preventDefault();
    let output = localStorage.getItem("output");
    if (output == null) {
        objout = [];
    } else {
        objout = JSON.parse(output);
    }
    var obj = {
        month: document.getElementById("select").value,
        income: document.getElementById("inc").value,
        expance: document.getElementById("exp").value,
        saving: document.getElementById("inc").value - document.getElementById("exp").value,
    }
    objout.push(obj);
    localStorage.setItem("output", JSON.stringify(objout));



    showfn();
}


function showfn() {

    let output = localStorage.getItem("output");
    if (output == null) {
        objout = [];
    } else {
        objout = JSON.parse(output);
    }
    document.querySelector("#container ").innerText = "";
    objout.forEach(function (monthly) {


        var box = document.createElement("div");
        box.id = "out";

        var mh = document.createElement("h2");
        mh.style.textAlign = "center";
        mh.innerText = monthly.month;
        var ie = document.createElement("p");
        ie.style.textAlign = "center";
        ie.innerText = "Income of Rs :" + monthly.income;
        var ee = document.createElement("p");
        ee.style.textAlign = "center";
        ee.innerText = "Expense of Rs :" + monthly.expance;
        var sg = document.createElement("p");
        sg.style.textAlign = "center";
        sg.innerText = "Saving of Rs :" + monthly.saving;

        box.append(mh, ie, ee, sg);
        document.querySelector("#container").append(box)
    });

}

