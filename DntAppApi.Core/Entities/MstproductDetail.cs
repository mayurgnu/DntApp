using System;
using System.Collections.Generic;

namespace DntAppApi.Core.Entities;

public partial class MstproductDetail
{
    public int ProductDetailId { get; set; }

    public int ProductId { get; set; }

    public string Description { get; set; }
}
