using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi_Robotica.Models
{
    public class Variables
    {
        public Variables(
            bool G1Marcha, 
            int G1FrecVar, 
            bool G1Tritur, 
            bool G1RecarTap,
            int G1AlmGav1,
            int G1AlmGav2,
            int G1AlmGav3,
            int G1AlmGav4,
            int G1AlmGav5,
            int G1AlmGav6,
            int G1AlmGav7,
            int G1AlmGav8,
            int G1AlmGav9,
            bool G2Marcha,
            int G2FrecVar,
            int G2BobFab,
            bool G2TempOk,
            bool G2TolUp,
            bool G2TolDowm,
            bool G3Marcha,
            int G3Gripper,
            int G3AvisoCelda
            )
        {
            this.G1Marcha = G1Marcha;
            this.G1FrecVar = G1FrecVar;
            this.G1Tritur = G1Tritur;
            this.G1RecarTap = G1RecarTap;
            this.G1AlmGav1 = G1AlmGav1;
            this.G1AlmGav2 = G1AlmGav2;
            this.G1AlmGav3 = G1AlmGav3;
            this.G1AlmGav4 = G1AlmGav4;
            this.G1AlmGav5 = G1AlmGav5;
            this.G1AlmGav6 = G1AlmGav6;
            this.G1AlmGav7 = G1AlmGav7;
            this.G1AlmGav8 = G1AlmGav8;
            this.G1AlmGav9 = G1AlmGav9;
            this.G2Marcha = G2Marcha;
            this.G2FrecVar = G2FrecVar;
            this.G2BobFab = G2BobFab;
            this.G2TempOk = G2TempOk;
            this.G2TolUp = G2TolUp;
            this.G2TolDowm = G2TolDowm;
            this.G3Marcha = G3Marcha;
            this.G3Gripper = G3Gripper;
            this.G3AvisoCelda = G3AvisoCelda;
        }

        public bool G1Marcha { get; }
        public int G1FrecVar { get; set; }
        public bool G1Tritur { get; set; }
        public bool G1RecarTap { get; }
        public int G1AlmGav1 { get; }
        public int G1AlmGav2 { get; }
        public int G1AlmGav3 { get; }
        public int G1AlmGav4 { get; }
        public int G1AlmGav5 { get; }
        public int G1AlmGav6 { get; }
        public int G1AlmGav7 { get; }
        public int G1AlmGav8 { get; }
        public int G1AlmGav9 { get; }
        public bool G2Marcha { get; }
        public int G2FrecVar { get; set; }
        public int G2BobFab { get; }
        public bool G2TempOk { get; }
        public bool G2TolUp { get; }
        public bool G2TolDowm { get; }
        public bool G3Marcha { get; }
        public int G3Gripper { get; set; }
        public int G3AvisoCelda { get; }
    }
}