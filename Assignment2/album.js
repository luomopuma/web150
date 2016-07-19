function Album(artist,album){
    this.album=album;
    this.artist=artist;

    this.getName = function(){
        return this.artist+" - "+this.album;
    }

    this.makeLi = function(){
        return "<li>"+this.getName()+"</li>";
    }

    this.appendList = function(){
        var newEl = document.createElement('li');
        var newText = document.createTextNode(this.getName());
        newEl.appendChild(newText);
        var position = document.getElementsByTagName('ul')[0];
        position.appendChild(newEl);
    }
}

var unwound = new Album("Unwound","Fake Trains");
var sonic = new Album("Sonic Youth", "Bad Moon Rising");
var unnatural = new Album("Unnatural Helpers", "Land Grab");

unwound.appendList();
sonic.appendList();
unnatural.appendList();


