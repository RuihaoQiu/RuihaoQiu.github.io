---
title: "Skill-based Job Recommender System (Part. 2)"
layout: post
date: 2019-08-24 14:08
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

### Skill Recommender System

From the first part, I mentioned about our skill based methodology. In this part, I would like to go into the details. Basically, we have to solve two problems - 1) how to identify skills and 2) how to make recommendation.



#### Skill identification

Before I join the company, they had already developed this technique to identify and extract skills from job descriptions. They spent a lot of time and efforts to build up a skill catalogue, containing thousands of skills and keywords. These skills are well classified into different skill family and subfamily. In the mean time, they had developed a skill named entity recognition(NER) system, that can extract skill from text in 15 languages.

The idea behind skill extraction is very simple, extract skills from the text based on a long list of keywords. The quality depends on - 

- how to define keywords

  should avoid the following cases: 

  words too general (eg. technology, management) 

  words too specific (eg. Microsoft words 2007, …

  words too long (…)

  words too short (…)

- how well we clean the raw text

  ideally, only two parts — responsibility and requirement — are useful. However, in many cases, it is not easy to extract only this two parts (here we are developing ML models to identify them). 

- how well the NER algorithm works

  two things are important here, the efficiency and the accuracy. 

  the efficiency of the algorithm shows how quick we can extract skills from the text. After making a lot of efforts on the improvement, now we are happy that we are no longer suffering on waiting, we are able to extract skills for 1m jobs within couple of minutes.

  the accuracy here depends on the keywords, but in the mean time, depends on how good the algorithm can handle ambiguous words.



#### Skill recommendation

There are many different ways to do recommendation on skills. Again, the recommendations strongly depend on how much information we know about our users and what the users really want.

**Case 1** - 

The user want to know what kinds of skills he/she should put on their profile, that will increase his/her competitive in the label market.

**Case 2** -

The user want to apply for certain position, what kind of skills he/she might need for that position.

**Case 3** -  





To be continues …

