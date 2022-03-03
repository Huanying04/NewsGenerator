const client = "ec8ffaccd7fb4be";
var currentImage = "";

async function upload(data) {
    data = data.replace(/(data:image\/).*(;base64,)/, "");
    await $.ajax(
        {
            type: "POST",
            url: "https://api.imgur.com/3/image",
            headers: {
                "Authorization": "Client-ID " + client
            },
            "data": {
                "image": data,
                "album" : "",
                "type": "base64",
                "name": "",
                "title": "",
                "description": ""
            },
            success: async function(res) {
                console.log(res.data.link);
                currentImage = res.data.link;
            },
            error: function(res) {
                console.log(res);
            }
        }
    );
}