//Typed.js
var typed = new Typed('#hi', {
    strings: [
        "你好！我是结城明日奈。",
        "你也可以叫我亚丝娜。",
        "我是川原砾轻小说《刀剑神域》系列的女主角。",
        "特长为烹饪。",
        "擅长的技能是单手细剑高等剑技“星屑飞溅”八连击、以及速度如同彗星般的“闪光穿刺”。",
        "并不傲娇，而是一位“凛然刚毅的女性”！"
    ],
    typeSpeed: 120,
    loop: true,
});

function goHome() {
    $("#home").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#homeの").show();
    $("#blogの").hide();
    $("#projectsの").hide();
}

function goBlog() {
    $("#blog").addClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#blogの").show();
    $("#homeの").hide();
    $("#projectsの").hide();

}

function goProjects() {
    $("#projects").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projectsの").show();
    $("#blogの").hide();
    $("#homeの").hide();
}