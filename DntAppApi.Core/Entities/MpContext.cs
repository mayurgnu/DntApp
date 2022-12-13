using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DntAppApi.Core.Entities;

public partial class MpContext : DbContext
{
    public MpContext()
    {
    }

    public MpContext(DbContextOptions<MpContext> options)
        : base(options)
    {
    }

    public virtual DbSet<MstProduct> MstProducts { get; set; }

    public virtual DbSet<MstproductDetail> MstproductDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("data source=localhost\\SQLEXPRESS;initial catalog=MP;Integrated Security=true;Encrypt=True;TrustServerCertificate=True;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MstProduct>(entity =>
        {
            entity.HasKey(e => e.ProductId);

            entity.ToTable("MST_Product");

            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(100);
            entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");
        });

        modelBuilder.Entity<MstproductDetail>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("MSTProductDetail");

            entity.Property(e => e.Description).HasMaxLength(50);
            entity.Property(e => e.ProductDetailId).ValueGeneratedOnAdd();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
