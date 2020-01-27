---
title: "Create virtual environment with virtualenv"
layout: post
date: 2019-04-20 11:48
image:
headerImage: false
tag:
- python
- virtualenv
category: blog
author: Ruihao Qiu
---
<div class="breaker"></div>

## Virtual environment

`virtualenv` is a tool to create isolated Python environments. Here is a quick example for creating a python virtual environment.

create a virtual environment `venv`
```
virtualenv venv
```
activate it
```
source venv/bin/activate
```
install python dependencies
```
pip install <package>
```
make `requirements.txt` with all dependencies and versions
```
pip freeze > requirements.txt
```
Until now, it is done. The following commend can deactivate `venv`
```
deactivate
```
or even remove it `rm -r venv`
