console.log('content ready!');

function getImgElement(inOvgElement){
    return inOvgElement.parentElement.querySelector('img');
}

function getVideoElement(inOvgElement){
    return inOvgElement.parentElement.querySelector('video');
}

// $(document).on('mouseover',function(){
//   console.log('mouse over!');
//   console.log(
//     $('._2di5p').length
//   );
// });

$(document).on('mouseover','._8n9ix',function(){
    var el = getImgElement(this);
    console.log('IMG:->',el.src);
});

$(document).on('mouseover','._usfov',function(){
    var el = getVideoElement(this);
    console.log('VIDEO:->',el.src);
});
