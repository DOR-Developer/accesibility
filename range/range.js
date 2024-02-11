document.querySelectorAll("progress").forEach(progress => {
    const interval = setInterval(() => {
        console.log("Step");
        progress.setAttribute("value", Number(progress.getAttribute("value")) + 1);
        if (Number(progress.getAttribute("value")) >= Number(progress.getAttribute("max"))) {
            clearInterval(interval);
            progress.setAttribute("value", progress.getAttribute("max"));
        }
    }, 50);
});

/**
 * Not used.
 * It just won't work.
 */

// document.querySelectorAll("label:has(input[type='number'])").forEach(label => {
//     try {
//         const lessButton = label.querySelector("button:first-of-type");
//         const moreButton = label.querySelector("button:last-of-type");
//         const input = label.querySelector("input[type='number']");

//         lessButton.addEventListener("mouseup", () => {
//             try {
//                 const value = Number(input.getAttribute("value"));
//                 const step = Number(input.getAttribute("step")) ?? 1;
//                 const min = Number(input.getAttribute("min"));
//                 console.log(value, step, min);
//                 input.setAttribute("value",  (value - step).toFixed(2));
//                 if (Number(input.getAttribute("value")) <= min) {
//                     input.setAttribute("value",  min);
//                 }

//             } catch (error) {}
//         });

//         moreButton.addEventListener("mouseup", () => {
//             try {
//                 const value = Number(input.getAttribute("value"));
//                 const step = Number(input.getAttribute("step")) ?? 1;
//                 const max = Number(input.getAttribute("max"));
//                 console.log(value, step, max);
//                 input.setAttribute("value",  (value + step).toFixed(2));
//                 if (Number(input.getAttribute("value")) >= max) {
//                     input.setAttribute("value",  max);
//                 }
                
//             } catch (error) {}
//         });

//         input.addEventListener("input", (ev) => {
//             try {
                
//             } catch (error) {
//                 console.log(error);
//             }
//         });
        
//     } catch (error) {}
// });