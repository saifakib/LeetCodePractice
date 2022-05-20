/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let splited = address.split(".");
    let joined = splited.join('[.]');
    return joined;
};