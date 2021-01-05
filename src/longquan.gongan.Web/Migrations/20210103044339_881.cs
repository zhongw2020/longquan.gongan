using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class _881 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Other6",
                table: "Report_DateWarn");

            migrationBuilder.DropColumn(
                name: "Other6",
                table: "InStor_InStorMat");

            migrationBuilder.AddColumn<string>(
                name: "MatNo",
                table: "Report_DateWarn",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatNo",
                table: "InStor_InStorMat",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MatNo",
                table: "Report_DateWarn");

            migrationBuilder.DropColumn(
                name: "MatNo",
                table: "InStor_InStorMat");

            migrationBuilder.AddColumn<string>(
                name: "Other6",
                table: "Report_DateWarn",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Other6",
                table: "InStor_InStorMat",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
