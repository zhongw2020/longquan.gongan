using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class _666 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InStorView_InStorMatView",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InVoucher = table.Column<string>(nullable: false),
                    InVerifyState = table.Column<string>(nullable: true),
                    InaccountDate = table.Column<DateTime>(nullable: false),
                    ValueType = table.Column<string>(nullable: true),
                    InPrice = table.Column<double>(nullable: false),
                    GetMethod = table.Column<string>(nullable: true),
                    GetDate = table.Column<DateTime>(nullable: false),
                    Usage = table.Column<string>(nullable: true),
                    ManagerdepartmentName = table.Column<string>(nullable: true),
                    UserdepartmentName = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    Purpose = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    StoreName = table.Column<string>(nullable: true),
                    SupName = table.Column<string>(nullable: true),
                    Remark = table.Column<string>(nullable: true),
                    Other = table.Column<string>(nullable: true),
                    Curr_Num = table.Column<double>(nullable: false),
                    In_Num = table.Column<double>(nullable: false),
                    WarrantyPeriod = table.Column<DateTime>(nullable: false),
                    ManufactureDate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    CreatorId = table.Column<int>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    LastUpdaterId = table.Column<int>(nullable: true),
                    LastUpdatedTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InStorView_InStorMatView", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InStorView_InStorMatView");
        }
    }
}
