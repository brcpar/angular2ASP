using ASPTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ASPTest.Controllers
{
    [RoutePrefix("api/hero")]
    public class HeroApiController : ApiController
    {
        [HttpGet]
        [Route("getheroes")]
        public IHttpActionResult GetHeroes()
        {
            var heroes = new List<Hero>()
            {
                new Hero { Name = "first", Id = 1},
                new Hero { Name = "second", Id = 2}
            };
            return Ok(heroes);
        }
    }
}
