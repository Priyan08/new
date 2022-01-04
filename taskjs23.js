// function click() {
//     // Tune these for your application.
//     var MAX_MEMORY_LIMIT = 20 * 1048576; // 20MB
//     var MAX_PERCENT_THRESHOLD = 90;
  
//     if (!window.performance || !window.performance.memory || !window.requestAnimationFrame || !window.trackJs) { return; }
//     var hasAlarmed = false;
  
//     requestAnimationFrame(function onFrame(){
  
//       // Check if we have exceeded absolute memory limit
//       if (performance.memory.usedJSHeapSize > MAX_MEMORY_LIMIT) {
//         hasAlarmed = true;
//         var overage = performance.memory.usedJSHeapSize - MAX_MEMORY_LIMIT;
//         trackJs.track(new Error("Exceeded memory maximum limit by " + overage + " bytes"))
//       }
  
//       // Check if we have exceeded relative memory limit for client
//       if (performance.memory.usedJSHeapSize > (MAX_PERCENT_THRESHOLD/100) * performance.memory.jsHeapSizeLimit) {
//         hasAlarmed = true;
//         trackJs.track(new Error("Memory usage exceeded " + MAX_PERCENT_THRESHOLD + "% of maximum: " + performance.memory.jsHeapSizeLimit))
//       }
  
//       // Only alert once
//       if (!hasAlarmed) {
//         requestAnimationFrame(onFrame);
//       }
//     });
//   };



function cli() {
  var a=9;
  if(a==9){
  a="string";
  document.write(a);
}
console.log(a);
}