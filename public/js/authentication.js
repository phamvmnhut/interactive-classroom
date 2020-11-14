function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = $(".tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";
}

// Get the element with id="defaultOpen" and click on it
$(document).ready(function () {
    $("#student-tab").click();
});


$("#teacherlogin").click(() => {
    $("#login-tab").click();
});

$("#signup").click(() => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String($("#email").val()).toLocaleLowerCase()));
    if (!re.test(String($("#email").val()).toLocaleLowerCase())) {
        $("#email").css("border-color", "red");
    } else {
        $("#email").css("border-color", "");
    }

});



