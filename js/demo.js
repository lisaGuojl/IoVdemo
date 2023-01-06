// setTimeout(() => {
//     document.getElementById('sendtask').style.visibility = 'visible';
// }, 0);
setTimeout(() => {
    document.getElementById('encdocs').style.visibility = 'visible';
    document.getElementById('key').style.visibility = 'visible';
}, 2000);

setTimeout(() => {
    document.getElementById('subscribe').style.visibility = 'visible';
    document.getElementById('subscribebox').style.visibility = 'visible';
}, 5000);

setTimeout(() => {
    document.getElementById('subscribe').style.visibility = 'hidden';
    document.getElementById('subscribebox').style.visibility = 'hidden';
    document.getElementById('getsk').style.visibility = 'visible';
    // document.getElementById('subscribebox').style.visibility = 'visible';
}, 10000);

setTimeout(() => {
    document.getElementById('encdocs').style.visibility = 'hidden';
    document.getElementById('key').style.visibility = 'hidden';
    document.getElementById('getsk').style.visibility = 'hidden';
    document.getElementById('showsk').style.visibility = 'visible';
}, 14000);


var date = new Date();
var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
var clock = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + " " + hour + ":" + minute + ":" + second;
document.getElementById("clock").innerHTML = clock
// setTimeout(() => {
//     document.getElementById('getkey').style.visibility = 'visible';
// }, 2000);

setTimeout(() => {
    document.getElementById('envsensor').style.visibility = 'visible';
}, 16000);

setTimeout(() => {
    document.getElementById('senseres').style.visibility = 'visible';
    document.getElementById('txt').style.visibility = 'visible';
}, 18000);

setTimeout(() => {
    document.getElementById('senseres').style.visibility = 'visible';
    document.getElementById('txt').style.visibility = 'visible';
    type(
        document.getElementById('txt'),
        ["Task criticality", "Rate of transaction price", "RSU transaction price", "Available bandwidth", "Cost to find RSU", "Road condition", "No. of peers nearby"],
        500
    );
}, 18000);

function type(div, textArray, interval) {
    div.innerHTML = '';
    let i = 0;
    let timer_id = setInterval(() => {
        let text = textArray[i];
        if (text === undefined) {
            clearInterval(timer_id);
            return;
        }
        div.innerHTML += "<br>" + text;
        i++;
    }, interval)
}

setTimeout(() => {
    document.getElementById('compare').style.visibility = 'visible';
    document.getElementById('envsensor').style.visibility = 'hidden';
}, 23000);

setTimeout(() => {  
    document.getElementById('taskpublish').style.visibility = 'visible';
}, 24000);

setTimeout(() => {  
    document.getElementById('compare').style.visibility = 'hidden';
    document.getElementById('senseres').style.visibility = 'hidden';
    document.getElementById('txt').style.visibility = 'hidden';
    
    document.getElementById('market').style.visibility = 'visible';
    document.getElementById('sendtask').style.visibility = 'visible';
},26000);


setTimeout(() => {  
    document.getElementById('sendtask').style.visibility = 'hidden';
    document.getElementById('showtask').style.visibility = 'visible';
}, 29000);


setTimeout(() => {  
    document.getElementById('showpeer').style.visibility = 'visible';
}, 31000);
setTimeout(() => {  
    document.getElementById('ask').style.visibility = 'visible';
}, 32000);
setTimeout(() => {  
    document.getElementById('answer').style.visibility = 'visible';
}, 33500);

setTimeout(() => {  
    document.getElementById('ask').style.visibility = 'hidden';
    document.getElementById('answer').style.visibility = 'hidden';
    document.getElementById('handshake').style.visibility = 'visible';
}, 34000);

setTimeout(() => {  
    document.getElementById('complete').style.visibility = 'visible';
    document.getElementById('handshake').style.visibility = 'hidden';
    document.getElementById('senddocs').style.visibility = 'visible';
}, 36000);

jQuery(function(){
    setTimeout(function(){
      jQuery(".loader").addClass("active");
    },38000);
 });

 setTimeout(() => {  
    document.getElementById('market').style.visibility = 'hidden';
    document.getElementById('showtask').style.visibility = 'hidden';
    document.getElementById('senddocs').style.visibility = 'hidden';
    document.getElementById('complete').style.visibility = 'hidden';
    document.getElementById('showpeer').style.visibility = 'hidden';
    document.getElementById('peerleave').style.visibility = 'visible';
 }, 39000);

 setTimeout(() => {
    document.getElementById('showsk').style.visibility = 'hidden';  
    document.getElementById('decfile').style.visibility = 'visible';
}, 39000);

setTimeout(() => {
    document.getElementById('showdecfile').style.visibility = 'visible';
}, 42000);

setTimeout(() => {
    document.getElementById('done').style.visibility = 'visible';
}, 42000);