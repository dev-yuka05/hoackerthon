// 작동되는 진동 메소드가 다르므로 통합
let active_click = 0;
document.querySelector('.active').addEventListener('click',()=>{
    if(active_click == 0){
        ++active_click;
        document.querySelector('.active').className = 'active off';
        stop();
    }else{
        --active_click;
        document.querySelector('.active').className = 'active on';
        vibrate();
    }
});


navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate; 

function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(20000);
    } 
    else {
        alert("진동을 지원하지 않는 기종 입니다.");
    }
}

function stop() {
navigator.vibrate(0); 
}