using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class _886 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Report_DateWarn",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BigType = table.Column<string>(nullable: true),
                    MatName = table.Column<string>(nullable: true),
                    InaccountDate = table.Column<DateTime>(nullable: false),
                    GetMethod = table.Column<string>(nullable: true),
                    Usage = table.Column<string>(nullable: true),
                    ValueType = table.Column<string>(nullable: true),
                    Other5 = table.Column<string>(nullable: true),
                    InPrice = table.Column<double>(nullable: false),
                    Other4 = table.Column<string>(nullable: true),
                    GetDate = table.Column<DateTime>(nullable: false),
                    Managerdepartment = table.Column<string>(nullable: true),
                    UserNo = table.Column<string>(nullable: true),
                    Userdepartment = table.Column<string>(nullable: true),
                    StoreName = table.Column<string>(nullable: true),
                    SupName = table.Column<string>(nullable: true),
                    WarrantyPeriod = table.Column<DateTime>(nullable: false),
                    Other = table.Column<string>(nullable: true),
                    In_Num = table.Column<double>(nullable: false),
                    Purpose = table.Column<string>(nullable: true),
                    CurrNum = table.Column<double>(nullable: false),
                    ManufactureDate = table.Column<DateTime>(nullable: false),
                    Other2 = table.Column<string>(nullable: true),
                    MatType = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    SafeNum = table.Column<double>(nullable: false),
                    Remark = table.Column<string>(nullable: true),
                    WarrantyPeriod2 = table.Column<double>(nullable: false),
                    Batch = table.Column<string>(nullable: true),
                    Brand = table.Column<string>(nullable: true),
                    Other6 = table.Column<string>(nullable: true),
                    Other3 = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    CreatorId = table.Column<int>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    LastUpdaterId = table.Column<int>(nullable: true),
                    LastUpdatedTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Report_DateWarn", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Report_DateWarn");
        }
    }
}
