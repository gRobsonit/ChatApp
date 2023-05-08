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
    let nachrichtenliste = document.getElementById("nachrichten")
    nachrichtenliste.innerHTML = ""
    nachrichtenHTML = ""
    messages.forEach(messages => {
        nachrichtenHTML += '<li class="messages">${messages.text} - $
        {messages.username}</li>'
    }
}    





function submitMessage() {
    text = document.getElementById("messages").value
    username = document.getElementById("username").value
    if (username == "" || text == "") {
        return

        messages.push({
            text: text,
            username: username
        })
        
        updateMessages()
    }}

document.getElementById("submitButton").onclick = submitMessage;