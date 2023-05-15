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
const app =initializeApp(firebaseConfig);
const db =getFirestore();
// Eine Anfrage definieren
const q =query(collection(db,"messages"),orderBy("timestamp"));

const unsubscribe =onSnapshot(q,(querySnapshot)=>{
    const messages =[];            
    querySnapshot.forEach((doc)=>{                
        messages.push(doc.data());
    
    });
    updateComments(messages)
});


