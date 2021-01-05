using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class _776 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Report_StoreSum",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ComPany = table.Column<string>(nullable: true),
                    BigType = table.Column<string>(nullable: true),
                    Managerdepartment = table.Column<string>(nullable: true),
                    MatName = table.Column<string>(nullable: true),
                    SafeNum = table.Column<double>(nullable: false),
                    SumNum = table.Column<double>(nullable: false),
                    Usage = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Report_StoreSum", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Report_StoreSum");
        }
    }
}
