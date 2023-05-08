let messages = [
    {
        author: "Ding",
        message: "Hallo zusammen"
    },
    {
        author: "Dong",
        message: "Hallo zurück"
    }
]

function updateMessages() {
    let nachrichtenliste = document.getElementById("messages")
    nachrichtenliste.innerHTML = ""
    nachrichtenHTML = ""
    messages.forEach(message => {
        nachrichtenHTML += `<li class="messages">${message.text} - ${message.username}</li>`
    });
    nachrichtenliste.innerHTML+= nachrichtenHTML 
}    





function submitMessage() {
    let nachricht = document.getElementById("nachricht").value
    let username = document.getElementById("username").value
    if (username == "" || nachricht == "") {
        return
    }
        messages.push({
            nachricht: nachricht,
            username: username
        })
        
        updateMessages()
    
}

