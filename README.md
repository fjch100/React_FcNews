# React_FcNews
React App for News from NewsApi.org. The App has 7 differents news categories to select: Headlines, Science, Technology, Sports, Health, Entertaiment and Business.

To Avoid the protection of NewsApi.org about only work in development and Localhost, 
I create a Node.js App called nodebot_fcnews, this app runs on a Raspberrt-pi in my home and connect to the newApi.org API 
and then fetch the news for each category to a Firebase-Firestore collection/DB . 
The React_FcNews App then fetch the news from firebase to show on the Browser.
The Raspberri-Pi  NodeBot_fcnews App is runned by a cronjob task every hour to keep the news updated in firebase.
