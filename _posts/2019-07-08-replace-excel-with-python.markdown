---
title: "Replace Excel with Python"
layout: post
date: 2019-07-08 22:48
image: 
headerImage: false
tag:
- python
- pandas
- tutorial
category: blog
author: Ruihao
description: Internal tutorial for strategy consultant.
---

<div class="breaker"></div>

## Introduction:

This is a tutorial I gave for the strategy consultants and developers in our company. The aim is to encourage them to use python(pandas) in their daily work of analytics, instead of Excel.

#### Contents
- [Import file](#import-file)
- [Overview](#overview)
- [Select](#select)
- [Statistic summary](#statistic-summary)
- [Aggregation](#aggregation)

---

## Import file

---

First of all, import pandas module

```
import pandas as pd
```

Import example excel file

```
df = pd.read_excel("job_examples.xlsx")
```

Import specific excel sheet(jobs)

```
df = pd.read_excel("job_examples.xlsx", sheet_name="jobs")
```

Use a column(job_id) as an index

```
df = pd.read_excel("job_examples.xlsx", sheet_name="jobs", index_col="job_id")
```



## Overview

---

Gives a summary of dataframe

```
df.info()
```

Summary statistics of dataframe

```
df.describe()
```

Datatypes of the dataframe

```
df.dtypes
```

Head or Tail - display first/final 5 rows

```
df.head()
df.tail()
```

Get the name of all columns

```
df.columns
```

Dimensions of dataframe

```
df.shape
```



## Select

---

## Statistic summary

---

## Aggregation

---



[1]: 