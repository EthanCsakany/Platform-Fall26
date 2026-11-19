console.log(document);

function testTheDOM() {
    console.log("inside testTheDOM");
    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for (let node of nodes) {
        console.log(node);
        console.log(node.innerHTML);
        console.log(node.textContent);
    }
    var cbm = document.getElementById("checkingBalance")
    console.log("cbm is " + cbm.textContent);
    //cbm.textContent = "CHANGED"
    var cbm_value = parseInt(cbm.textContent);
    cbm_value += 100; 
    cbm.textContent=cbm_value;

}

function depositChecking() {
    var balance = document.getElementById("checkingBalance");
    newbalance = parseInt(balance.textContent,10);
    newbalance += 100; 
    balance.textContent=newbalance;
}

function depositSavings() {
    var balance = document.getElementById("savingsBalance");
    newbalance = parseInt(balance.textContent,10);
    balance.textContent=newbalance;
    if (newbalance == 0) {
        var title = document.getElementById("bankAccountTitle");
        title.textContent="Bank Account";
    }
    newbalance+=100;
    balance.textContent=newbalance;
}

function emptySavings() {
    var td = document.getElementById("savingsBalance");
    td.textContent=0;
    var title = document.getElementById("bankAccountTitle");
    title.textContent="ALERT: Savings Empty"
}

