// link to game 1
function newGame() {
    window.open("boter-kaas-eieren.html", "_self");
  }

// audio playlist
function audioPlayer() {
    let currentSong = 0;

    const imageArray = [
        "Images/my patch.jpeg",
        "Images/left bank two.jpeg",
        "Images/fireworks.jpeg",
        "Images/viva la vida.jpeg",
        "Images/The Spectre.jpeg",
        "Images/Cadmium.jpg",
    ];

    $("#albumArt").attr("src", imageArray[currentSong]);

    $("#audioPlayer")[0].src = $("#playlist li a")[0].href;
    $("#audioPlayer")[0].play();

    $("#playlist li a").click(function (e) {
        e.preventDefault();
        $("#audioPlayer")[0].src = this.href;
        $("#audioPlayer")[0].play();

        currentSong = $(this).parent().index();
        $("#albumArt").attr("src", imageArray[currentSong]);

        $("#playlist li").removeClass("current-song");
        $(this).parent().addClass("current-song");
    });

    $("#audioPlayer")[0].addEventListener("ended", function () {
        currentSong++;
        if (currentSong == $("#playlist li a").length) {
            currentSong = 0;
        }

        $("#albumArt").attr("src", imageArray[currentSong]);

        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq(" + currentSong + ")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}

audioPlayer();

// discord
function discord() {
    window.open("https://discord.com/channels/@me/741058902048637018", "_blank");
}

// github

function github() {
    window.open("https://github.com/MikevdVeer", "_blank");
}
