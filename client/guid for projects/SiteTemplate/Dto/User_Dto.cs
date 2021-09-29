using AutoMapper;
using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class User_Dto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string IdentityNumber { get; set; }


        public User ConvertToUser()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<User_Dto, User>());
            var mapper = new Mapper(config);
            return mapper.Map<User>(this);
        }

        public static User_Dto ConvertToUserDto(User user)
        {
            var config = new MapperConfiguration(cfg =>
                   cfg.CreateMap<User, User_Dto>()
               );
            var mapper = new Mapper(config);
            return mapper.Map<User_Dto>(user);
        }

        public User UpdateDetailsInUser(User user)
        {
            var config = new MapperConfiguration(cfg =>
                   cfg.CreateMap<User, User_Dto>()
               );
            var mapper = new Mapper(config);
            return mapper.Map(this,user);
        }

    }
}
