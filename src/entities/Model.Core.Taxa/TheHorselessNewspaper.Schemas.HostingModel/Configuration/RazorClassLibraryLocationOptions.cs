using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.HostingModel.Configuration
{
    /// <summary>
    /// todo why is this here
    /// </summary>
    internal class RazorClassLibraryLocationOption
    {

        public RazorClassLibraryLocationOption()
        {

        }

        internal Uri ClassLibraryRootFolderUri { get; set; }

        /// <summary>
        /// useful for getting the locations of class libraries
        /// </summary>
        internal string ClassLibraryNameRootFolder { get; set; }

        /// <summary>
        /// useful for setting timer background task update intervals
        /// </summary>
        internal int FilesystemEnumerationUpdateInterval { get; set; }

    }

    /// <summary>
    /// specifies filesystem details for locations of razor class libraries
    /// </summary>
    internal class RazorClassLibraryLocationOptions
    {
        internal RazorClassLibraryLocationOptions()
        {
            Locations = new List<RazorClassLibraryLocationOption>();
        }

        internal List<RazorClassLibraryLocationOption> Locations { get; set; }

    }
}
