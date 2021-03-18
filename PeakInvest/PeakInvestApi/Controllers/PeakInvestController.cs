using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PeakInvestAPI.Models;

namespace PeakInvestAPI.Controllers
{

    [EnableCors("PeakInvestPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class PeakInvestController : ControllerBase
    {
        //[EnableCors("PeakInvestPolicy")]
        // GET api/PeakInvest/3
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var lista = new List<KeyValuePair<int, string>>() {
                new KeyValuePair<int, string>(1, "João"),
                new KeyValuePair<int, string>(2, "Maria"),
                new KeyValuePair<int, string>(3, "Ana"),
            };

            var result = lista.Find(x => x.Key == id).Value;
            if (String.IsNullOrEmpty(result))
            {
                return NotFound(id);
            }

            return Ok(result);
        }

        // POST api/<PeakInvest>
        [HttpPost]
        public IActionResult Post([FromBody] SimulacaoModel simulado)
        {
            double result = 0.0;
            try
            {
                result = simulado.QtdParcelas * simulado.Valor * 1.05;
            }
            catch
            {
                return StatusCode(500);
            }

            return Ok(result);
        }


    }
}
