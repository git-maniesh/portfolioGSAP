function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();





const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./avatar/male0001.png
     ./avatar/male0002.png
     ./avatar/male0003.png
     ./avatar/male0004.png
     ./avatar/male0005.png
     ./avatar/male0006.png
     ./avatar/male0007.png
     ./avatar/male0008.png
     ./avatar/male0009.png
     ./avatar/male0010.png
     ./avatar/male0011.png
     ./avatar/male0012.png
     ./avatar/male0013.png
     ./avatar/male0014.png
     ./avatar/male0015.png
     ./avatar/male0016.png
     ./avatar/male0017.png
     ./avatar/male0018.png
     ./avatar/male0019.png
     ./avatar/male0020.png
     ./avatar/male0021.png
     ./avatar/male0022.png
     ./avatar/male0023.png
     ./avatar/male0024.png
     ./avatar/male0025.png
     ./avatar/male0026.png
     ./avatar/male0027.png
     ./avatar/male0028.png
     ./avatar/male0029.png
     ./avatar/male0030.png
     ./avatar/male0031.png
     ./avatar/male0032.png
     ./avatar/male0033.png
     ./avatar/male0034.png
     ./avatar/male0035.png
     ./avatar/male0036.png
     ./avatar/male0037.png
     ./avatar/male0038.png
     ./avatar/male0039.png
     ./avatar/male0040.png
     ./avatar/male0041.png
     ./avatar/male0042.png
     ./avatar/male0043.png
     ./avatar/male0044.png
     ./avatar/male0045.png
     ./avatar/male0046.png
     ./avatar/male0047.png
     ./avatar/male0048.png
     ./avatar/male0049.png
     ./avatar/male0050.png
     ./avatar/male0051.png
     ./avatar/male0052.png
     ./avatar/male0053.png
     ./avatar/male0054.png
     ./avatar/male0055.png
     ./avatar/male0056.png
     ./avatar/male0057.png
     ./avatar/male0058.png
     ./avatar/male0059.png
     ./avatar/male0060.png
     ./avatar/male0061.png
     ./avatar/male0062.png
     ./avatar/male0063.png
     ./avatar/male0064.png
     ./avatar/male0065.png
     ./avatar/male0066.png
     ./avatar/male0067.png
     ./avatar/male0068.png
     ./avatar/male0069.png
     ./avatar/male0070.png
     ./avatar/male0071.png
     ./avatar/male0072.png
     ./avatar/male0073.png
     ./avatar/male0074.png
     ./avatar/male0075.png
     ./avatar/male0076.png
     ./avatar/male0077.png
     ./avatar/male0078.png
     ./avatar/male0079.png
     ./avatar/male0080.png
     ./avatar/male0081.png
     ./avatar/male0082.png
     ./avatar/male0083.png
     ./avatar/male0084.png
     ./avatar/male0085.png
     ./avatar/male0086.png
     ./avatar/male0087.png
     ./avatar/male0088.png
     ./avatar/male0089.png
     ./avatar/male0090.png
     ./avatar/male0091.png
     ./avatar/male0092.png
     ./avatar/male0093.png
     ./avatar/male0094.png
     ./avatar/male0095.png
     ./avatar/male0096.png
     ./avatar/male0097.png
     ./avatar/male0098.png
     ./avatar/male0099.png
     ./avatar/male0100.png
     ./avatar/male0101.png
     ./avatar/male0102.png
     ./avatar/male0103.png
     ./avatar/male0104.png
     ./avatar/male0105.png
     ./avatar/male0106.png
     ./avatar/male0107.png
     ./avatar/male0108.png
     ./avatar/male0109.png
     ./avatar/male0110.png
     ./avatar/male0111.png
     ./avatar/male0112.png
     ./avatar/male0113.png
     ./avatar/male0114.png
     ./avatar/male0115.png
     ./avatar/male0116.png
     ./avatar/male0117.png
     ./avatar/male0118.png
     ./avatar/male0119.png
     ./avatar/male0120.png
     ./avatar/male0121.png
     ./avatar/male0122.png
     ./avatar/male0123.png
     ./avatar/male0124.png
     ./avatar/male0125.png
     ./avatar/male0126.png
     ./avatar/male0127.png
     ./avatar/male0128.png
     ./avatar/male0129.png
     ./avatar/male0130.png
     ./avatar/male0131.png
     ./avatar/male0132.png
     ./avatar/male0133.png
     ./avatar/male0134.png
     ./avatar/male0135.png
     ./avatar/male0136.png
     ./avatar/male0137.png
     ./avatar/male0138.png
     ./avatar/male0139.png
     ./avatar/male0140.png
     ./avatar/male0141.png
     ./avatar/male0142.png
     ./avatar/male0143.png
     ./avatar/male0144.png
     ./avatar/male0145.png
     ./avatar/male0146.png
     ./avatar/male0147.png
     ./avatar/male0148.png
     ./avatar/male0149.png
     ./avatar/male0150.png
     ./avatar/male0151.png
     ./avatar/male0152.png
     ./avatar/male0153.png
     ./avatar/male0154.png
     ./avatar/male0155.png
     ./avatar/male0156.png
     ./avatar/male0157.png
     ./avatar/male0158.png
     ./avatar/male0159.png
     ./avatar/male0160.png
     ./avatar/male0161.png
     ./avatar/male0162.png
     ./avatar/male0163.png
     ./avatar/male0164.png
     ./avatar/male0165.png
     ./avatar/male0166.png
     ./avatar/male0167.png
     ./avatar/male0168.png
     ./avatar/male0169.png
     ./avatar/male0170.png
     ./avatar/male0171.png
     ./avatar/male0172.png
     ./avatar/male0173.png
     ./avatar/male0174.png
     ./avatar/male0175.png
     ./avatar/male0176.png
     ./avatar/male0177.png
     ./avatar/male0178.png
     ./avatar/male0179.png
     ./avatar/male0180.png
     ./avatar/male0181.png
     ./avatar/male0182.png
     ./avatar/male0183.png
     ./avatar/male0184.png
     ./avatar/male0185.png
     ./avatar/male0186.png
     ./avatar/male0187.png
     ./avatar/male0188.png
     ./avatar/male0189.png
     ./avatar/male0190.png
     ./avatar/male0191.png
     ./avatar/male0192.png
     ./avatar/male0193.png
     ./avatar/male0194.png
     ./avatar/male0195.png
     ./avatar/male0196.png
     ./avatar/male0197.png
     ./avatar/male0198.png
     ./avatar/male0199.png
     ./avatar/male0200.png
     ./avatar/male0201.png
     ./avatar/male0202.png
     ./avatar/male0203.png
     ./avatar/male0204.png
     ./avatar/male0205.png
     ./avatar/male0206.png
     ./avatar/male0207.png
     ./avatar/male0208.png
     ./avatar/male0209.png
     ./avatar/male0210.png
     ./avatar/male0211.png
     ./avatar/male0212.png
     ./avatar/male0213.png
     ./avatar/male0214.png
     ./avatar/male0215.png
     ./avatar/male0216.png
     ./avatar/male0217.png
     ./avatar/male0218.png
     ./avatar/male0219.png
     ./avatar/male0220.png
     ./avatar/male0221.png
     ./avatar/male0222.png
     ./avatar/male0223.png
     ./avatar/male0224.png
     ./avatar/male0225.png
     ./avatar/male0226.png
     ./avatar/male0227.png
     ./avatar/male0228.png
     ./avatar/male0229.png
     ./avatar/male0230.png
     ./avatar/male0231.png
     ./avatar/male0232.png
     ./avatar/male0233.png
     ./avatar/male0234.png
     ./avatar/male0235.png
     ./avatar/male0236.png
     ./avatar/male0237.png
     ./avatar/male0238.png
     ./avatar/male0239.png
     ./avatar/male0240.png
     ./avatar/male0241.png
     ./avatar/male0242.png
     ./avatar/male0243.png
     ./avatar/male0244.png
     ./avatar/male0245.png
     ./avatar/male0246.png
     ./avatar/male0247.png
     ./avatar/male0248.png
     ./avatar/male0249.png
     ./avatar/male0250.png
     ./avatar/male0251.png
     ./avatar/male0252.png
     ./avatar/male0253.png
     ./avatar/male0254.png
     ./avatar/male0255.png
     ./avatar/male0256.png
     ./avatar/male0257.png
     ./avatar/male0258.png
     ./avatar/male0259.png
     ./avatar/male0260.png
     ./avatar/male0261.png
     ./avatar/male0262.png
     ./avatar/male0263.png
     ./avatar/male0264.png
     ./avatar/male0265.png
     ./avatar/male0266.png
     ./avatar/male0267.png
     ./avatar/male0268.png
     ./avatar/male0269.png
     ./avatar/male0270.png
     ./avatar/male0271.png
     ./avatar/male0272.png
     ./avatar/male0273.png
     ./avatar/male0274.png
     ./avatar/male0275.png
     ./avatar/male0276.png
     ./avatar/male0277.png
     ./avatar/male0278.png
     ./avatar/male0279.png
     ./avatar/male0280.png
     ./avatar/male0281.png
     ./avatar/male0282.png
     ./avatar/male0283.png
     ./avatar/male0284.png
     ./avatar/male0285.png
     ./avatar/male0286.png
     ./avatar/male0287.png
     ./avatar/male0288.png
     ./avatar/male0289.png
     ./avatar/male0290.png
     ./avatar/male0291.png
     ./avatar/male0292.png
     ./avatar/male0293.png
     ./avatar/male0294.png
     ./avatar/male0295.png
     ./avatar/male0296.png
     ./avatar/male0297.png
     ./avatar/male0298.png
     ./avatar/male0299.png
     ./avatar/male0300.png
    
     `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];

// start of the frame of the image
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top `,
    scroller: `#main`,
  },
  onUpdate: render,
});
images[1].onload = render();

function render() {
  scaleImage(images[imageSeq.frame], context);
}
function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markes :true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

// gsap.to("#page>canvas", {
//   scrollTigger: {
//     trigger: "#page>canvas",
//     pin: true,
//     // markes :true,
//     scroller: `#main`,
//     start: `top top`,
//     end: `600% top`,
//   },
// });

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    scroller: `#main`,
  },
});

gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    scroller: `#main`,
  },
});




// console docss to download images from the website console

// var imageUrls = [];
// har.log.entries.forEach(function (entry){
//     if(entry.response.content.mimeType.indexOf("image/") != 0) return;
//     imageUrls.push(entry.request.url);
// });
// console.log(imageUrls.join('\n'));