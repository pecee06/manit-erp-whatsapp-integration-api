import axios from "axios"

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

export default sendMessage