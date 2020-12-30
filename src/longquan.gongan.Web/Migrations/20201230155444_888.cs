using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class _888 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "VerifyState",
                table: "OutStor_AssetCollection",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OutStor_Allocation",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AllocationNo = table.Column<string>(nullable: true),
                    MatNo = table.Column<string>(nullable: true),
                    Dept = table.Column<string>(nullable: true),
                    AllocationDate = table.Column<DateTime>(nullable: false),
                    VerifyState = table.Column<string>(nullable: true),
                    Remark = table.Column<string>(nullable: true),
                    CreatorId = table.Column<int>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    LastUpdaterId = table.Column<int>(nullable: true),
                    LastUpdatedTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OutStor_Allocation", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OutStor_Scrap",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MatNo = table.Column<string>(nullable: false),
                    ScrapDate = table.Column<DateTime>(nullable: false),
                    ScrapNo = table.Column<string>(nullable: true),
                    Dept = table.Column<string>(nullable: true),
                    VerifyState = table.Column<string>(nullable: true),
                    Remark = table.Column<string>(nullable: true),
                    MatName = table.Column<string>(nullable: true),
                    CreatorId = table.Column<int>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    LastUpdaterId = table.Column<int>(nullable: true),
                    LastUpdatedTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OutStor_Scrap", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OutStor_Allocation");

            migrationBuilder.DropTable(
                name: "OutStor_Scrap");

            migrationBuilder.DropColumn(
                name: "VerifyState",
                table: "OutStor_AssetCollection");
        }
    }
}
