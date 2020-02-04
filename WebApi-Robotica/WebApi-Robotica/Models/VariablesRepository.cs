using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using System.Diagnostics;

namespace WebApi_Robotica.Models
{
    public class VariablesRepository
    {
        private MySqlConnection Connect()
        {
            string conexion = "datasource=proyectoverde.cltrtfvhf7dx.eu-west-3.rds.amazonaws.com;port=3306;username=admin;password=ProyectoVerde;database=MaquinaDB";
            MySqlConnection con = new MySqlConnection(conexion);
            return con;
        }

        internal Variables Retrieve()
        {
            System.Globalization.CultureInfo culInfo = new System.Globalization.CultureInfo("es-ES");
            culInfo.NumberFormat.NumberDecimalSeparator = ".";
            culInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            culInfo.NumberFormat.PercentDecimalSeparator = ".";
            culInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = culInfo;

            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from Variables;";

            con.Open();
            MySqlDataReader res = command.ExecuteReader();

            Variables var = null;
            //List<Variables> vars = new List<Variables>();

            while (res.Read())
            {
                var = new Variables(
                    res.GetBoolean(0),
                    res.GetInt32(1), 
                    res.GetBoolean(2), 
                    res.GetBoolean(3), 
                    res.GetInt32(4), 
                    res.GetInt32(5),
                    res.GetInt32(6),
                    res.GetInt32(7),
                    res.GetInt32(8),
                    res.GetInt32(9),
                    res.GetInt32(10),
                    res.GetInt32(11),
                    res.GetInt32(12),
                    res.GetBoolean(13),
                    res.GetInt32(14),
                    res.GetInt32(15),
                    res.GetBoolean(16),
                    res.GetBoolean(17),
                    res.GetBoolean(18),
                    res.GetBoolean(19),
                    res.GetInt32(20),
                    res.GetInt32(21)
                    );
            }
            con.Close();

            return var;
        }

        internal void Update(int variable, string tipoVar)
        {
            System.Globalization.CultureInfo culInfo = new System.Globalization.CultureInfo("es-ES");
            culInfo.NumberFormat.NumberDecimalSeparator = ".";
            culInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            culInfo.NumberFormat.PercentDecimalSeparator = ".";
            culInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = culInfo;

            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();

            string nom = "";

            switch (tipoVar)
            {
                case "G1FrecVar":
                    nom = "G1FrecVar";
                    break;

                case "G1Tritur":
                    nom = "G1Tritur";
                    break;

                case "G2FrecVar":
                    nom = "G2FrecVar";
                    break;

                case "G3Gripper":
                    nom = "G3Gripper";
                    break;

                default:
                    break;
            }

            command.CommandText = "update Variables SET " + nom + " = " + variable + ";";
            
            Debug.WriteLine("comando " + command.CommandText);

            con.Open();
            command.ExecuteNonQuery();
            con.Close();
        }
    }
}