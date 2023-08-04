import axios from "axios"

export const postNewsData = async (data) => {
    const res = await axios.post("https://inshortclone-default-rtdb.firebaseio.com/" + "newsdata.json", { ...data });
    console.log(res);
}

export const getNewsData = () => {
    return axios.get("https://inshortclone-default-rtdb.firebaseio.com")
}