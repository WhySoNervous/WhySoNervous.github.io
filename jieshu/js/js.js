window.onload=function(){
    var imgArr=[
        {"path":"images/0E7B0CF7737BEFE0E9D95588209ABD71.png"},
        {"path":"images/5D0CE5B4FBA3FE66B1A3A31EA811A8F4.png"},
        {"path":"images/IMG_3109.jpg"},
        {"path":"images/IMG_3129.jpg"},
        {"path":"images/IMG_3130.jpg"},
        {"path":"images/IMG_3132.jpg"},
        {"path":"images/web作业视频照片材料F1392EB818DACE3FB61D90ADB69206C9.png"}
    ];
    var size=[
        {"top":60,"left":0,"width":200,"height":400,"zIndex":1,"opacity":0},
        {"top":60,"left":0,"width":200,"height":400,"zIndex":2,"opacity":40},
        {"top":30,"left":150,"width":400,"height":400,"zIndex":3,"opacity":70},
        {"top":0,"left":300,"width":600,"height":400,"zIndex":4,"opacity":100},
        {"top":30,"left":550,"width":500,"height":400,"zIndex":3,"opacity":70},
        {"top":60,"left":800,"width":400,"height":400,"zIndex":2,"opacity":40},
        {"top":60,"left":800,"width":100,"height":400,"zIndex":1,"opacity":0}
    ];
    var imgSum=imgArr.length;
    var wrap=document.getElementById('wrap');
    var cont=wrap.firstElementChild || wrap.firstChild;
    var btnArr=wrap.getElementsByTagName('a');
    var falg=true;
    var speed=7000;
    wrap.onmouseover=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='block';
        }
        clearInterval(wrap.timer);
    }
    wrap.onmouseout=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='none';
        }
        wrap.timer=setInterval(function(){
             move(true);
         },speed);
    }
    for (var i=0;i<imgSum;i++) {
        var lis=document.createElement('li');             
        // lis.style.cssText='top:'+size[i].top+'px;'+'left:'+size[i].left+'px;'+'width:'+size[i].width+'px;'+'z-index:'+size[i].zIndex+';'+'height:'
        // +size[i].height+'px;'+'opacity:'+size[i].opacity+';';
        lis.style.backgroundImage='url('+imgArr[i].path+')';
        cont.appendChild(lis);
    }
    var liArr=cont.children;
    move();
    wrap.timer=setInterval(function(){
        move(true);
    },speed);
    btnArr[1].onclick=function(){
        if (falg) {
            move(true);
        }
    }
    btnArr[0].onclick=function(){
        if (falg) {
            move(false);
        }
    }
    function move(bool){
        if(bool!=undefined){
            if(bool){
                size.unshift(size.pop());
            }else {
                size.push(size.shift());
            }
        }
        for (var i=0;i<liArr.length;i++) {
            animate(liArr[i],size[i],function(){
                falg=true;
            });
        }
    }
}