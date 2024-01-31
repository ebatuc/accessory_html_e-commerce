// let date=new Date()
// tarih=date
// let tarih=document.getElementById("tarih")
function updateTime() {
    let date = new Date();
    let tarih = document.getElementById("tarih");
    let dateTime = date.toLocaleString();
    tarih.textContent = dateTime;
}
setInterval(updateTime, 1000);
updateTime();
