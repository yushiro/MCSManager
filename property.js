//仅限本地配置文件
//你可以根据这些说明进行一些相关的配置，修改。

/**
 * ----------- 无计算机语言基础者请阅读 -----------
 * 
 * 文本值，双引号之间是文本描述（字符串），类似于 "UTF-8" ，"Hello" 等等
 * 真假值, true 代表准许 false 代表禁止 
 * 数字值，直接书写即可 列如 1,2,3,5.565,20000,5555,
 * 注释，纯属用来看的，毫无作用 // 代表单行注释
 * 
 * 请放心，这不是要你书写计算机语言，而是进行十分简单的编辑；
 * 当然你可以选择不改动此文件。
 * 
 * 
 * 绝大部分设置，需要重启面板生效！
 */


/* --------------- 功能代码区，请勿修改 ---------------*/
//控制台默认编码代码
const os = require("os");
let auto_console_coding;
if (os.platform() == "win32")
    auto_console_coding = 'GBK';
else
    auto_console_coding = 'UTF-8';
/* --------------- 功能代码区，请勿修改 ---------------*/




/*--------------- 配置开始，这与 Minecraft 服务器配置几乎差不多 --------------- */

//控制台实时刷新频率 单位毫秒 默认1200 毫秒
//建议在 1000 毫秒 与 3000 毫秒之选择
MCSERVER.localProperty.console_send_times = 1200;


//控制台默认编码，默认自动选择，你可以去除变量 auto_console_coding 自己写，如 "UFT-8" 或 "GBXXXX"
//如果控制台中文乱码，你可以尝试更改此选项
MCSERVER.localProperty.console_encode = auto_console_coding;


//是否开启 gzip 静态文件压缩，但是如果你使用反向代理或某 HTTP 服务自带的gzip，请关闭它
MCSERVER.localProperty.is_gzip = true;


//是否准许跨域请求，如果准许，将失去一部分安全性，但是你二次开发可能需要
MCSERVER.localProperty.is_allow_csrf = false;


//登录页面 URL，我们有两个登录页面，你可以选择其一，或自己选择
//可以 "/public/login/" 或者 "/public/login2/" 或你自定义
MCSERVER.localProperty.login_url = "/public/login/";


//控制台历史记录最大缓存长度
//缓存长度越高，能存下的日志越多，但是对服务器内存牺牲更大
//只建议调小，而不建议调大
MCSERVER.localProperty.terminalQueue_max_length = 512;


//控制数据中心 数据刷新频率 单位毫秒
//默认 2000 毫秒
MCSERVER.localProperty.data_center_times = 2000;


//是否准许本控制面板使用自定义参数 | 默认准许使用
//注意! 此功能既可以让你的控制面板尝试更多姿势 (包括 WebShell)
//注意! 也会让其他别有用心的管理员 (只有管理员有权使用)，入侵你的宿主机
MCSERVER.localProperty.customize_commande = true;