function type() {
    let myName = "Pearl Phahlane"
    let nameArr = myName.split("");

    function looping() {
        if(nameArr.length>0) {
            let n = nameArr.shift();
            document.getElementById("main-heading").innerHTML+=n;
        } else {
            return false;
        }
        setTimeout(looping, 500);
    }
    looping()
}
type()

/*function deleting(){

    nameVisible = document.getElementById("main-heading").innerHTML.split("");
    if(nameVisible.length>0){
        nameVisible.pop();
        document.getElementById("main-heading").innerHTML = nameVisible.join("");
    } else {
        type();
        return false
    }
    setTimeout(deleting,500)
}
type()*/

