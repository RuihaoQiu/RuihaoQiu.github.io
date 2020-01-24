---
title: "Implementation - Docker example"
layout: post
date: 2019-06-15
image:
headerImage: false
tag:
- docker
category: blog
author: Ruihao
description: Implement code with docker.
---

<div class="breaker"></div>

# Docker notes

Docker is a tool that allows developers to easily deploy their applications in a container, and run on the host operating system i.e. Linux. The key benefit of Docker is that it allows users to **package an application with all of its dependencies into a standardized unit** for software development.

Some concepts:

- Container:  a running instance that encapsulates required software.
- Image:  the basic element for every container.
- Port:  exposed to the outer world or connected to other containers.
- Docker hub:  library and community for container images.

## Example

- Prepare your python script, ex. `index.py`
```
import argparse
parser = argparse.ArgumentParser(description='Process some inputs.')
parser.add_argument('input_text', metavar='text', type=str,
                    help='input text')
args = parser.parse_args()
def print_text():
    print(args.input_text)
if __name__ == "__main__":
    print_text()
```
- Prepare dependencies of your python script, make `requirement.txt`
- Prepare `Dockerfile` include the instructions to build image
```
FROM python:alpine3.7
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
ENTRYPOINT ["python", "index.py"]
```
- build image
```
docker build --tag test-app .
```
- run image on container
```
docker run test-app "hello world."
```

## Useful commands
`docker images`: see a list of all images on your system.  
`docker ps -a`: shows you all containers you ran, without `-a` show running containers.  
`docker container prune`: deletes all stopped containers.  
`docker ps -q -a | xargs docker rm`: deletes all containers.   
`docker rm contain_id`: deletes container.  
`docker rmi image_id`: deletes image.


## Useful options
with `docker build`  
`-tag`: tag to an images

with `docker run`  
`--rm`: remove container when finish.  
`--name`: assign a name for container.  
`-p`: point to a port.

### Reference

1. https://www.wintellect.com/containerize-python-app-5-minutes/
2. https://docker-curriculum.com/
3. https://djangostars.com/blog/what-is-docker-and-how-to-use-it-with-python/
