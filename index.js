function RequestInfo(address, userId, data) {
    "use strict";
    this.address = address;
    this.userId = userId;
    this.data = data;
}

function sendRequest(RequestInfo) {
    "use strict";
    document.getElementById('response').className = 'show';
    document.getElementById('responseAddress').innerHTML = RequestInfo.address;
    document.getElementById('responseUserId').innerHTML = RequestInfo.userId;
    document.getElementById('responseData').innerHTML = RequestInfo.data;
}

document.addEventListener('DOMContentLoaded', function (event) {
    "use strict";
    var requestInfo = new RequestInfo(serviceAddress.value, userId.value, reqData.value);
	document.getElementById('btnSend').addEventListener('click', sendRequest(RequestInfo), false);
});