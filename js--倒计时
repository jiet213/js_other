         1.第一种
           //退订倒计时
            timeOut:function(nowDay,endDay){

                var timeLeave = (endDay - nowDay) / 1000,

                    interval = 0;

                interval = setInterval(function() {

                    intervalTime();

                }, 1000);

                function intervalTime() {

                    var J_day = $(".J-day"),

                        J_hour = $(".J-hour"),

                        J_minute = $(".J-minute"),

                        J_second = $(".J-second");

                    if (timeLeave > 0) {

                        var day = Math.floor(timeLeave / (24 * 60 * 60)),

                            hour = Math.floor(timeLeave % (24 * 60 * 60) / (60 * 60)),

                            minute = Math.floor(timeLeave % (24 * 60 * 60) % (60 * 60) / 60),

                            second = Math.floor(timeLeave % (24 * 60 * 60) % (60 * 60) % 60);

                        J_day.html(day);
                        J_hour.html(hour);
                        J_minute.html(minute);
                        J_second.html(second);

                        timeLeave--;

                    } else {

                        clearInterval(interval);

                        J_day.html("0");
                        J_hour.html("0");
                        J_minute.html("0");
                        J_second.html("0");

                        $(".J-to-tip").html("请尽快填写退货物流信息，方便商家为您处理退款");

                    }

                }

            }

     2.第二种
     (function($) {

        function TimeOut(endDay) {
            var tDay = new Date(),
                timeLeave = (endDay - tDay) / 1000;
            var day = Math.floor(timeLeave / (24 * 60 * 60)),
                hour = Math.floor(timeLeave % (24 * 60 * 60) / (60 * 60)),
                minute = Math.floor(timeLeave % (24 * 60 * 60) % (60 * 60) / 60),
                second = Math.floor(timeLeave % (24 * 60 * 60) % (60 * 60) % 60);
    
            $(".J-day").html(day);
            $(".J-hour").html(hour);
            $(".J-minute").html(minute);
            $(".J-second").html(second);
        }
        var dayNow = new Date(2015,11,25,08,00,00),
            yearNow = dayNow.getFullYear(),
            monthNow = dayNow.getMonth(),
            dayNow = dayNow.getDate(),
            endDay = new Date(yearNow, monthNow, dayNow + 10, 23, 59, 59);
        console.log(endDay.getTime());
        setInterval(function() {
            TimeOut(endDay);
        }, 1000);
})(jQuery);
