//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class USERS
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public USERS()
        {
            this.INLAY = new HashSet<INLAY>();
        }
    
        public int USR_ID { get; set; }
        public string USR_NAME { get; set; }
        public Nullable<int> USR_PHONE { get; set; }
        public string USR_CITY { get; set; }
        public string USR_ADDRESS { get; set; }
        public string USR_PASSWARD { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INLAY> INLAY { get; set; }
    }
}
