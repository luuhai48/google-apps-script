/**
 *  Handle GET request
 */
function doGet(e) {
    if(typeof e !== 'undefined')
      return ContentService.createTextOutput(JSON.stringify({message: "Hello!"}));
}

/**
 *  Handle POST request
 */
function doPost(e) {
    if(typeof e !== 'undefined') {
        var params = e.parameter;
        if (!params.email || !params.subject || !params.body)
            return ContentService.createTextOutput(JSON.stringify({message: "Failed! Not Enough Args"}));
        
        try {
            // Send Email With HTML as Body
            MailApp.sendEmail({
                to: parms.email,
                subject: parms.subject,
                htmlBody: parms.body
            });
            return ContentService.createTextOutput(JSON.stringify({message: "Successed!"}));
        }
        catch (e) {
            return ContentService.createTextOutput(JSON.stringify({message: "Failed!", errors: e}));
        }
    }
    return ContentService.createTextOutput(JSON.stringify({message: "Failed!"}));
}
