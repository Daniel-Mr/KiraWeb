using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KiraHome.Controllers
{
    public class NodesController : Controller
    {

        [Authorize]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Devices(string id)
        {
            ViewData["NodeId"] = id;
            return View();
        }

    }
}