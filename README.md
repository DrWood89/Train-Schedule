# Train-Schedule
A Live (real time update) Train Schedule!

## :mag: Table of contents :mag:

### [1-Description](https://github.com/DrWood89/Train-Schedule#1-description-page_facing_up)
### [2-Technologies](https://github.com/DrWood89/Train-Schedule#2-technologies-computer)
### [3-Challenges](https://github.com/DrWood89/Train-Schedule#3-challenges)
### [4-Issues](https://github.com/DrWood89/Train-Schedule#4-issues)
### [5-Future Updates](https://github.com/DrWood89/Train-Schedule#4-future-updates)
### [6-Preview Link](https://github.com/DrWood89/Train-Schedule#5-preview-link)

---
### 1-Description :page\_facing\_up:

This real time live update app. This live update train schedule allows you to view the trains already in the schedule
including the train name, Destination, Frequency in minutes, Next Arrival, Miniutes Away and a remove button all 
update in real time.

It also allows you to add a new train into the schedule grabbing inputs from the addTrain form to populate a new column 
in the schedule table. With the first train time and train frequency it allows us to calculate next arrival and minutes
away using moment.js

This app is intented to showcase the ability to work with firebase, moment and JQuery logic to create a live updated
train schedule web app and the ability to work with persistant data.

Below is deployed link to the working site.

---
### 2-Technologies  :computer:

these are the following technologies used to build this app
- BootStrap
- CSS
- JQuery

---
### 3-Challenges 

The challenges faced during this app was while utilizing moment to have app update in real time which i fixed 
and to delete data in the database when delete on the site.

---
### 4-Issues

When deleting a train from the schedule because i have it update every second the data comes back which means
it doesn't delete from the database.

---
### 5-Future Updates

In the future i would like to get my remove or delete function that move that date to a deleted table for future use
just in case we would like to re integrate that train back in the schedule.

---
### 6-Preview Link

[Deployed Link](https://drwood89.github.io/Train-Schedule/)
