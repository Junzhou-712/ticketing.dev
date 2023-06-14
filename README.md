![Header](https://raw.githubusercontent.com/junzhou-712/ticketing.dev/master/.github/img/header.png)

Ticketing.dev distributed e-commerce platform solution
=========

Introduction
--------
Ticketing.dev is a event-driven ticketing platform for sellers and buyer, with the separated front end and back end, which is developed by *MERN* and integrates Redis, NATS messaging queue and jwt services.

Build Locally
--------
Prerequisite: [Skaffold](https://skaffold.dev/docs/install/)

clone this repo to local

`git clone https://github.com/Junzhou-712/ticketing.dev`

run `skaffold dev`. This assumes that your ticketing secret had previously been set. If not, you will need to run:

`kubectl create secret generic jwt-secret --from-literal JWT_KEY=asdf`

(Ensure your docker and kubernete is running)