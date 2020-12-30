// -----------------------------------------------------------------------
//  <copyright file="TestController.cs" company="OSharp开源团队">
//      Copyright (c) 2014-2018 OSharp. All rights reserved.
//  </copyright>
//  <site>http://www.osharp.org</site>
//  <last-editor>郭明锋</last-editor>
//  <last-date>2018-06-27 4:50</last-date>
// -----------------------------------------------------------------------

using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

using longquan.gongan.Identity;
using longquan.gongan.Identity.Dtos;
using longquan.gongan.Identity.Entities;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using OSharp.AspNetCore;
using OSharp.AspNetCore.Mvc.Filters;
using OSharp.Collections;
using OSharp.Data;


namespace longquan.gongan.Web.Controllers
{

    public class Notice
    {
        public string id { get; set; }
        public string avatar { get; set; }
        public string title { get; set; }
        public string datetime { get; set; }
        public string type { get; set; }
        public string description { get; set; }
        public bool read { get; set; }
        public string extra { get; set; }
        public string status { get; set; }
    }
    public class CountHub : Hub
    {
        private readonly NoticeService _noticeService;

        public CountHub(NoticeService noticeService)
        {
            _noticeService = noticeService;
        }
        public List<Notice> GetNoticesAsync()
        {
            return _noticeService.GetNotices();
        }
        public void SendNoticeAsync(Notice notice)
        { 
            _noticeService.SetNotice(notice);
            Clients.All.SendAsync("UpdateNotices", _noticeService.GetNotices());

        }
        public int GetNoticesCountAsync()
        {
            return _noticeService.GetNoticesCount();
        }

    }
    public class NoticeService
    {
        private List<Notice> notices;

        public NoticeService()
        {
            notices = new List<Notice>();
            notices.Add(
                new Notice
                {
                    id = "000000001",
                    avatar = "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
                    title = "你收到了 14 份新周报",
                    datetime = "2017-08-09",
                    type = "通知",
                });
            notices.Add(
                new Notice
                {
                    id = "000000002",
                    avatar = "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
                    title = "你推荐的 曲妮妮 已通过第三轮面试",
                    datetime = "2017-08-08",
                    type = "通知",
                });
            notices.Add(

        new Notice
        {
            id = "000000003",
            avatar = "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
            title = "这种模板可以区分多种通知类型",
            datetime = "2017-08-07",
            read = true,
            type = "通知",
        });
            notices.Add(
        new Notice
        {
            id = "000000004",
            avatar = "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
            title = "左侧图标用于区分不同的类型",
            datetime = "2017-08-07",
            type = "通知",
        });
            notices.Add(
        new Notice
        {
            id = "000000005",
            avatar = "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
            title = "内容不要超过两行字，超出时自动截断",
            datetime = "2017-08-07",
            type = "通知",
        });
            notices.Add(
        new Notice
        {
            id = "000000006",
            avatar = "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
            title = "曲丽丽 评论了你",
            description = "描述信息描述信息描述信息",
            datetime = "2017-08-07",
            type = "消息",
        });
            notices.Add(
        new Notice
        {
            id = "000000007",
            avatar = "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
            title = "朱偏右 回复了你",
            description = "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
            datetime = "2017-08-07",
            type = "消息",
        });
            notices.Add(
        new Notice
        {
            id = "000000008",
            avatar = "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
            title = "标题",
            description = "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
            datetime = "2017-08-07",
            type = "消息",
        });
            notices.Add(
        new Notice
        {
            id = "000000009",
            title = "任务名称",
            description = "任务需要在 2017-01-12 20:00 前启动",
            extra = "未开始",
            status = "todo",
            type = "待办",
        });
            notices.Add(
        new Notice
        {
            id = "000000010",
            title = "第三方紧急代码变更",
            description = "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
            extra = "马上到期",
            status = "urgent",
            type = "待办",
        });
            notices.Add(
        new Notice
        {
            id = "000000011",
            title = "信息安全考试",
            description = "指派竹尔于 2017-01-09 前完成更新并发布",
            extra = "已耗时 8 天",
            status = "doing",
            type = "待办",
        });
            notices.Add(
        new Notice
        {
            id = "000000012",
            title = "ABCD 版本发布",
            description = "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
            extra = "进行中",
            status = "processing",
            type = "待办",
        });
        }

