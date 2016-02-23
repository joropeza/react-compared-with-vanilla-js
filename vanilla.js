
var button = document.getElementById('wordButton');
var target = document.getElementById('word');

button.onclick = function(){
        target.innerHTML= window.chance.string();
        return false;
    };
