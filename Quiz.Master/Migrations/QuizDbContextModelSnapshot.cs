﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Quiz.Master.Persistance;

#nullable disable

namespace Quiz.Master.Migrations
{
    [DbContext(typeof(QuizDbContext))]
    partial class QuizDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.0");

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Game", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<int?>("CurrentMiniGame")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("FinishedAt")
                        .HasColumnType("TEXT");

                    b.Property<uint>("GameSize")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("StartedAt")
                        .HasColumnType("TEXT");

                    b.Property<int>("Status")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.MiniGame", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("GameId")
                        .HasColumnType("TEXT");

                    b.Property<int>("Type")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("MiniGame");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.MiniGameScore", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("MiniGameId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("PlayerId")
                        .HasColumnType("TEXT");

                    b.Property<int>("Score")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("MiniGameId");

                    b.HasIndex("PlayerId");

                    b.ToTable("MiniGameScore");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Player", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("DeviceId")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<Guid>("GameId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.MiniGame", b =>
                {
                    b.HasOne("Quiz.Master.Persistance.Models.Game", "Game")
                        .WithMany("MiniGames")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.MiniGameScore", b =>
                {
                    b.HasOne("Quiz.Master.Persistance.Models.MiniGame", "MiniGame")
                        .WithMany("PlayerScores")
                        .HasForeignKey("MiniGameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Quiz.Master.Persistance.Models.Player", "Player")
                        .WithMany("Scores")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("MiniGame");

                    b.Navigation("Player");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Player", b =>
                {
                    b.HasOne("Quiz.Master.Persistance.Models.Game", "Game")
                        .WithMany("Players")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Game", b =>
                {
                    b.Navigation("MiniGames");

                    b.Navigation("Players");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.MiniGame", b =>
                {
                    b.Navigation("PlayerScores");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Player", b =>
                {
                    b.Navigation("Scores");
                });
#pragma warning restore 612, 618
        }
    }
}
