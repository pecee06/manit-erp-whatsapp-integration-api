const getTextMessageInput = (recipientNo, body, btnText, btnURL)=>{
    // This message can only be sent if the "user initiated conversation" is active (which remains active till 24 hrs of last message sent by receiver)

    const msg = JSON.stringify({
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": recipientNo,
    "type": "interactive",
    "interactive": {
        "type": "cta_url",
        "body": {
        "text": body
        },
        "action": {
            "name": "cta_url",
            "parameters": {
                "display_text": btnText,
                "url": btnURL
            }
        }
    }})

    return msg
}

export default getTextMessageInput