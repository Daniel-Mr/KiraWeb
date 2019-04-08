using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace KiraHome.Controllers
{
    public class AreaController : Controller
    {
        public IActionResult Sala()
        {
            return View();
        }

        public IActionResult Cocina()
        {
            return View();
        }

        public IActionResult Habitacion()
        {
            return View();
        }

        public IActionResult Banio()
        {
            return View();
        }
    }
}