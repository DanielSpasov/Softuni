function solve() {

    let messageContent = document.getElementById('chat_input')
    let sendBtn = document.getElementById('send')

    sendBtn.addEventListener('click', () => {

        let chatMessagesDiv = document.getElementById('chat_messages')
        let myNewMessage = document.createElement('div')

        myNewMessage.textContent = messageContent.value
        myNewMessage.className = 'message my-message'

        chatMessagesDiv.appendChild(myNewMessage)
        messageContent.value = ''
    })
}


