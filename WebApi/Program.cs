using BusinessLogic.Data;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebApi;
namespace WebApi;
public class Program
{
    public static async Task Main(string[] args)
    {
        var host = CreateHostBuilder(args).Build();
        using(var scope = host.Services.CreateScope())
        {
            var services = scope.ServiceProvider;
            var loggerFactory = services.GetRequiredService<ILoggerFactory>();
            try
            {
                var context = services.GetRequiredService<MarketDbContext>();
                await context.Database.MigrateAsync();
                await MarketDbContextData.CargarDataAsync(context, loggerFactory);

                //Migracion para IdentityUser
                var userManager = services.GetRequiredService<UserManager<Usuario>>();
                var identityContext = services.GetRequiredService<SeguridadDbContext>();
                await identityContext.Database.MigrateAsync();
                await SeguridadContextData.SeedUserAsync(userManager);
            }
            catch (Exception e)
            {
                var logger = loggerFactory.CreateLogger<Program>();
                logger.LogError(e, "Errores en el proceso de Migración");
            }
        }

        host.Run();
    }

    private static IHostBuilder CreateHostBuilder(string[] args)
    => Host.CreateDefaultBuilder(args)
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
}