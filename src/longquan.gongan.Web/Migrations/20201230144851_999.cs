using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class _999 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Curr_Num",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "InVoucher",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "ManagerdepartmentNo",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "MatNo",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "StoreNo",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "SupNo",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "UserdepartmentNo",
                table: "InStor_InStorMat");

            migrationBuilder.AddColumn<string>(
                name: "Batch",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BigType",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Brand",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "CurrNum",
                table: "InStor_InStorMat",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "Managerdepartment",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatName",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatType",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Model",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Other2",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Other3",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Other4",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Other5",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Other6",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "SafeNum",
                table: "InStor_InStorMat",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "StoreName",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SupName",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Userdepartment",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "WarrantyPeriod2",
                table: "InStor_InStorMat",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Batch",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "BigType",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Brand",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "CurrNum",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Managerdepartment",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "MatName",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "MatType",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Model",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Other2",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Other3",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Other4",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Other5",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Other6",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "SafeNum",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "StoreName",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "SupName",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Userdepartment",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "WarrantyPeriod2",
                table: "InStor_InStorMat");

            migrationBuilder.AddColumn<double>(
                name: "Curr_Num",
                table: "InStor_InStorMat",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "InVoucher",
                table: "InStor_InStorMat",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ManagerdepartmentNo",
                table: "InStor_InStorMat",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatNo",
                table: "InStor_InStorMat",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StoreNo",
                table: "InStor_InStorMat",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SupNo",
                table: "InStor_InStorMat",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserdepartmentNo",
                table: "InStor_InStorMat",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
