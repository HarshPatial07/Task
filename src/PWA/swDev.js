export default function swDev()
{
    function determineAppServerKey(){
        var vapidPublicKey='BKU2s9vGTMiIiIPCZUXfnSyIiK8IAOvAL6CwUYFP9x6_mwTmCMGlodAzSeE-6kBV3VL9jAflsdsqBUWodv5186Y'
        return urlBase64toUnit8Array(vapidPublicKey)
    }
    function urlBase64toUnit8Array(base64String){
        const paddind = '='.repeat((4-base64String.length % 4) %4);
        const base64=(base64String + paddind)
        .replace(/\-/g,'+')
        .replace(/_/g,'/');

        const rawData=window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i =0; i<rawData.length; ++i){
            outputArray[i]=rawData.charCodeAt(i);
        }
        return outputArray;
    }


    let swUrl=`${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((response)=>{
        console.log('response', response)
        return response.pushManager.getSubscription()
        .then(function(subscription){
            return response.pushManager.subscribe({
                userVisibleOnly:true,
                applicationServerKey:determineAppServerKey()
            })
        })
    })
}