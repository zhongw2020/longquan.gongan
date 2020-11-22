using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace longquan.gongan.Web.Migrations
{
    public partial class all01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "standards",
                table: "BaseData_BaseMat",
                newName: "Standards");

            migrationBuilder.AddColumn<int>(
                name: "CreatorId",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Curr_Num",
                table: "InStor_InStorMat",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "In_Num",
                table: "InStor_InStorMat",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdatedTime",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LastUpdaterId",
                table: "InStor_InStorMat",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ManufactureDate",
                table: "InStor_InStorMat",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "WarrantyPeriod",
                table: "InStor_InStorMat",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "No",
                table: "BaseData_BaseSup",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "No",
                table: "BaseData_BaseStore",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "No",
                table: "BaseData_BaseMat",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedTime",
                table: "BaseData_BaseMat",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Max_Num",
                table: "BaseData_BaseMat",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Min_Num",
                table: "BaseData_BaseMat",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Safe_Num",
                table: "BaseData_BaseMat",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "No",
                table: "BaseData_BaseDept",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OutStor_AssetCollection",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ColVoucher = table.Column<string>(nullable: false),
                    ColDeptno = table.Column<string>(nullable: true),
                    ColStaffno = table.Column<string>(nullable: true),
                    ColMatno = table.Column<string>(nullable: true),
                    ColDate = table.Column<DateTime>(nullable: false),
                    ColNumber = table.Column<double>(nullable: false),
                    Remark = table.Column<string>(nullable: true),
                    Other = table.Column<string>(nullable: true),
                    CreatorId = table.Column<int>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    LastUpdaterId = table.Column<int>(nullable: true),
                    LastUpdatedTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OutStor_AssetCollection", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OutStor_AssetCollection");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "Curr_Num",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "In_Num",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "LastUpdatedTime",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "LastUpdaterId",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "ManufactureDate",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "WarrantyPeriod",
                table: "InStor_InStorMat");

            migrationBuilder.DropColumn(
                name: "No",
                table: "BaseData_BaseSup");

            migrationBuilder.DropColumn(
                name: "No",
                table: "BaseData_BaseStore");

            migrationBuilder.DropColumn(
                name: "DeletedTime",
                table: "BaseData_BaseMat");

            migrationBuilder.DropColumn(
                name: "Max_Num",
                table: "BaseData_BaseMat");

            migrationBuilder.DropColumn(
                name: "Min_Num",
                table: "BaseData_BaseMat");

            migrationBuilder.DropColumn(
                name: "Safe_Num",
                table: "BaseData_BaseMat");

            migrationBuilder.DropColumn(
                name: "No",
                table: "BaseData_BaseDept");

            migrationBuilder.RenameColumn(
                name: "Standards",
                table: "BaseData_BaseMat",
                newName: "standards");

            migrationBuilder.AlterColumn<string>(
                name: "No",
                table: "BaseData_BaseMat",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
