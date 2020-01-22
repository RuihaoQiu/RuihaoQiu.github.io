---
title: "Simple git notes"
layout: post
date: 2019-06-01
image:
headerImage: false
tag:
- git
category: blog
author: Ruihao
description: git notes for daily work.
---

<div class="breaker"></div>

## Introduction:

These are some git notes from my daily work.

### Gitlab initial setup

Git global setup
```
git config --global user.name "Ruihao Qiu"
git config --global user.email "ruihao.qiu@hrforecast.de"
```

Create a new repository
```
git clone https://gitlab.com/ruihaoqiu/job-cleaning-tools.git
cd job-cleaning-tools
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

Existing folder
```
cd existing_folder
git init
git remote add origin https://gitlab.com/ruihaoqiu/job-cleaning-tools.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

Existing Git repository
```
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/ruihaoqiu/job-cleaning-tools.git
git push -u origin --all
git push -u origin --tags
```

### Git
#### Git branch

List all branches
```
git branch
git branch list
```

Clone from a branch
```
git clone -b <branch> <remote_repo>
```

Create a branch called new-branch
```
git branch new-branch
```

Delete a branch called old-branch
```
git branch -d old-branch
git branch -D old-branch ## force delete
```

Rename the current branch to `<branch>`.
```
git branch -m <branch>
```

List all remote branches
```
git branch -a
```

Push to remote branch
```
git push origin <branch>
```

##### Creating remote branches

```
git remote add new-remote-repo https://bitbucket.com/user/repo.git
# Add remote repo to local repo config
git push <new-remote-repo> crazy-experiment~
# pushes the crazy-experiment branch to new-remote-repo
```
This command will push a copy of the local branch `crazy-experiment` to the remote repo `<remote>.`

##### Delete remote branches
```
git push origin --delete crazy-experiment
## or
git push origin :crazy-experiment
```

#### Git checkout
Create and check out \<new-branch>
```
git checkout -b <new-branch>
```

Checkout a remote branch, fetch the contents of the branch
```
git fetch --all
```

Checkout the remote branch like a local branch.
```
git checkout <remotebranch>
```

### Reference
1. https://www.atlassian.com/git/tutorials/setting-up-a-repository
1. https://nvie.com/posts/a-successful-git-branching-model/
