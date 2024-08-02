using BusinessLogic.Data;
using BusinessLogic.Logic;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using WebApi.Dtos;
using Microsoft.AspNetCore.Identity;
using WebApi.Middleware;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using StackExchange.Redis;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace WebApi;


public class Startup
{
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddScoped<ITokenService, TokenService>();

        var builder = services.AddIdentityCore<Usuario>();

        builder = new IdentityBuilder(builder.UserType, builder.Services);
        builder.AddRoles<IdentityRole>();

        builder.AddEntityFrameworkStores<SeguridadDbContext>();
        builder.AddSignInManager<SignInManager<Usuario>>();

        services.AddAuthentication( JwtBearerDefaults.AuthenticationScheme ).AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Token:Key"])),
                ValidIssuer = Configuration["Token:Issuer"],
                ValidateIssuer = true,
                ValidateAudience = false
            };
        });

        services.AddAutoMapper(typeof(MappingProfiles));
        services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
        services.AddScoped(typeof(IGenericSeguridadRepository<>), typeof(GenericSeguridadRepository<>));

        services.AddDbContext<MarketDbContext>(opt =>
        {
            opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
        });
        services.AddDbContext<SeguridadDbContext>(x =>
        {
            x.UseSqlServer(Configuration.GetConnectionString("IdentitySeguridad"));
        });

        services.AddSingleton<IConnectionMultiplexer>(r =>
        {
            var configuration = ConfigurationOptions.Parse(Configuration.GetConnectionString("Redis"), true);
            return ConnectionMultiplexer.Connect(configuration);
        });

        services.TryAddSingleton<TimeProvider>();

        services.AddTransient<IProductoRepository, ProductoRepository>();
        services.AddControllers();

        services.AddScoped<ICarritoCompraRepository, CarritoCompraRepository>();

        //CORS
        services.AddCors(opt =>
        {
            opt.AddPolicy("CorsRule", rule =>
            {
                rule.AllowAnyHeader().AllowAnyMethod().WithOrigins("*");
            });
        });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        //if (env.IsDevelopment())
        //{
        //    app.UseDeveloperExceptionPage();
        //}

        app.UseMiddleware<ExceptionMiddleware>();

        app.UseStatusCodePagesWithReExecute("/errors", "?code={0}");

        app.UseRouting();
        //CORS
        app.UseCors("CorsRule");

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}

