namespace BookApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateBookTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Author = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Books");
        }
    }
}
