using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class basedata01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BaseData_BaseDept",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Manager = table.Column<string>(nullable: true),
                    State = table.Column<bool>(nullable: false),
                    Other = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseData_BaseDept", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseData_BaseStaff",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Sex = table.Column<string>(nullable: true),
                    Dept = table.Column<string>(nullable: true),
                    No = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Other = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseData_BaseStaff", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseData_BaseStore",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    BelongDept = table.Column<string>(nullable: true),
                    Manager = table.Column<string>(nullable: true),
                    State = table.Column<bool>(nullable: false),
                    Other = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseData_BaseStore", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
           
        }
    }
}
