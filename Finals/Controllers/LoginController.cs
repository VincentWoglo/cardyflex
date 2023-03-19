using Microsoft.AspNetCore.Mvc;

namespace Finals.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View("Index");
        }
    }
}
