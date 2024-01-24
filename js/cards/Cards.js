var visibleId = null;

function showCards(id) {
    if(visibleId !== id) {
        visibleId = id;
    } 
      closeCards();
   }

var divs = [
'card001_010', 'card011_020', 'card021_030', 'card031_040','card041_050',
'card051_060', 'card061_070', 'card071_080', 'card081_090','card091_100',
'card101_110', 'card111_120', 'card121_130', 'card131_140','card141_150',
'card151_160', 'card161_170', 'card171_180', 'card181_190','card191_200',
'card201_210', 'card211_220', 'card221_230', 'card231_240','card241_250',
'card251_260', 'card261_270', 'card271_280', 'card281_290','card291_300',];

function closeCards() {
    for(var i = 0;i < divs.length; i++){
        var id = divs[i];
        var div = document.getElementById(id);
        if(div != null)
        {
            if(visibleId === id) {
                div.style.display = '';
            } else {
                div.style.display = 'none';
            }
        }
    }

    //回到頂部
    pageScroll();
}

//---------------------------------------------------------------------------------//

//選得要瀏覽的效果
function showEffect(effect)
{
    document.getElementById('effect_field').innerText=effect;
}

//---------------------------------------------------------------------------------//

//回到頂部
function pageScroll() {

    timer=setInterval(function(){ 
        //設定一個計時器 
        var ct = document.documentElement.scrollTop || document.body.scrollTop; 
        //獲取距離頂部的距離 
        ct-=10; 
        if(ct>0){
            //如果與頂部的距離大於零 
            window.scrollTo(0,ct);
            //向上移動10px } 
        }else{
                //如果距離小於等於零 
                window.scrollTo(0,0);
                //移動到頂部 
                clearInterval(timer);
                //清除計時器 
        } 
        //隔10ms執行一次前面的function,展現一種平滑滑動效果
    },1);

    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;
}


