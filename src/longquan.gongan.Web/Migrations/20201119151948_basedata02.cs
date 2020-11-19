using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class basedata02 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BaseData_BaseKind",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    State = table.Column<bool>(nullable: false),
                    Other = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseData_BaseKind", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseData_BaseMat",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    No = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Kinds = table.Column<string>(nullable: true),
                    standards = table.Column<string>(nullable: true),
                    Brand = table.Column<string>(nullable: true),
                    State = table.Column<bool>(nullable: false),
                    Other = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseData_BaseMat", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseData_BaseSup",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    State = table.Column<bool>(nullable: false),
                    Other = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseData_BaseSup", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BaseData_BaseKind");

            migrationBuilder.DropTable(
                name: "BaseData_BaseMat");

            migrationBuilder.DropTable(
                name: "BaseData_BaseSup");
        }
    }
}
