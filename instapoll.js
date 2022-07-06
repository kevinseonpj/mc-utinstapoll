function play() {
    var audio = new Audio(
    //Paste in anything you want, I was too lazy so I just used one I found in few clicks
    'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
}
function check() {
    // console.log("test message")
    button = document.getElementsByClassName("btn btn-primary");
    if (button.length > 0) play()
}

function run() { 
    // checks every 5 sec
    check(); setTimeout(run, 5000); 
}
run();