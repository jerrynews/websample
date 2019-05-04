function thefun(){
        document.getElementById("buton").innerHTML = userName;
        document.getElementById("div1").style.display = "block";
    var name;
    name = document.getElementById("id1");
    name.innerHTML = usersName;
    name.style.color = "black";
    name.style.fontSize = "2vw";
    name.style.textAlign = "center";
        if(userName == null || userName == "") {
            document.getElementById("buton").innerHTML = "No username";
            name.innerHTML =  ("You are welcome! "+userName);
            document.getElementById("div1").style.display = "none";
            return false;
        }
    }
    var userName;
    userName = prompt("What is your name?");
    var usersName = ("You are welcome! "+userName+".");
        alert("Welcome! "+userName+".")
    console.log("Nice to meet you " +userName);

    function thefuncy() {
        document.getElementById("buton").innerHTML = "User Name";
        var obj;
        obj = document.getElementById("div1");
        obj.style.display = "none";
        var obj2 = document.getElementById("id1");
        obj2.innerHTML = ("You are welcome!");
        var obj3 = document.getElementById("div2");
        obj3.style.display = "none";
    }

    function thefuncn() {
        document.getElementById("div2").style.display = "none"
        document.getElementById("div1").style.display = "none"
        
    }

    function dis() {
        document.getElementById("div2").style.display = "inline";
    }
