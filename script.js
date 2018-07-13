
$(document).ready(function(){


    $('#divContainer').on({
    mouseover :function(){
    
        $(this).css({
            'cursor' :'pointer',
            'border-color' : 'red'
        }
        );
    },
    mouseout:function(){
    $(this).css({
        'cursor' : 'default' ,
        'border-color' :'greenyellow'
    
    });
        
    } ,
    
    click : function(){
    var imageUrl = $(this).attr('src');
    var effect=$('#imageEffect').val();
    var duration=parseInt($('#imgDuration').val() * 1000);
    //alert(duration);
    var image=$('#mainImage');
    if(effect=='fade'){
    
    image.fadeOut(duration,function(){
    
    $(this).attr('src',imageUrl);
    
    }).fadeIn(duration);
        
    }else{
    image.slideUp(duration,function(){
    
    $(this).attr('src',imageUrl);
    
    }).slideDown(duration);
        
    }
    
    }
    
    
    },'img');
    
    
    var img=$('#mainImage');
    var h=parseInt(img.css('height'));
    //alert(h)
    
    var w=parseInt(img.css('width'));
    
    $('#Enlarge').click(function(){
    h+=100;
    w+=100;
    img.animate({
    'height':h,
    'width' :w
    });
    });
    
    $('#shrink').click(function(){
    h-=100;
    w-=100;
    img.animate({
    'height':h,
    'width' :w
    });
    
    });
    
    var start =$('#startSlide');
    var stop =$('#stopSlide');
    var imageURL =new Array();
    var intervalId;
    
    
    $('#divContainer img').each(function(){
     var i=$(this).attr('src');
    imageURL.push(i);
    
    //alert(imageURL.length)
    
    });
    //alert(imageURL.length)
    
    function setImage (){
        var m=$('#mainImage');
       var cUrl=m.attr('src');
       var cIndex=$.inArray(cUrl,imageURL);
       if(cIndex==imageURL.length-1){
           cIndex=-1;
       }
       m.attr('src',imageURL[cIndex+1]);
    }
    
    start.click(function(){
    intervalId=setInterval(setImage,1000);
    $(this).attr('disabled','disabled');
    stop.removeAttr('disabled');
    });
    
    stop.click(function(){
    clearInterval(intervalId);
    $(this).attr('disabled','disabled');
    start.removeAttr('disabled');
    
    
    }).attr('disabled','disabled');
    
    });
    