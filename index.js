function RequestInfo(address, userId, data) {
    "use strict";
    this.address = address;
    this.userId = userId;
    this.data = data;
}

var requestInfo = new RequestInfo(document.getElementById('serviceAddress').value, document.getElementById('userId').value, document.getElementById('reqData').value);

function sendRequest(request) {
    "use strict";
    document.getElementById('response').className = 'show';
    document.getElementById('responseAddress').innerHTML = request.address;
    document.getElementById('responseUserId').innerHTML = request.userId;
    document.getElementById('responseData').innerHTML = request.data;
}

document.addEventListener('DOMContentLoaded', function (event) {
    "use strict";
	document.getElementById('btnSend').addEventListener('click', function () {sendRequest(requestInfo); }, false);
});