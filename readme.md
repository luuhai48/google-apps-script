# Send Email Using Google Apps Script (GAS)

The script will **receive POST data**, containing: email address you want to send to, subject, and body of the email (HTML),
then it will send the email, very simple, no SMTP, no third-party or anything required.

## Installation

1. Go to [script.google.com](https://script.google.com/), create a new Project, create a new script in your project, paste the script provided, then **Save** it.
2. Select **Publish** -> **Deploy as web app**. Change **"Who has access to the app"** to **"Anyone, even anonymous"**. (Google will ask you to provide permission to run the script, just accept all).
3. Click **Deploy**,  and you will get the link to your app. Try send a GET/POST request to that link.

*Note:* Everytime you make a change to the script, make sure you **Save** it, **Deploy as web app** again, change the Project version to something else, then click **Deploy**.