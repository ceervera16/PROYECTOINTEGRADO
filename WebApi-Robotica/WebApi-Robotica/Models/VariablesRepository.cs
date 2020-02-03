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

        internal List<Variables> Retrieve()
        {
            System.Globalization.CultureInfo culInfo = new System.Globalization.CultureInfo("es-ES");
            culInfo.NumberFormat.NumberDecimalSeparator = ".";
            culInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            culInfo.NumberFormat.PercentDecimalSeparator = ".";
            culInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = culInfo;

            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from Maquinas;";

            con.Open();
            MySqlDataReader res = command.ExecuteReader();

            Variables var = null;
            List<Variables> vars = new List<Variables>();

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
                vars.Add(var);
            }
            con.Close();

            return vars;
        }


    }
}