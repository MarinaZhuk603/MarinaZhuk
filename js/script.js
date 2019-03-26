jQuery(function($) {
    $(".grid").masonry({
        itemSelector:'.grid-item',
        columnWidth: 25
    })
})

//слайдер
$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider-for',
        cssEase: 'linear',
        prevArrow: '<div class="prev"><</div>',
        nextArrow: '<div class="next">></div>'
    });
});

//блок Our Services
const serviceText = {
        web_design: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptates, facilis tempora ad architecto, obcaecati maiores iste non laudantium perspiciatis cupiditate impedit dolorem fugiat numquam aliquam. Dignissimos consequuntur, aperiam! Quaerat nesciunt porro amet ipsa adipisci eius molestiae itaque, quas, sit ab vitae qui quisquam deleniti vel architecto sunt delectus libero veniam expedita beatae ad placeat distinctio voluptates perferendis. Excepturi beatae atque tempore nostrum veritatis, sit similique fugit maxime possimus sapiente ullam repellat tempora doloribus consequuntur veniam. Veritatis ullam odit, repudiandae earum suscipit error repellat repellendus ratione, et cupiditate quia!",
        graphic_design: "Illum voluptates, facilis tempora ad architecto, obcaecati maiores iste non laudantium perspiciatis cupiditate impedit dolorem fugiat numquam aliquam. Dignissimos consequuntur, aperiam! Quaerat nesciunt porro amet ipsa adipisci eius molestiae itaque, quas, sit ab vitae qui quisquam deleniti vel architecto sunt delectus libero veniam expedita beatae ad placeat distinctio voluptates perferendis. Excepturi beatae atque tempore nostrum veritatis, sit similique fugit maxime possimus sapiente ullam repellat tempora doloribus consequuntur veniam. Veritatis ullam odit, repudiandae earum suscipit error .Dignissimos consequuntur, aperiam!Dignissimos consequuntur, aperiam!",
        online_support: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptates, facilis tempora ad architecto, obcaecati maiores iste non laudantium perspiciatis cupiditate impedit dolorem fugiat numquam aliquam. Dignissimos consequuntur, aperiam! Quaerat nesciunt porro amet ipsa adipisci eius molestiae itaque, quas, sit ab vitae qui quisquam deleniti vel architecto sunt delectus libero veniam expedita beatae ad placeat distinctio voluptates perferendis. Excepturi beatae atque tempore nostrum veritatis, sit similique fugit maxime possimus sapiente ullam repellat tempora doloribus consequuntur veniam. Veritatis ullam odit, repudiandae earum suscipit error repellat repellendus ratione, et cupiditate quia!",
        app_design: "Dignissimos consequuntur, aperiam! Quaerat nesciunt porro amet ipsa adipisci eius molestiae itaque, quas, sit ab vitae qui quisquam deleniti vel architecto sunt delectus libero veniam expedita beatae ad placeat distinctio voluptates perferendis. Excepturi beatae atque tempore nostrum veritatis, sit similique fugit maxime possimus sapiente ullam repellat tempora doloribus consequuntur veniam. Veritatis ullam odit, repudiandae earum suscipit error repellat repellendus ratione, et cupiditate quia!",
        online_marketing: "Dignissimos consequuntur, aperiam!Dignissimos consequuntur, aperiam! Quaerat nesciunt porro amet ipsa adipisci eius molestiae itaque, quas, sit ab vitae qui quisquam deleniti vel architecto sunt delectus libero veniam expedita beatae ad placeat distinctio voluptates perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptates, facilis tempora ad architecto, obcaecati maiores iste non laudantium perspiciatis cupiditate impedit dolorem fugiat numquam aliquam.",
        seo_service: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatesExcepturi beatae atque tempore nostrum veritatis,Dignissimos consequuntur, aperiam! sit similique fugit maxime possimus sapiente ullam repellat tempora doloribus consequuntur veniam. Veritatis ullam odit, repudiandae earum suscipit error repellat repellendus ratione, et cupiditate quia!"
    };
         
 $(".list").click((e) => {
        $(".list-hover").removeClass("list-hover");
        $(e.target).addClass("list-hover");
        let nameKey = $('.list-hover').attr('data-name');
        $(".foto>img").attr("src", `img/service/${nameKey}.png`);
        switch (true) {    
            case nameKey == "web-design":
                $(".list_text").html(serviceText.web_design);
                break;
            case nameKey == "graphic-design":
                $(".list_text").html(serviceText.graphic_design);
                break;
            case nameKey == "online-support":
                $(".list_text").html(serviceText.online_support);
                break;
            case nameKey == "app-design":
                $(".list_text").html(serviceText.app_design);
                break;
            case nameKey == "online-marketing":
                $(".list_text").html(serviceText.online_marketing);
                break;
            case nameKey == "seo-service":
                $(".list_text").html(serviceText.seo_service);
                break;
        }
})


$(".load-foto").click((e) => {
     setTimeout(() => {
         $(".more-foto").css("display", "block");
     }, 2000);
});
$(".load-foto").click((e) => {
     setTimeout(() => {
         $(".load-foto").css("display", "none");
     }, 2000);
 });
$(".load-foto").click((e) => {
    $(".spinner").css("display", "block");
    setTimeout(() => {
        $(".spinner").css("display", "none");
    }, 2000);
    retern;
});


let loadBtnStatus = false;
let currentClass = false;
$(".amazing-list").click((e) => {
    currentClass = $(e.target).attr('data-filter');
    if (currentClass != "all") {
        $(`.${currentClass}`).fadeIn("fast");
        $(".filter-foto").not(`.${currentClass}`).css("display", "none");
    } else {
        $(".filter-foto").css("display", "block");
    }
});


$(".load-masonry").click((e) => {
     setTimeout(() => {
         $(".more-masonry").css("display", "block");
     }, 1000);
});
