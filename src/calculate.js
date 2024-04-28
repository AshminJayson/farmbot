const cropsData = {
  Rice: {
    lowerTemperature: 18,
    higherTemperature: 32,
    lowerHumidity: 80,
    higherHumidity: 85,
    img: "../public/assets/rice.jpeg",
    phMedian: 6.5,
    N_value: 90,
    P_value: 30,
    K_value: 35,
    moisture: 80,
    description:
      "Rice holds significant importance in India, both culturally and as a staple food. It is a major cereal crop and a primary source of sustenance for a large portion of the population. India is one of the world's largest producers and consumers of rice. The crops should be at a distance of 0.25m apart. ",
  },
  Maize: {
    lowerTemperature: 21,
    higherTemperature: 27,
    lowerHumidity: 55,
    higherHumidity: 75,
    img: "../public/assets/maize.jpg",
    phMedian: 6.5,
    N_value: 120,
    P_value: 60,
    K_value: 70,
    moisture: 85,
    description:
      "Maize, also known as corn, plays a notable role in India's agricultural landscape as a major cereal crop. Maize cultivation in India is marked by its adaptability to diverse climates, versatile applications, and economic importance. The crops should be at a distance of 0.75m apart.",
  },
  "Green pea": {
    lowerTemperature: 12,
    higherTemperature: 15,
    lowerHumidity: 60,
    higherHumidity: 70,
    img: "../public/assets/green peas.jpg",
    phMedian: 6.75,
    N_value: 60,
    P_value: 35,
    K_value: 45,
    moisture: 70,
    description:
      "Green peas, also known as matar in Hindi, are a popular and versatile vegetable in India. Green pea cultivation in India is characterized by its cultural significance, culinary versatility, and economic importance for both farmers and the food industry. The crop's adaptability to specific climatic conditions and its nutritional benefits contribute to its popularity in Indian agriculture and cuisine. The crops should be at a distance of 0.07m apart.",
  },
  Soybean: {
    lowerTemperature: 25,
    higherTemperature: 30,
    lowerHumidity: 40,
    higherHumidity: 70,
    img: "../public/assets/soybean.jpg",
    phMedian: 6.4,
    N_value: 40,
    P_value: 60,
    K_value: 30,
    moisture: 70,
    description:
      "Soybean cultivation has gained prominence in India as a major oilseed crop with versatile applications. The crop's adaptability to different climatic conditions and its role in providing essential products for both human and animal consumption contribute to its prominence in Indian agriculture. The crops should be at a distance of 2.4m apart.",
  },
  Rubber: {
    lowerTemperature: 25,
    higherTemperature: 34,
    lowerHumidity: 80,
    higherHumidity: 100,
    img: "../public/assets/Rubber tree.webp",
    phMedian: 5.25,
    N_value: 60,
    P_value: 25,
    K_value: 70,
    moisture: 90,
    description:
      "Rubber cultivation in India has gained importance as a significant industrial crop. Rubber cultivation in India is primarily concentrated in the southern states of Kerala, Tamil Nadu, Karnataka, and northeastern states like Assam and Tripura. These regions provide favorable agro-climatic conditions for rubber plantations. The crops should be at a distance of 2.4m apart.",
  },
  Coconut: {
    lowerTemperature: 27,
    higherTemperature: 27,
    lowerHumidity: 90,
    higherHumidity: 100,
    img: "../public/assets/Coconut Tree.jpg",
    phMedian: 6,
    N_value: 75,
    P_value: 25,
    K_value: 110,
    moisture: 90,
    description:
      "Coconut cultivation holds significant importance in India, playing a crucial role in agriculture, economy, and culture. Coconut cultivation is widespread in the coastal regions of India, particularly in states such as Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Maharashtra, Odisha, and West Bengal. Coastal areas provide the ideal climate for coconut palms to thrive. The adaptability of coconut palms to coastal environments and the multitude of applications contribute to the enduring significance of coconuts in India. The crops should be at a distance of 6.4m apart.",
  },
  Groundnut: {
    lowerTemperature: 27,
    higherTemperature: 30,
    lowerHumidity: 50,
    higherHumidity: 70,
    img: "../public/assets/Groundnut.jpg",
    phMedian: 6.75,
    N_value: 30,
    P_value: 50,
    K_value: 55,
    moisture: 70,
    description:
      "Groundnut, also known as peanut, is a significant oilseed crop in India, playing a crucial role in agriculture and the economy. Groundnut cultivation in India is marked by its economic importance, versatility in uses, and adaptability to diverse agro-climatic conditions. The crop remains a key component of the country's agricultural landscape, contributing to food security, income generation, and agricultural sustainability. The crops should be at a distance of 0.3m apart.",
  },
  Blackpepper: {
    lowerTemperature: 20,
    higherTemperature: 30,
    lowerHumidity: 75,
    higherHumidity: 80,
    img: "../public/assets/Blackpepper.webp",
    phMedian: 6,
    N_value: 75,
    P_value: 35,
    K_value: 60,
    moisture: 80,
    description:
      "Black pepper (Piper nigrum) is a widely cultivated spice in India, known for its pungent flavor and aromatic properties. Black pepper cultivation in India is characterized by its regional concentration in the southern states, cultural significance, and economic importance as a globally sought-after spice. The spice has a long history of use in Indian cuisine and continues to be a valuable commodity in international trade. The crops should be at a distance of 2.5m apart.",
  },
  Okra: {
    lowerTemperature: 25,
    higherTemperature: 35,
    lowerHumidity: 65,
    higherHumidity: 75,
    img: "../public/assets/Okra.jpg",
    phMedian: 6.75,
    N_value: 55,
    P_value: 25,
    K_value: 45,
    moisture: 70,
    description:
      'Okra, known as "bhindi" in Hindi, is a popular and widely cultivated vegetable in India. Okra thrives in warm and tropical climates, making it well-suited for cultivation across various regions in India. Okra is a versatile and widely consumed vegetable in India, contributing to the country\'s culinary traditions and agricultural practices. Its adaptability to diverse climates and straightforward cultivation make it a significant and accessible crop for farmers across different regions. The crops should be at a distance of 0.5m apart.',
  },
  Tomato: {
    lowerTemperature: 21,
    higherTemperature: 24,
    lowerHumidity: 60,
    higherHumidity: 85,
    img: "../public/assets/Tomato.jpg",
    phMedian: 7.25,
    N_value: 85,
    P_value: 40,
    K_value: 50,
    moisture: 80,
    description:
      'Tomato, known as "tamatar" in Hindi, is a widely cultivated vegetable in India and holds significant importance in the country\'s culinary landscape. Tomato cultivation is a vital component of agriculture in India, contributing to both domestic consumption and international trade. The versatility of tomatoes in culinary applications and the support from government initiatives underline the agricultural and economic significance of this popular vegetable. The crops should be at a distance of 0.6m apart.',
  },
  Cauliflower: {
    lowerTemperature: 23,
    higherTemperature: 23,
    lowerHumidity: 60,
    higherHumidity: 70,
    img: "../public/assets/Cauliflower.jpg",
    phMedian: 6.05,
    N_value: 75,
    P_value: 43,
    K_value: 55,
    moisture: 75,
    description:
      'Cauliflower, known as "phool gobhi" in Hindi, is a popular and widely cultivated vegetable in India. Cauliflower is a widely cultivated and consumed vegetable in India, prized for its culinary versatility and nutritional value. Its cultivation during the winter season makes it an important component of the agricultural landscape in various regions of the country. The crops should be at a distance of 0.6m apart.',
  },
  Cabbage: {
    lowerTemperature: 15,
    higherTemperature: 21,
    lowerHumidity: 60,
    higherHumidity: 90,
    img: "../public/assets/Cabbage.jpg",
    phMedian: 6.25,
    N_value: 120,
    P_value: 60,
    K_value: 90,
    moisture: 75,
    description:
      'Cabbage, known as "patta gobhi" in Hindi, is a widely cultivated vegetable in India and holds significant importance in the country\'s culinary practices. Cabbage is a widely cultivated and consumed vegetable in India, prized for its nutritional value. Its cultivation during the winter season makes it an important component of the agricultural landscape in various regions of the country. The crops should be at a distance of 0.6m apart.',
  },
  Banana: {
    lowerTemperature: 27,
    higherTemperature: 27,
    lowerHumidity: 75,
    higherHumidity: 85,
    img: "../public/assets/Banana tree.jpg",
    phMedian: 7,
    N_value: 150,
    P_value: 50,
    K_value: 250,
    moisture: 80,
    description:
      "Banana cultivation is widespread in India, and the country is one of the largest producers of bananas globally. The versatile uses of bananas, from fresh consumption to various processed products, contribute to the popularity and widespread cultivation of this tropical fruit in the country. The crops should be at a distance of 3m apart.",
  },
  Guava: {
    lowerTemperature: 23,
    higherTemperature: 28,
    lowerHumidity: 60,
    higherHumidity: 80,
    img: "../public/assets/Guava.jpg",
    phMedian: 7,
    N_value: 70,
    P_value: 35,
    K_value: 55,
    moisture: 80,
    description:
      "Guava, known as \"amrud\" in Hindi, is a popular and economically important fruit in India. Guava is well-suited to tropical and subtropical climates. It can tolerate a wide range of temperatures but prefers warm weather. Guava trees are resilient and can withstand drought conditions, making them suitable for different parts of the country. The fruit's widespread popularity and diverse applications contribute to its prominence in the country's horticultural landscape. The crops should be at a distance of 3.6m apart.",
  },
  Jackfruit: {
    lowerTemperature: 21,
    higherTemperature: 32,
    lowerHumidity: 70,
    higherHumidity: 90,
    img: "../public/assets/Jackfruit.jpg",
    phMedian: 6.25,
    N_value: 35,
    P_value: 20,
    K_value: 20,
    moisture: 75,
    description:
      'Jackfruit, known as "kathal" in Hindi, is a large and versatile tropical fruit that holds cultural, culinary, and economic significance in India. The fruit is not only consumed domestically but is also exported to various countries. The processed forms of jackfruit, such as canned jackfruit and jackfruit products, contribute to international trade. The crops should be at a distance of 7.6m apart.',
  },
  Mango: {
    lowerTemperature: 27,
    higherTemperature: 27,
    lowerHumidity: 45,
    higherHumidity: 55,
    img: "../public/assets/mango.jpg",
    phMedian: 6.5,
    N_value: 100,
    P_value: 35,
    K_value: 75,
    moisture: 80,
    description:
      'Mango, known as the "king of fruits," is one of the most beloved and widely cultivated fruits in India. Mango trees (Mangifera indica) require a tropical climate for optimal growth. They thrive in warm temperatures and are sensitive to frost. The fruiting season varies, with different varieties maturing at different times during the year. The crops should be at a distance of 8m apart.',
  },
};
const sortPH = (selectedList, ph) => {
  if (selectedList.length === 0) {
    return;
  }
  for (let i = 0; i < selectedList.length; i++) {
    for (let j = i + 1; j < selectedList.length; j++) {
      if (
        Math.abs(selectedList[i].data.phMedian - ph) >
        Math.abs(selectedList[j].data.phMedian - ph)
      ) {
        let temp = selectedList[i];
        selectedList[i] = selectedList[j];
        selectedList[j] = temp;
      }
    }
  }
  console.log("selectedList", selectedList);
  return selectedList;
};
function createCards(
  imgSrc,
  headerText,
  descriptionContent,
  moisture,
  n,
  p,
  k
) {
  const container = document.querySelector(".card-container");
  const card = document.createElement("a");
  card.setAttribute("href", "#");
  card.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "bg-white",
    "border",
    "border-gray-200",
    "rounded-lg",
    "shadow",
    "md:flex-row",
    "md:max-w-xl",
    "hover:bg-gray-100",
    "dark:border-gray-700",
    "dark:bg-gray-800",
    "dark:hover:bg-gray-700",
    "transition-all",
    "duration-300"
  );
  const img = document.createElement("img");
  img.setAttribute("src", imgSrc);
  img.setAttribute("alt", "");
  img.classList.add(
    "object-fill",
    "w-full",
    "rounded-t-lg",
    "h-96",
    "md:h-auto",
    "md:w-48",
    "md:rounded-none",
    "md:rounded-s-lg",
    "md:m-2"
  );
  const textContainer = document.createElement("div");
  textContainer.classList.add(
    "flex",
    "flex-col",
    "justify-between",
    "p-4",
    "leading-normal"
  );
  const header = document.createElement("h5");
  header.classList.add(
    "mb-2",
    "text-2xl",
    "font-bold",
    "tracking-tight",
    "text-gray-900",
    "dark:text-white"
  );
  header.textContent = headerText;
  const description = document.createElement("p");
  const moistureText = document.createElement("p");
  const nText = document.createElement("p");
  const pText = document.createElement("p");
  const kText = document.createElement("p");

  description.classList.add(
    "mb-3",
    "font-normal",
    "text-gray-700",
    "dark:text-gray-400"
  );
  let descriptionContentNew = descriptionContent;

  description.textContent = descriptionContentNew;
  textContainer.appendChild(header);
  textContainer.appendChild(description);
  if (moisture > 0) {
    descriptionContentNew = `\n Moisture level is less by ${moisture}%. So  water should be added.`;
    moistureText.textContent = descriptionContentNew;
    moistureText.classList.add("text-red-500", "mb-3", "font-normal");
    textContainer.appendChild(moistureText);
  }
  if (n > 0) {
    descriptionContentNew =
      descriptionContentNew = `\n Nitrogen in soil should be added by ${n} kg/ha.`;
    nText.textContent = descriptionContentNew;
    nText.classList.add("text-red-500", "mb-3", "font-normal");
    textContainer.appendChild(nText);
  }

  if (k > 0) {
    descriptionContentNew = `\n Potassium in soil should be added by ${k} kg/ha.`;
    kText.textContent = descriptionContentNew;
    kText.classList.add("text-red-500", "mb-3", "font-normal");
    textContainer.appendChild(kText);
  }
  if (p > 0) {
    descriptionContentNew = `\n Phosphorus in soil should be added by ${p} kg/ha.`;
    pText.textContent = descriptionContentNew;
    pText.classList.add("text-red-500", "mb-3", "font-normal");
    textContainer.appendChild(pText);
  }
  card.appendChild(img);
  card.appendChild(textContainer);
  container.appendChild(card);
}
const deleteCards = () => {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";
};
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  let temperature = document.getElementById("temperature").value;
  let ph = document.getElementById("ph").value;
  let humidity = document.getElementById("humidity").value;
  let n_value = document.getElementById("nitrogen").value;
  let p_value = document.getElementById("phosphorus").value;
  let k_value = document.getElementById("potassium").value;
  let moisture = document.getElementById("moisture").value;

  temperature = parseInt(temperature);
  ph = parseFloat(ph);
  humidity = parseInt(humidity);
  n_value = parseInt(n_value);
  p_value = parseInt(p_value);
  k_value = parseInt(k_value);
  moisture = parseInt(moisture);

  let selectedCrops = [];
  for (const crop in cropsData) {
    if (
      temperature >= cropsData[crop].lowerTemperature &&
      temperature <= cropsData[crop].higherTemperature
    ) {
      selectedCrops.push({ name: crop, data: cropsData[crop] }); // push the entire crop object
    }
  }
  let tempSelectedCrops = [];
  for (const crop in selectedCrops) {
    if (
      humidity >= selectedCrops[crop].data.lowerHumidity &&
      humidity <= selectedCrops[crop].data.higherHumidity
    ) {
      tempSelectedCrops.push({
        name: selectedCrops[crop].name,
        data: selectedCrops[crop].data,
      });
    }
  }
  selectedCrops = tempSelectedCrops;
  console.log("selectedcropsnew", selectedCrops);
  if (selectedCrops.length === 0) {
    alert("No crops found for the given temperature");
    deleteCards();
    return;
  }
  selectedCrops.forEach((crop) => {
    console.log(crop.name, "ph difference", Math.abs(crop.data.phMedian - ph)); // access the name property of the crop object
  });
  selectedCrops = sortPH(selectedCrops, ph);
  console.log("crops after sorting");
  selectedCrops.forEach((crop) => {
    console.log(crop.name, "ph difference", Math.abs(crop.data.phMedian - ph)); // access the name property of the crop object
  });
  let noOfCardstoshow = 3 < selectedCrops.length ? 3 : selectedCrops.length;
  deleteCards();
  for (let i = 0; i < noOfCardstoshow; i++) {
    createCards(
      selectedCrops[i].data.img,
      selectedCrops[i].name,
      selectedCrops[i].data.description,
      selectedCrops[i].data.moisture - moisture,
      selectedCrops[i].data.N_value - n_value,
      selectedCrops[i].data.P_value - p_value,
      selectedCrops[i].data.K_value - k_value
    );
  }
});
