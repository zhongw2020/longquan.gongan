using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class Instor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InStor_InStorMat",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InVoucher = table.Column<string>(nullable: false),
                    MatNo = table.Column<string>(nullable: true),
                    InaccountDate = table.Column<DateTime>(nullable: false),
                    ValueType = table.Column<string>(nullable: true),
                    InPrice = table.Column<double>(nullable: false),
                    GetMethod = table.Column<string>(nullable: true),
                    GetDate = table.Column<DateTime>(nullable: false),
                    Usage = table.Column<string>(nullable: true),
                    ManagerdepartmentNo = table.Column<string>(nullable: true),
                    UserdepartmentNo = table.Column<string>(nullable: true),
                    UserNo = table.Column<string>(nullable: true),
                    Purpose = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    StoreNo = table.Column<string>(nullable: true),
                    SupNo = table.Column<string>(nullable: true),
                    Remark = table.Column<string>(nullable: true),
                    Other = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InStor_InStorMat", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InStor_InStorMat");
        }
    }
}
