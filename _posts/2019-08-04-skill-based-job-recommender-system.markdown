---
title: "Skill-based Job Recommender System"
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



#### Contents

- [Intro to recommender system](#intro-to-recommender-system)

  ​

### Intro to recommender system

Recommender system is everywhere. Image it is just a smart machine that introduce the users to products that they will be interested in.

- E-commerce platforms, such as Amazon, recommend their customers various of products based on huge amount of data from millions of customers and products.
- Entertainment providers, such as Youtube, Spotify and Netflix, recommend songs and movies to their users.
- Job platforms, such as LinkedIn, they are making two way recommendation, recommend jobs to job seeker, as well as, recommend profiles to job providers. 
- Advertisement, real-estate market, dating …



What is the difference between jobs and other items.

- There is usually only one job per vacancy, compared to books or songs that can be used by an unlimited amount of people. 
- It is not sufficient for the job seeker to be interested in the vacancy. The job provider also has to deem the job seeker a suitable candidate. In many other recommendation contexts, it is not required for the item to be interested in the user. 
- Finding a job is usually a bigger decision than picking a movie or book, it belongs to a high risk recommendation context.



In job market, a job recommender system need to answer two question:

Job seeker: What available vacancy is the best one for me?

Job provider: Out of all job seekers, which one should we hire?



**Explicit user interest** is conveyed when the user is aware that he/she is telling the system how (un)interesting and item is for him/her. Common examples of ways to capture explicit user interests are likes/dislikes, five-star rating systems or even free text reviews. 

**Implicit user interest** is based on the assumption that certain behavioral characteristics contain information on how (un)interesting a specific item is for a user. Common examples of ways to capture implicit user interests are looking at clicks on an item, purchasing an item, bookmarking an item’s URL, and dwell time on an item’s descriptive page.

​	




​		
​	

​	
​		
​	



