using System;
using System.Collections.Generic;

namespace DntAppApi.Infrastructure.Entities;

public partial class MstProduct
{
    public int ProductId { get; set; }

    public string Name { get; set; }

    public int Quantity { get; set; }

    public decimal Price { get; set; }
}
