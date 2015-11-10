<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <div id="content" class="ui-dialog-content">
        <p style="width: 396px;padding: 10px 30px 15px 30px;color: #f22e00;line-height: 20px;">自营生鲜商品暂时仅支持上海及苏州四区（姑苏区、相城区、虎丘区（高新区）、工业园区）的配送，其他地区暂不支持配送。</p>
        <p style="width: 455px;text-align: center;margin-bottom: 20px;"><span id="interval" style="color: #f22e00;font-weight: bold;display: inline-block;margin-right: 3px;">5</span>秒后自动关闭<span id="ellipsis">.</span></p>
    </div>
    <script type="text/javascript" src="jquery-1.11.1.js"></script>
    <script type="text/javascript">
    var time = 9,

        interval = 0;

     interval = setInterval(function() {

         interval();

     }, 1000);

    function interval() {

        var val = ['.....', '....', '...', '..', '.'];

        if (i == 0) {

            $("#content").remove();

            clearInterval(intervalid);

        } else {

            $("#interval").html(i);

            $("#ellipsis").html(val[i - 1]);

            i--;
        }

    }
    </script>
</body>

</html>
