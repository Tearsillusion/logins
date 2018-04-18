$(document).ready(function() {
    $("input").removeAttr("disabled");
    $(".login_contant_phone_code2").hide();
    $(".fa-check-square").hide();
    var login_Tab_li=$(".login_Tab ul ").find("li");


    // 验证
    $(".login_contant_phone_code1").click(function () {
        $(".login_contant_phone_code1").hide();
        $(".login_contant_phone_code2").show();
    })
    $(".login_bottom_button").click(function () {
        var Name=$(".name").val();
        var Phone=$(".phone").val();
        var Code=$(".code").val();
        var Company=$(".company").val();
        var Email=$(".Email").val();
        var txt=$(".txt").val();
        if(Name==""){
            alert("名字不能为空");
            return false;

        }
        else  if(Phone==""){
            alert("号码不能为空");
            return false;

        }
        else  if(Code==""){
            alert("验证码不能为空");
            return false;

        }
        else  if(Company==""){
            alert("公司不能为空");
            return false;

        }
        else  if(Email==""){
            alert("邮箱不能为空");
            return false;

        }
        else  if(txt==""){
            alert("职务不能为空");
            return false;

        }
        else  {
            $(".fa-check-square").show();
            $(".star").hide();
            alert("登录成功")
            return true;
        }
    })



})