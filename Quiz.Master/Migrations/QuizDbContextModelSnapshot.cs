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

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Answer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsCorrect")
                        .HasColumnType("INTEGER");

                    b.Property<Guid>("QuestionId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("QuestionId");

                    b.ToTable("Answers");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.AnswerSelection", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("AnswerId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("AnsweredAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<Guid>("PlayerId")
                        .HasColumnType("TEXT");

                    b.Property<int>("Score")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("AnswerId");

                    b.HasIndex("PlayerId");

                    b.ToTable("AnswerSelections");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Game", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<DateTime?>("FinishedAt")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("GameScoreId")
                        .HasColumnType("TEXT");

                    b.Property<uint>("GameSize")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("StartedAt")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.GameScore", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("GameId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("PlayerId")
                        .HasColumnType("TEXT");

                    b.Property<int>("ScoreValue")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("GameId")
                        .IsUnique();

                    b.HasIndex("PlayerId")
                        .IsUnique();

                    b.ToTable("GameScores");
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

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Question", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("CorrectAnswerId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<Guid>("GameId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CorrectAnswerId")
                        .IsUnique();

                    b.HasIndex("GameId");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Answer", b =>
                {
                    b.HasOne("Quiz.Master.Persistance.Models.Question", "Question")
                        .WithMany("Answers")
                        .HasForeignKey("QuestionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Question");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.AnswerSelection", b =>
                {
                    b.HasOne("Quiz.Master.Persistance.Models.Answer", "Answer")
                        .WithMany()
                        .HasForeignKey("AnswerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Quiz.Master.Persistance.Models.Player", "Player")
                        .WithMany()
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Answer");

                    b.Navigation("Player");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.GameScore", b =>
                {
                    b.HasOne("Quiz.Master.Persistance.Models.Game", "Game")
                        .WithOne("GameScore")
                        .HasForeignKey("Quiz.Master.Persistance.Models.GameScore", "GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Quiz.Master.Persistance.Models.Player", "Player")
                        .WithOne()
                        .HasForeignKey("Quiz.Master.Persistance.Models.GameScore", "PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");

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

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Question", b =>
                {
                    b.HasOne("Quiz.Master.Persistance.Models.Answer", "CorrectAnswer")
                        .WithOne()
                        .HasForeignKey("Quiz.Master.Persistance.Models.Question", "CorrectAnswerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Quiz.Master.Persistance.Models.Game", "Game")
                        .WithMany("Questions")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CorrectAnswer");

                    b.Navigation("Game");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Game", b =>
                {
                    b.Navigation("GameScore")
                        .IsRequired();

                    b.Navigation("Players");

                    b.Navigation("Questions");
                });

            modelBuilder.Entity("Quiz.Master.Persistance.Models.Question", b =>
                {
                    b.Navigation("Answers");
                });
#pragma warning restore 612, 618
        }
    }
}
