using DntAppApi.Core;
using DntAppApi.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;
using DntAppApi.Models;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using DntAppApi.Core.Entities;

namespace DntAppApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            //Need To Add For Configuration Of  Connection String With DbContext
            services.AddDbContext<MpContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            //Need To Add Service And implementation To Use In Our Application
            services.AddScoped<IProduct_Repository, Product_Repository>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            
            // Need To Add For Cross Origin Resourse Sharing Calls
            services.AddCors(options =>
            {
                options.AddPolicy("MAYUR",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });
            services.AddControllers()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
                    options.JsonSerializerOptions.PropertyNamingPolicy = null;
                    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                });

            var appSettingsJsonSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsJsonSection);
            //JwtAuthentication
            //1).secret key in appsettings
            var appSettings = appSettingsJsonSection.Get<AppSettings>();
            var Key = Encoding.ASCII.GetBytes(appSettings.Key);

            //2).Add JwtBearerDefaults Authentication
            services.AddAuthentication(au => { 
                au.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                au.DefaultChallengeScheme= JwtBearerDefaults.AuthenticationScheme;
            })
            //3).Now Set JwtBearerDefaults Authentication Configuration.
            .AddJwtBearer(jwt => {
                jwt.SaveToken = true;
                jwt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Key),
                    ValidateIssuerSigningKey = true
                };
            });

            //3).Now Set JwtBearerDefaults Authentication Configuration.

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            // Need To Add For Cross Origin Resourse Sharing Calls
            app.UseCors("MAYUR");
            app.UseHttpsRedirection();
            //app.UseMvc();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
