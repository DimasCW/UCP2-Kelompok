//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

// javascript.js

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Kirim pesan ke server atau tampilkan pesan di sini
    console.log("Nama: " + name);
    console.log("Email: " + email);
    console.log("Pesan: " + message);
  
    // Reset form setelah pengiriman
    document.getElementById("contactForm").reset();

    var message = "Nama: " + name + "\n" +
                "Email: " + email + "\n" +
                "Pesan " + message + "\n" +

     alert(message);
  
  });
  
function kirimdata(){
  
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  

    alert(
      "Nama: " + nama +
      "\nEmail: " + email +
      "\nPesan: " + message
    );
  };
  
  
   