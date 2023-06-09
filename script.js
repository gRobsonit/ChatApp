import{ initializeApp }from"https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import{ getFirestore, orderBy, query, collection, doc, setDoc, onSnapshot,addDoc, Timestamp }from"https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig ={ 
    apiKey:"AIzaSyAQ9pCLKploVByyScEYnj3yMsoNFPIt14g",            
    authDomain:"ffinfchat.firebaseapp.com",            
    projectId:"ffinfchat",           
    storageBucket:"ffinfchat.appspot.com",            
    messagingSenderId:"787327787927",            
    appId:"1:787327787927:web:a63c242f4ba509f53c1ad2"
};

function updateMessages(messages) {
    let nachrichtenliste = document.getElementById("messages")
    nachrichtenliste.innerHTML = ""
    let nachrichtenHTML = ""
    messages.forEach(message => {
        nachrichtenHTML += `<div class="message"><div class="text">${message.message}</div><div class="author">${message.author}</div></div>`
    });
    nachrichtenliste.innerHTML+= nachrichtenHTML
}    

async function submitMessage() {
    let nachricht = document.getElementById("nachricht").value
    let username = document.getElementById("username").value
    if (username == "" || nachricht == "") {
        return
    }
        
    const docRef = await addDoc(collection(db, "messages"), {
        message: nachricht,
        author: username,
        timestamp: Timestamp.now(),
    });    
}

function syncMessages() {
    let messageContainer = document.getElementById("messages")
    let messages = messageContainer.childNodes;
    let username = document.getElementById("username").value
    
    messages.forEach(message => {
    let author = message.querySelector(".author").textContent;
    let nachricht = message.querySelector(".text").textContent;
    
    
    if (author == username) {
    message.classList.add("own")
    }
    
    });
    }
let inputField = document.getElementById("username")
inputField.addEventListener('input', syncMessages);
inputField.addEventListener('propertychange', syncMessages);
document.getElementById("submitButton").onclick = submitMessage;

const app =initializeApp(firebaseConfig);
const db =getFirestore();
const q =query(collection(db,"messages"),orderBy("timestamp"));
const unsubscribe =onSnapshot(q,(querySnapshot)=>{
    const messages =[];            
    querySnapshot.forEach((doc)=>{                
        messages.push(doc.data());
    
    });
    updateMessages(messages)
});