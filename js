document.querySelectorAll(".right ul li").forEach(item =>{
    item.addEventListener("click",function(){
        const text = this.textContent.trim().toLowerCase();
        if(text === "about"){
            document.querySelector(".center").scrollIntoView({behavior:"smooth"});
        }
        else if(text === "projects"){
            document.querySelector(".grid").scrollIntoView({behavior:"smooth"})
        }
        else if(text == "contact"){
            document.querySelector(".link").scrollIntoView({behavior:"smooth"})
        }
    })
})

let btn = document.querySelector(".btn button");

btn.addEventListener("click",function(){
    this.textContent = "loading..."
    setTimeout(() => {
        this.textContent = "View My Work"
        document.querySelector(".grid").scrollIntoView({behavior:"smooth"})    
    },1000);
    
    
});





document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

    // reset
    nameError.classList.remove("error");
    emailError.classList.remove("error");


    if(name === ""){
        nameError.textContent = "Name is required";
        nameError.classList.add("error");
    }

    if(email === ""){
        emailError.textContent = "Email is required";
        emailError.classList.add("error");
    }

    if(name !== "" && email !== ""){
        alert("message sent successfully");
    }
});
