const google = require('googleapis').google;
const oAuth2 = google.auth.OAuth2;

module.exports.auth = (req, res) => {
    const oauth2Client = new oAuth2(
        "690038228121-vqdpsb9eaviab64hfkqvu3muor47k9sh.apps.googleusercontent.com",
        "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",
        "https://localhost:3001/oauth2callback"
    )

    const loginLink = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: ["https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
    })
}