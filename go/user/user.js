const mysay=document.querySelector('#mysay')
const username=document.querySelector('#username')
// 拿到本地存储user_name
localStorage.getItem("user_name")
mysay.innerHTML=`我叫做${localStorage.getItem("user_name")}，是一名大一新生。`
username.value=localStorage.getItem("user_name")