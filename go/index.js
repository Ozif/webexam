const go_content = document.querySelector("#GoPage .bottom_index .content .user .uname")
const go_buttom = document.querySelector("#GoPage .bottom_index .content .go a")
go_buttom.onclick = function (e) {
    e.preventDefault()
    if (go_content.value!= "") {
    // 获取用户名
    const user_name = go_content.value
    // 存储
    localStorage.setItem("user_name", user_name) 
    // 跳转
    location.href = "./user/userpage.html"
    }
    else {
        // 提示，焦点
        alert("请输入用户名")
        go_content.focus()
    }
}