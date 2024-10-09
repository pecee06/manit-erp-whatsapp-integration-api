const date = new Date()

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

export default getTemplateMessageInput