using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HMB_Crossfit_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WODController : ControllerBase
    {
        [HttpGet]
        [DisableCors]
        public JsonResult GetWODList()
        {
            return new JsonResult(GetFran());
           
        }

        public WOD GetFran()
        {
            var Fran = new WOD
            {
                Id = 1,
                Date = DateTime.Now,
                Type = 2,
                Name = "Fran",
                Exercises = new List<WODExercise>
                {
                    new WODExercise
                    {
                        ExerciseName = "Pull-Up",
                        Reps = 21
                    },
                    new WODExercise
                    {
                        ExerciseName = "Thruster",
                        Reps = 21
                    },
                    new WODExercise
                    {
                        ExerciseName = "Pull-Up",
                        Reps = 15
                    },
                    new WODExercise
                    {
                        ExerciseName = "Thruster",
                        Reps = 15
                    },
                    new WODExercise
                    {
                        ExerciseName = "Pull-Up",
                        Reps = 9
                    },
                    new WODExercise
                    {
                        ExerciseName = "Thruster",
                        Reps = 9
                    },
                }
            };

            return Fran;
        }
    }

    public class WOD
    {
        public int                  Id          { get; set; }
        public DateTime             Date        { get; set; }
        public int                  Type        { get; set; }
        public string               Name        { get; set; }
        public List<WODExercise>    Exercises   { get; set; }
    }

    public class WODExercise
    {
        public string   ExerciseName    { get; set; }
        public int      Reps            { get; set; }
        public TimeSpan Time            { get; set; }
    }
}