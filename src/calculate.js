const cropsData = {
  Rice: {
    lowerTemperature: 18,
    higherTemperature: 32,
    img: "../public/assets/rice.jpeg",
    phMedian: 6.5,
    description:
      "Rice holds significant importance in India, both culturally and as a staple food. It is a major cereal crop and a primary source of sustenance for a large portion of the population. India is one of the world's largest producers and consumers of rice.",
  },
  Maize: {
    lowerTemperature: 21,
    higherTemperature: 27,
    img: "../public/assets/maize.jpg",
    phMedian: 6.5,
    description:
      "Maize, also known as corn, plays a notable role in India's agricultural landscape as a major cereal crop. Maize cultivation in India is marked by its adaptability to diverse climates, versatile applications, and economic importance.",
  },
  "Green pea": {
    lowerTemperature: 12,
    higherTemperature: 15,
    img: "../public/assets/green peas.jpg",
    phMedian: 6.75,
    description:
      "Green peas, also known as matar in Hindi, are a popular and versatile vegetable in India. Green pea cultivation in India is characterized by its cultural significance, culinary versatility, and economic importance for both farmers and the food industry. The crop's adaptability to specific climatic conditions and its nutritional benefits contribute to its popularity in Indian agriculture and cuisine.",
  },
  Soybean: {
    lowerTemperature: 25,
    higherTemperature: 30,
    img: "../public/assets/soybean.jpg",
    phMedian: 6.4,
    description:
      "Soybean cultivation has gained prominence in India as a major oilseed crop with versatile applications. The crop's adaptability to different climatic conditions and its role in providing essential products for both human and animal consumption contribute to its prominence in Indian agriculture.",
  },
  Rubber: {
    lowerTemperature: 25,
    higherTemperature: 34,
    img: "../public/assets/Rubber tree.webp",
    phMedian: 5.25,
    description:
      "Rubber cultivation in India has gained importance as a significant industrial crop. Rubber cultivation in India is primarily concentrated in the southern states of Kerala, Tamil Nadu, Karnataka, and northeastern states like Assam and Tripura. These regions provide favorable agro-climatic conditions for rubber plantations.",
  },
  Coconut: {
    lowerTemperature: 27,
    higherTemperature: 27,
    img: "../public/assets/Coconut Tree.jpg",
    phMedian: 6,
    description:
      "Coconut cultivation holds significant importance in India, playing a crucial role in agriculture, economy, and culture. Coconut cultivation is widespread in the coastal regions of India, particularly in states such as Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Maharashtra, Odisha, and West Bengal. Coastal areas provide the ideal climate for coconut palms to thrive. The adaptability of coconut palms to coastal environments and the multitude of applications contribute to the enduring significance of coconuts in India.",
  },
  Groundnut: {
    lowerTemperature: 27,
    higherTemperature: 30,
    img: "../public/assets/Groundnut.jpg",
    phMedian: 6.75,
    description:
      "Groundnut, also known as peanut, is a significant oilseed crop in India, playing a crucial role in agriculture and the economy. Groundnut cultivation in India is marked by its economic importance, versatility in uses, and adaptability to diverse agro-climatic conditions. The crop remains a key component of the country's agricultural landscape, contributing to food security, income generation, and agricultural sustainability.",
  },
  Blackpepper: {
    lowerTemperature: 20,
    higherTemperature: 30,
    img: "../public/assets/Blackpepper.webp",
    phMedian: 6,
    description:
      "Black pepper (Piper nigrum) is a widely cultivated spice in India, known for its pungent flavor and aromatic properties. Black pepper cultivation in India is characterized by its regional concentration in the southern states, cultural significance, and economic importance as a globally sought-after spice. The spice has a long history of use in Indian cuisine and continues to be a valuable commodity in international trade.",
  },
  Okra: {
    lowerTemperature: 25,
    higherTemperature: 35,
    img: "../public/assets/Okra.jpg",
    phMedian: 6.75,
    description:
      'Okra, known as "bhindi" in Hindi, is a popular and widely cultivated vegetable in India. Okra thrives in warm and tropical climates, making it well-suited for cultivation across various regions in India. Okra is a versatile and widely consumed vegetable in India, contributing to the country\'s culinary traditions and agricultural practices. Its adaptability to diverse climates and straightforward cultivation make it a significant and accessible crop for farmers across different regions.',
  },
  Tomato: {
    lowerTemperature: 21,
    higherTemperature: 24,
    img: "../public/assets/Tomato.jpg",
    phMedian: 7.25,
    description:
      'Tomato, known as "tamatar" in Hindi, is a widely cultivated vegetable in India and holds significant importance in the country\'s culinary landscape. Tomato cultivation is a vital component of agriculture in India, contributing to both domestic consumption and international trade. The versatility of tomatoes in culinary applications and the support from government initiatives underline the agricultural and economic significance of this popular vegetable.',
  },
  Cauliflower: {
    lowerTemperature: 23,
    higherTemperature: 23,
    img: "../public/assets/Cauliflower.jpg",
    phMedian: 6.05,
    description:
      'Cauliflower, known as "phool gobhi" in Hindi, is a popular and widely cultivated vegetable in India. Cauliflower is a widely cultivated and consumed vegetable in India, prized for its culinary versatility and nutritional value. Its cultivation during the winter season makes it an important component of the agricultural landscape in various regions of the country.',
  },
  Cabbage: {
    lowerTemperature: 15,
    higherTemperature: 21,
    img: "../public/assets/Cabbage.jpg",
    phMedian: 6.25,
    description:
      'Cabbage, known as "patta gobhi" in Hindi, is a widely cultivated vegetable in India and holds significant importance in the country\'s culinary practices. Cabbage is a widely cultivated and consumed vegetable in India, prized for its nutritional value. Its cultivation during the winter season makes it an important component of the agricultural landscape in various regions of the country.',
  },
  Banana: {
    lowerTemperature: 27,
    higherTemperature: 27,
    img: "../public/assets/Banana tree.jpg",
    phMedian: 7,
    description:
      "Banana cultivation is widespread in India, and the country is one of the largest producers of bananas globally. The versatile uses of bananas, from fresh consumption to various processed products, contribute to the popularity and widespread cultivation of this tropical fruit in the country.",
  },
  Guava: {
    lowerTemperature: 23,
    higherTemperature: 28,
    img: "../public/assets/Guava.jpg",
    phMedian: 7,
    description:
      "Guava, known as \"amrud\" in Hindi, is a popular and economically important fruit in India. Guava is well-suited to tropical and subtropical climates. It can tolerate a wide range of temperatures but prefers warm weather. Guava trees are resilient and can withstand drought conditions, making them suitable for different parts of the country. The fruit's widespread popularity and diverse applications contribute to its prominence in the country's horticultural landscape.",
  },
  Jackfruit: {
    lowerTemperature: 21,
    higherTemperature: 32,
    img: "../public/assets/Jackfruit.jpg",
    phMedian: 6.25,
    description:
      'Jackfruit, known as "kathal" in Hindi, is a large and versatile tropical fruit that holds cultural, culinary, and economic significance in India. The fruit is not only consumed domestically but is also exported to various countries. The processed forms of jackfruit, such as canned jackfruit and jackfruit products, contribute to international trade.',
  },
  Mango: {
    lowerTemperature: 27,
    higherTemperature: 27,
    img: "../public/assets/mango.jpg",
    phMedian: 6.5,
    description:
      'Mango, known as the "king of fruits," is one of the most beloved and widely cultivated fruits in India. Mango trees (Mangifera indica) require a tropical climate for optimal growth. They thrive in warm temperatures and are sensitive to frost. The fruiting season varies, with different varieties maturing at different times during the year.',
  },
};

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  let temperature = document.getElementById("temperature").value;
  let ph = document.getElementById("ph").value;
  temperature = parseInt(temperature);
  ph = parseFloat(ph);
  let selectedCrops = [];
  for (const crop in cropsData) {
    if (
      temperature >= cropsData[crop].lowerTemperature &&
      temperature <= cropsData[crop].higherTemperature
    ) {
      selectedCrops.push(crop);
      console.log(selectedCrops);
    }
    let selectedCrop = "NONE";
    let maxi = Number.MAX_VALUE;
    selectedCrops.forEach((crop) => {
      if (Math.abs(cropsData[crop].phMedian - ph) < maxi) {
        maxi = Math.abs(cropsData[crop].phMedian - ph);
        selectedCrop = crop;
      }
    });
    console.log(selectedCrop);
    if (selectedCrop != "NONE") {
      let result = document.querySelector("#result");
      if (result.classList.contains("hidden")) {
        result.classList.remove("hidden");
      }
      let cropImg = document.querySelector("#cropImg");
      let cropheading = document.querySelector("#cropHeader");
      let cropdescription = document.querySelector("#cropdescription");
      cropheading.innerHTML = selectedCrop;
      cropdescription.innerHTML = cropsData[selectedCrop].description;
      cropImg.src = cropsData[selectedCrop].img;
    }
  }
});
