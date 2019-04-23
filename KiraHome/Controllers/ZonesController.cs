using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace KiraHome.Controllers
{
    public class ZonesController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Configuration()
        {
            return View();
        }

        public IActionResult Devices(int id)
        {
            ViewData["ZoneId"] = id;
            return View();
        }

    }
}