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
    
    public partial class EQUIPMENT
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public EQUIPMENT()
        {
            this.INLAY_EQUIPMENT = new HashSet<INLAY_EQUIPMENT>();
        }
    
        public int ITEM_ID { get; set; }
        public string ITEM_NAME { get; set; }
        public Nullable<int> ITEM_COUNT { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INLAY_EQUIPMENT> INLAY_EQUIPMENT { get; set; }
    }
}
