console.log('content ready!');

function getImgElement(inOvgElement){
    return inOvgElement.parentElement.querySelector('img');
}

function getVideoElement(inOvgElement){
    return inOvgElement.parentElement.querySelector('video');
}


$(document).on('mouseover','._ovg3g',function(){
    var el = getImgElement(this);
    console.log('IMG:->',el.src);
});

$(document).on('mouseover','._c2kdw',function(){
    var el = getVideoElement(this);
    console.log('VIDEO:->',el.src);
});
