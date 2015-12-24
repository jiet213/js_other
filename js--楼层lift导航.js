            /**
             * 楼层1F ~ NF 锚点控制
             * @ date 20151022 joker.ye,jie.tang
             * ------------------------------------------------------------------
             */
            function ctrlFloorPoint() {

                var nScrollTop = document.body.scrollTop || document.documentElement.scrollTop,

                    yCenter = $(window).height() / 2,

                    $floor = $(".J-floor"),

                    $lift = $(".J_fn_lift"),

                    $fixbar = $(".J-fixbar,.J-fixcont"),

                    liftHeight = $lift.outerHeight(),

                    nDuration = 200,

                    floorHeight = $floor.outerHeight()/2,

                    floorOffTop = [];

                $lift.css("margin-top", (-liftHeight / 2) + 'px');

                //非 IE7 执行悬浮搜索
                if (!$.vars.bIsIe7) {

                    //悬浮层控制
                    if (nScrollTop > 730) {

                        $fixbar.css("top", 0);

                    } else {

                        $fixbar.css("top", -50);

                    }

                }

                //楼层和lift控制
                if (nScrollTop > 550) {

                    $lift.show().stop(true, true).animate({
                        opacity: 1
                    }, 100, function() {
                        $lift.addClass('m-lift-show')
                    });

                    $floor.each(function(index, el) {

                        var self = $(this),
                            f_top = self.offset().top;

                        floorOffTop[index] = f_top;

                    });

                    //控制楼层选中，中心点离哪个近就选中哪个楼层
                    var minIndex = 0,

                        minDist = Math.abs(nScrollTop + yCenter-floorOffTop[0]-floorHeight);

                    for (var i = 0; i < floorOffTop.length; i++) {

                        if (Math.abs(nScrollTop + yCenter-floorOffTop[i]-floorHeight) < minDist) {

                            minIndex = i;

                            minDist = nScrollTop + yCenter-floorOffTop[i]-floorHeight;

                        }

                        $floor.eq(minIndex).addClass('u-flo-cur').siblings('.J-floor').removeClass('u-flo-cur');

                        $lift.find("li").eq(minIndex).addClass('active').siblings('li').removeClass('active');

                    };

                } else {

                    $lift.removeClass('m-lift-show').stop(true, true).animate({
                        opacity: 0
                    }, 100, function() {
                        $lift.hide();
                    });

                    $(".J_fn_lift li").removeClass('active');

                    $floor.removeClass('u-flo-cur');

                }
            }

            ctrlFloorPoint(); //初始化时判断楼层，是否显示

            /**
             * 控制楼层锚点跳转，点击对应的数字跳转到对应的楼层
             * @ date 20150821 joker.ye,jie.tang
             * ------------------------------------------------------------------
             */

            function ctrlLift() {

                var self = $(this),
                    index = self.index();

                self.addClass('active').siblings('li').removeClass('active');

                $('html,body').stop(true, true).animate({
                    scrollTop: $(".J-floor").eq(index).offset().top - 150
                }, {
                    easing: "easeOutExpo",
                    duration: 500,
                    complete: function() {}
                });

            }

            /**
             * 锚点点击跳转到相应楼层
             * @ date 20150828 jie.tang
             * ------------------------------------------------------------------
             */
            $(document).on('click', '.J_fn_lift li', ctrlLift);

            //调用
            $(window).on("resize scroll", function() {

                time && clearTimeout(time);

                time = setTimeout(function() {

                    //楼层懒加载
                    self.lazyloadModule();

                    //楼层锚点控制
                    ctrlFloorPoint();

                    //侧边栏控制
                    showRightBar();

                }, 400);
            });