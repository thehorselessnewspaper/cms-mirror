using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Model
{
    public class TenantRegistrationModel
    {
        public TenantRegistrationModel()
        {

        }

        public Guid? Id { get; set; }

        [Required(ErrorMessage = "the display name is required")]
        public string? displayName { get; set; } = string.Empty;

        [Required(ErrorMessage = "the tenant identifier is required")]
        public string? tenantIdentifier { get; set; } = string.Empty;


    }
}
