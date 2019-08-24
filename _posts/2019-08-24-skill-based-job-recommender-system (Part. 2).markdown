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

From the first part, I mentioned about our skill based methodology. In this part, I would like to go into the details. Basically, we have to solve two problem - 1) how to identify skills and 2) how to make recommendation.



#### Skill identification

Before I join the company, they had already developed this technique to identify and extract skills from job descriptions. They spent a lot of time and effort to build up a skill catalogue, containing thousands of skills and keywords. These skills are well classified into different skill family and  subfamily. In the mean time, they had developed a skill named entity recognition(NER) system, that can extract skill from text in 15 languages.

The idea behind skill extraction is very simple, extract skills from the text based on a long list of keywords. The quality depends on - 

- how to define keywords
- how well we clean the raw text
- how well the NER algorithm works



To be continues …

