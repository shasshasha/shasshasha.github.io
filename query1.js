$(document).ready(function () {
    var ht = $(window).height();
    var wt = $(window).width();
    $('.wrap').css({
        "height": ht + 'px'
    });
    $('.wrap').css({
        "width": wt + 'px'
    });
    $('body').css({
        "background": 'url' + '(123.jpg)'
    });
    $(window).resize(function () {
        var ht = $(window).height();
        var wt = $(window).width();
        $('.wrap').css({
            "height": ht + 'px'
        });
        $('.wrap').css({
            "width": wt + 'px'
        });
        $('.wrap').css({
            "background": 'url' + '(123.jpg)'
        });
        
        
    });
        $("#count").text("게임을 시작하시려면 시작버튼을 눌러주세요.");
        
        $("#play").on("click",function(){
            $("#ball").css({
               
                'top': '700'+'px',
                'left':'400'+'px',
                'display':' none'
               
                 
                });
            var game=5;
            $("#play").val("재시작");
            $("#count").text("기회"+game+ "번 남았습니다.");
            $("#information").text("숫자를 입력해주세요.");
            $(".ans").attr("readonly",false).attr("disabled",false);  
            $(".ans").val("");
            
            var computer = [];
            var answer = [];
          
                
             for (var i = 0; i < 3; i++) {
            computer[i] = Math.floor(Math.random() * 10);
            for (var j = 0; j < i; j++) {
                if (computer[i] == computer[j]) {
                    computer[i] = Math.floor(Math.random() * 10);
                    i--;
                }
            }
        }
    
             $('#click').unbind("click").bind("click", function (){
                 
                 
                 $("#ball").css({
               
                
                'display':'block'
               
                 
                });
              
                
                $("#ball").animate({
                   "top" : '20' + 'px', 
                "left" : '1400' + 'px', 
                    
                });
                
                var one = $('#one').val();
                var two = $('#two').val();
                var three = $('#three').val();
                
                if(one==two||two==three||three==one){
                    $("#information").prepend("빈칸 혹은 문자 혹은 같은숫자를 입력했음<br>");
                     $(".ans").val("");
                }
            
                else if(one==""&&two==""&&three==""){
                    $("#information").prepend("빈칸 혹은 문자 혹은 같은숫자를 입력했음<br>");
                }
                else if($.isNumeric(one)==false || $.isNumeric(two)==false || $.isNumeric(three)==false){
                    $("#information").prepend("빈칸 혹은 문자 혹은 같은숫자를 입력했음<br>");  
                }
                else {
                    
                      
                    var strike=0;
                    var ball=0;
                    var out=0;
                    
                    answer[0] = one;
                    answer[1] = two;
                    answer[2] = three;
                    
                    for(var i=0; i<3; i++) {
                        if(computer[i]==answer[i]) {
                            strike++;
                         
                        }
                        else if(computer[i]!=answer[i]){
                            for(var j=0; j<answer.length;j++) {
                                if(computer[i]==answer[j]) {
                                    ball++;
                                
                                }
                            }
                        }
                    }
                    out=3-(strike+ball);
                     $("#information").prepend(strike+"스트라이크"+ball+"볼"+out+"아웃 입니다.<br>");
                     game--;
                     $("#count").text("기회"+game+ "번 남았습니다.");
                    if(strike!=3&&game==0){
                        $("#information").prepend("졌습니다.<br>");
                        $("#information").prepend("컴퓨터의 숫자는 "+computer[0]+" "+computer[1]+" "+computer[2]+"<br>");
                        $(".ans").attr("readonly",true).attr("disabled",false); 
                        $("#click").off("click");
                        
                    }
                    if(strike==3) {
                        $("#information").prepend("승리하셨습니다.<br>");
                        $("#information").prepend("컴퓨터의 숫자는 "+computer[0]+" "+computer[1]+" "+computer[2]+"<br>");
                        $(".ans").attr("readonly",true).attr("disabled",false);
                        $("#click").off("click");
                        
                    }
                }
               
            });
             
        
        });
});
