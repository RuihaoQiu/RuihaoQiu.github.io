---
title: "Skill-based Job Recommender System (Part. 1)"
layout: post
date: 2019-08-04 15:48
image:
headerImage: false
tag:
- recommender system
- skills
category: blog
author: Ruihao Qiu
description: Lecture for data engineering master student in Jacob University

---

<div class="breaker"></div>

### Introduction:

Last winter, I was invited to give a lecture to the data engineering master student in Jacobs University Bremen. I talked about our daily data engineering work and our job recommender system. After that, I received some nice feedbacks - there are many students are interested in this topic. After working on the topic for a while, I would like to give more details in this post.



### Intro to skill/job recommender system

What is special for job recommender system.

First of all, there is usually only one job per vacancy, compared to books or songs that can be used by an unlimited amount of people, recommender system should always recommend live jobs. The other way around, it should recommend available candidates.

It is not sufficient for the job seeker to be interested in the vacancy. The job provider also has to deem the job seeker a suitable candidate. In many other recommendation contexts, it is not required for the item to be interested in the user.

Finding a job is usually a bigger decision than picking a movie or book, it belongs to a high risk recommendation context.

In job market, a job recommender system need to answer two questions from both sides:

- Job seeker: What available vacancy is the best one for me?
- Job provider: Out of all job seekers, which one should we hire?


There are two different kinds of recommender systems:

- Content-based filter: recommend items based on user/item characters.
- Collaborative filter: recommend items based on user's historical records, the user's explicit interest (like/dislike, rating or reviews) and implicit interest (clicks on an item, bookmarking an item’s URL, time spent on the page)

Generally speaking, collaborative filter works better than content filter, it includes information of the users' preference. A major advantage of collaborative filtering is that it is domain free, yet it can address data aspects that are often elusive and difficult to profile using content filtering. However, collaborative filtering suffers from what is called the cold start problem, due to its inability to address the system’s new products and users. In this aspect, content filtering is superior.

Currently we are facing the cold start problem, our application is still under development. However, we still have the useful information about the users - their current position, skills, working experience etc. from their CVs. And in the other way round, we have all information about the job in the job post.

Our key is the skills, in both CV and job posts. Based on skills, user and item become identical. The system just need to find out the most similar profiles to the job post or most similar job post to a candidate.

I will further discuss in my next post.
