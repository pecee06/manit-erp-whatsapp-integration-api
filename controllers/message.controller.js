import axios from "axios"
const date = new Date()

const sendMessage = async (data)=>{
    try {
        const res = await axios({
            method: "post",
            url: `https://graph.facebook.com/${process.env.API_VERSION}/${process.env.BUSINESS_PHONE_NO_ID}/messages`,
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`,
                "Content-Type:": "application/json"
            },
            data
        })

        return res
    } catch (error) {
        throw error
    }
}

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

const getTemplateMessageInput = (recipientNo, recipientName, dueAmount, dueDate={
        day:date.getDay(),
        month:date.getMonth(),
        year:date.getFullYear()}
    )=>{
    const msg = JSON.stringify({
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": recipientNo,
    "type": "template",
    "template": {
        "name": "manit_fee",
        "language": {
        "code": "en_US"
        },
        "components": [{
            "type": "body",
            "parameters": [
                {
                    "type": "text",
                    "text": recipientName
                },
                {
                    "type": "amount",
                    "amount": {
                    "fallback_value": dueAmount,
                    "code": "INR"
                    }
                },
                {
                    "type": "date",
                    "date": {
                    "fallback_value": `${dueDate.month} ${dueDate.day}, ${dueDate.year}`
                    }
                }
            ]
        }]
    }})

    return msg
}

export {sendMessage, getTextMessageInput, getTemplateMessageInput}