/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    // Use new Set() where every value are unique
//     let output = new Set();
//     emails.forEach((email) => {
//         let [local, domail] = email.split("@");
//         local = local.split("+")[0].split(".").join("");
//         output.add(local+'@'+domail);
//     });
    
//     return output.size;
    return new Set(emails.map((email) => {
        let [local, domain] = email.split("@");
        local = local.split("+")[0].split(".").join("");
        return `${local}@${domain}`;
    })).size;
};
