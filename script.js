let btn = document.querySelector("button");
let h4 = document.querySelector("h4");
let img = document.querySelector("img");

let flag = 0;

btn.addEventListener("click", function () {
    if (flag == 0) {
        h4.innerHTML = "Request..";
        h4.style.color = "Orange";
        btn.innerHTML = "Adding..";
        img.style.borderColor = "Orange";

        setTimeout(function () {
            h4.innerHTML = "Friends";
            btn.innerHTML = "Unfollow";
            h4.style.color = "Green";
            img.style.borderColor = "Green";
            flag = 1;  
        }, 3000);
    } else {
            h4.innerHTML = "Stranger";
            btn.innerHTML = "Follow";
            h4.style.color = "Red";
            img.style.borderColor = "Red";
            flag = 0;     
    }
});
