using LittleQflow.DAL;
using LittleQflow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace LittleQflow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly ClientDbContext _dbContext;

        public ClientsController(ClientDbContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients()
        {
            if (_dbContext.Clients == null)
            {
                return NotFound();
            }
            return await _dbContext.Clients
                .Where(x => x.Status == StatusEnum.Waiting)
                .OrderBy(c => c.NumberInLine)
                .ToListAsync();
        }

        [HttpGet("inService")]
        public async Task<ActionResult<Client>> GetInServiceClient()
        {
            try
            {

                var clientInService = await _dbContext.Clients
                 .Where(x => x.Status == StatusEnum.InService)
                 .SingleOrDefaultAsync();

                return clientInService;
            }
            catch (Exception ex)
            {
                return null;
            }
        }


        [HttpPut("next")]
        public async Task<IActionResult> PutClient()
        {
            var client = await _dbContext.Clients
                .Where(x => x.Status == StatusEnum.Waiting)
                .OrderBy(x => x.NumberInLine)
                .FirstOrDefaultAsync();

            if (client != null)
            {
                client.Status = StatusEnum.InService;
            }

            var inServiceClient = await _dbContext.Clients
                .Where(x => x.Status == StatusEnum.InService)
                .OrderBy(x => x.NumberInLine)
                .FirstOrDefaultAsync();

            if (inServiceClient != null)
            {
                inServiceClient.Status = StatusEnum.Completed;
            }

            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {

            var count = await _dbContext.Clients.CountAsync();
            var numberInLine = 0;

            if (count > 0)
            {
                var clients = await _dbContext.Clients.MaxAsync(c => c.NumberInLine);
                numberInLine = clients + 1;
            }
            else
            {
                numberInLine = 1;
            }

            var newClient = new Client
            {
                CheckinTime = DateTime.Now,
                FullName = client.FullName,
                NumberInLine = numberInLine,
                Status = StatusEnum.Waiting

            };

            _dbContext.Clients.Add(newClient);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetClient", new { id = newClient.ID }, newClient);
        }

    }
}
