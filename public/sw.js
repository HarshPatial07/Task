// let cacheData="app";
// this.addEventListener("install",(event)=>{
//     event.waitUntil(
//         caches.open(cacheData).then((cache)=>{
//             cache.addAll([
//                 "/static/js/bundle.js",
//                 "/manifest.json", 
//                 "/favicon.ico",  
//                 "/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" ,
//                 "http://localhost:3000",          
//                "/index.html",
//                "/index.html0",
//                '/',
//                '/users'
//             ])
//         })
//     )
// })
// this.addEventListener("fetch",(event)=>{
//     console.warn("url",event.request.url)
//     // event.waitUntil(
//     //     this.registration.showNotification("hello",{
//     //         body:"Hello from"
//     //     })
//     // )
//     if(!navigator.onLine)
//     {
//         event.respondWith(
//             caches.match(event.request).then((result)=>{
//                 if(result)
//                 {
//                     return result
//                 }
//                 let requestUrl=event.request.clone()
//                 return fetch(requestUrl)
//             })
//         )
//     }
   
// })