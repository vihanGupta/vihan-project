function send()
{
    user_name = document.getElementById("name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "index.html";
}   