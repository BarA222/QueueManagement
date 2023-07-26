using LittleQflow.Models;
using Microsoft.EntityFrameworkCore;


namespace LittleQflow.DAL
{
    public class ClientDbContext : DbContext
    {
        public ClientDbContext(DbContextOptions<ClientDbContext> options)
            : base(options)
        {

        }
        public DbSet<Client> Clients { get; set; }
    }
}
