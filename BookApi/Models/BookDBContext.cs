using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BookApi.Models
{
    public class BookDBContext : DbContext
    {
        public BookDBContext() : base("booklocaldb")
        {

        }

        public DbSet<Book> Book { get; set; }
    }
}