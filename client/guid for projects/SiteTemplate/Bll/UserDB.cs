using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Dto;

namespace Bll
{
    public class UserDB
    {
        SiteEntities entities = new SiteEntities();


        public RequestResult GetAllUser()
        {
            try
            {
                List<User_Dto> users = new List<User_Dto>();
                entities.Users.ToList().ForEach(x => users.Add(User_Dto.ConvertToUserDto(x)));
                return new RequestResult
                {
                    Data = users,
                    Messege = "",
                    Status = true
                };
            }
            catch (Exception)
            {
                return new RequestResult
                {
                    Data = null,
                    Messege = "שגיאה בשליפת הנתונים",
                    Status = false
                };
            }
        }

        public RequestResult GetUser(int userId)
        {
            try
            {
                User_Dto user = User_Dto.ConvertToUserDto(entities.Users.FirstOrDefault(x => x.Id == userId));
                return new RequestResult
                {
                    Data = user,
                    Messege = "",
                    Status = true
                };
            }
            catch (Exception)
            {
                return new RequestResult
                {
                    Data = null,
                    Messege = "שגיאה בשליפת המשתמש",
                    Status = false
                };
            }
        }

        public RequestResult LoginUser(string userName,string password)
        {
            try
            {
                User_Dto user = User_Dto.ConvertToUserDto(entities.Users.FirstOrDefault(x => x.UserName == userName && x.Password==password));
                return new RequestResult
                {
                    Data = user,
                    Messege = "הפרטים אומתו בהצלחה",
                    Status = true
                };
            }
            catch (Exception ex)
            {
                return new RequestResult
                {
                    Data = null,
                    Messege = "שם משתמש/סימה שגויים, נסה שנית",
                    Status = false
                };
            }
        }

        public RequestResult AddUser(User_Dto user)
        {
            try
            {
                var userDal = entities.Users.Add(user.ConvertToUser());
                entities.SaveChanges();
                user = User_Dto.ConvertToUserDto(userDal);
                return new RequestResult
                {
                    Data = user,
                    Messege = "הרישום בוצע בהצלחה",
                    Status = true
                };
            }
            catch (Exception)
            {
                return new RequestResult
                {
                    Data = null,
                    Messege = "שגיאה בשמירת הנתונים",
                    Status = false
                };
            }
        }

        public RequestResult UpdateUser(User_Dto user)
        {
            try
            {
                var userDal = entities.Users.FirstOrDefault(x => x.Id == user.Id);
                userDal = user.UpdateDetailsInUser(userDal);
                entities.SaveChanges();
                user = User_Dto.ConvertToUserDto(userDal);
                return new RequestResult
                {
                    Data = user,
                    Messege = "השינויים נשמרו בהצלחה",
                    Status = true
                };
            }
            catch (Exception)
            {
                return new RequestResult
                {
                    Data = null,
                    Messege = "שגיאה בשמירת השינויים",
                    Status = false
                };
            }
        }

        public RequestResult DeleteUser(int userId)
        {
            try
            {
                entities.Users.Remove(entities.Users.FirstOrDefault(x => x.Id == userId));
                entities.SaveChanges();
                return new RequestResult
                {
                    Data = null,
                    Messege = "המשתמש נמחק בהצלחה",
                    Status = true
                };
            }
            catch (Exception)
            {
                return new RequestResult
                {
                    Data = null,
                    Messege = "שגיאה במחיקת המשתמש",
                    Status = false
                };
            }
        }
    }
}
