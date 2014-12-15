function sendRequest(){
	var response = document.getElementById('response');
    response.className = 'show';
    var responseAddress = document.getElementById('responseAddress');
    responseAddress.innerHTML = serviceAddress.value;
};

document.addEventListener('DOMContentLoaded', function(event) {
	document.getElementById('btnSend').addEventListener('click', sendRequest, false);
});