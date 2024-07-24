using Core.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Data
{
    public class SeguridadContextData
    {
        public static async Task SeedUserAsync(UserManager<Usuario> userManager) 
        {
            if(!userManager.Users.Any())
            {
                var usuario = new Usuario()
                {
                    Nombre = "Jorge",
                    Apellido = "Morales",
                    UserName = "jorgem",
                    Email = "jorge@mail.com",
                    Direccion = new Direccion
                    {
                        Calle = "Carlos Zavala",
                        Ciudad = "Managua",
                        CodigoPostal = "14057",
                        Departamento = "Managua"
                    }
                };

                var result = await userManager.CreateAsync(usuario, "Jorgem2025$");
                if (!result.Succeeded)
                {
                    throw new Exception($"Falló la creación del usuario: {string.Join(", ", result.Errors.Select(e => e.Description))}");
                }
            }
        }
    }
}
