//Adding an on click event listener for UI items
document.getElementById("navbar-container").addEventListener("click", function(event) {
  console.log(`Clicked ${event.target}`);
});
//Getting nav bar from files dir
fetch("navbar.html")
  .then(response => response.text())
  .then((data)=>{
    // console.log(data);
    document.getElementById("navbar-container").innerHTML = data;
  })
  .catch(
    (error)=>{
      console.log(error);
      document.getElementById("navbar-container").innerHTML = "Nav Bar Not Found(404)";
    }
  );
  //Getting footer
  //Getting nav bar from files dir
fetch("footer.html")
.then(response => response.text())
.then((data)=>{
  // console.log(data);
  document.getElementById("footer").innerHTML = data;
})
.catch(
  (error)=>{
    console.log(error);
    document.getElementById("footer").innerHTML = "Footer Not Found(404)";
  }
);
//Theme transition 
console.log(document.getElementById("themeToggle"));
document.getElementById("themeToggle")?.addEventListener("click", () =>
  {
    document.body.classList.toggle("dark-theme");
  });
  console.log("Who!!!!!!!");
  //Contact Form
  document.getElementById("contactForm")?.addEventListener("submit", 
      (e)=> { 
        console.log("Why!!!!!!!");
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();
          if (name === "" || message === "") {
            console.log("THe!!!!!!!");
            alert("Please fill out all fields.");
          } else {
            document.getElementById("response").innerText = `Thanks, ${name}.We'll get back to you soon!`;
            // Optional: reset form
            e.target.reset();
        }
      });

      //Remote
      document.getElementById("loadUsersBtn")?.addEventListener("click",
        async () => {
          console.log("Button!!!!!!!");
        try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();
            const userList = document.getElementById("userList");
            userList.innerHTML = "";
            users.forEach(user => {
              const li = document.createElement("li");
              li.textContent = user.name;
              userList.appendChild(li);
            });
        } catch (err) {
        console.error("Failed to load users:", err);
        }
        });
        //Query Selector
        document.querySelectorAll(".question")
        .forEach(
          (q) => {
            q.addEventListener("click", () => {
              q.nextElementSibling.classList.toggle("visible");
            })
        });