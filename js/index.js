var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul")
console.log(lists);
for (var i = 0; i < tabs.length; i++) {
    console.log(tabs[i]);
    tabs[i].onclick = showlist;
}

function showlist(){
    for( var i = 0; i < tabs.length ;i++  )
    if( tabs[i] === this){
        tabs[i].className = "active";
        lists[i].className = "clearfix active";
    }else{
        tabs[i].className = "";
        lists[i].className = "";
    }
}
// 以上是tabs的显示技术代码
var seckillNav = document.getElementById("seckill-nav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);
    if(scrollTop > 260){
        seckillNav.className = "seckill-navfixed seckill-nav";
    }else{
        seckillNav.className ="seckill seckill-nav";
    }
}