        public List<Notice> GetNotices()
        {
            return notices;
        }
        public void SetNotice(Notice notice)
        {
            notice.id = notices.Count()+"";
            notices.Add(notice);
        }
        public int GetNoticesCount()
        {
            return notices.Count();
        }
    }


    [Description("网站-测试")]
    [ClassFilter]
    public class TestController : SiteApiController
    {
        private readonly IHubContext<CountHub> _countHub;
        private readonly UserManager<User> _userManager;
        private readonly IIdentityContract _identityContract;

        public TestController(UserManager<User> userManager, IIdentityContract identityContract, IHubContext<CountHub> countHub)
        {
            _userManager = userManager;
            _identityContract = identityContract;
            _countHub = countHub;
        }


        [HttpGet]
        [UnitOfWork]
        [MethodFilter]
        [Description("测试01")]
        public async Task<string> Test01()
        {
            List<object> list = new List<object>();

            if (!_userManager.Users.Any())
            {
                RegisterDto dto = new RegisterDto
                {
                    UserName = "admin",
                    Password = "osharp123456",
                    ConfirmPassword = "osharp123456",
                    Email = "i66soft@qq.com",
                    NickName = "大站长",
                    RegisterIp = HttpContext.GetClientIp()
                };

                OperationResult<User> result = await _identityContract.Register(dto);
                if (result.Succeeded)
                {
                    User user = result.Data;
                    user.EmailConfirmed = true;
                    await _userManager.UpdateAsync(user);
                }
                list.Add(result.Message);

                dto = new RegisterDto()
                {
                    UserName = "osharp",
                    Password = "osharp123456",
                    Email = "mf.guo@qq.com",
                    NickName = "测试号",
                    RegisterIp = HttpContext.GetClientIp()
                };
                result = await _identityContract.Register(dto);
                if (result.Succeeded)
                {
                    User user = result.Data;
                    user.EmailConfirmed = true;
                    await _userManager.UpdateAsync(user);
                }
                list.Add(result.Message);
            }

            return list.ExpandAndToString("\r\n");
        }
        [HttpPost]
        public async Task<string> count()
        {
            await _countHub.Clients.All.SendAsync("someFunc", new { random = "abcd" });
            HttpContext.Response.Headers.Add("Access-Control-Allow-Credentials", "true");
            return "1";
        }


    }


    public class ClassFilter : ActionFilterAttribute, IExceptionFilter
    {
        private ILogger _logger;

        /// <inheritdoc />
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            _logger = context.HttpContext.RequestServices.GetLogger<ClassFilter>();
            _logger.LogInformation("ClassFilter - OnActionExecuting");
        }

        /// <inheritdoc />
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            _logger.LogInformation("ClassFilter - OnActionExecuted");
        }

        /// <inheritdoc />
        public override void OnResultExecuting(ResultExecutingContext context)
        {
            _logger.LogInformation("ClassFilter - OnResultExecuting");
        }

        /// <inheritdoc />
        public override void OnResultExecuted(ResultExecutedContext context)
        {
            _logger.LogInformation("ClassFilter - OnResultExecuted");
        }

        /// <summary>
        /// Called after an action has thrown an <see cref="T:System.Exception" />.
        /// </summary>
        /// <param name="context">The <see cref="T:Microsoft.AspNetCore.Mvc.Filters.ExceptionContext" />.</param>
        public void OnException(ExceptionContext context)
        {
            var ex = context.Exception.Message;
            _logger.LogInformation("ClassFilter - OnException");
        }
    }

    public class MethodFilter : ActionFilterAttribute
    {
        private ILogger _logger;

        /// <inheritdoc />
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            _logger = context.HttpContext.RequestServices.GetLogger<MethodFilter>();
            _logger.LogInformation("MethodFilter - OnActionExecuting");
        }

        /// <inheritdoc />
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            _logger.LogInformation("MethodFilter - OnActionExecuted");
        }

        /// <inheritdoc />
        public override void OnResultExecuting(ResultExecutingContext context)
        {
            _logger.LogInformation("MethodFilter - OnResultExecuting");
        }

        /// <inheritdoc />
        public override void OnResultExecuted(ResultExecutedContext context)
        {
            _logger.LogInformation("MethodFilter - OnResultExecuted");
        }

    }
}