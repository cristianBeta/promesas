async function prepararPastel(){
    console.log("Preparando el pastel");
    const leche = await pedirLeche();
    console.log("Leche lista");
    const huevos = await pedirHuevos();
    console.log("Huevos listos");
    const azucar = await pedirAzucar();
    console.log("Azúcar lista");
    const harina = await pedirHarina();
    console.log("Harina lista");
    const mantequilla = await pedirMantequilla();
    console.log("Mantequilla lista");
    const levadura = await pedirLevadura();
    console.log("Levadura lista");
    const vainilla = await pedirVainilla();
    console.log("Vainilla lista");
    const sal = await pedirSal();
    console.log("Sal lista");
    
  const masa = mezclarIngredientes(leche, huevos, azucar, harina, mantequilla, levadura);
      hornearPastel(masa);
  }
  
  async function pedirLeche() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Leche");
      }, 2000);
    });
  }
  
  async function pedirHuevos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Huevos");
      }, 2000);
    });
  }
  
  async function pedirAzucar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Azucar");
      }, 2500);
    });
  }
  
  async function pedirHarina() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Harina");
      }, 1500);
    });
  }
  
  async function pedirMantequilla() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Mantequilla");
      }, 3000);
    });
  }
  
  async function pedirLevadura() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Levadura");
      }, 2500);
    });
  }
  
  async function pedirVainilla() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Vainilla");
      }, 1000);
    });
  }
  
  async function pedirSal() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Sal");
      }, 500);
    });
  }
  
  function mezclarIngredientes(leche, huevos, azucar, harina, mantequilla, levadura) {
      console.log("Mezclando los ingredientes");
      return "Masa";
  }
  
  function hornearPastel(masa) {
    console.log("Precalentando el horno a 180°C");
    console.log("Engrasando y enharinando el molde");
    console.log("Horneando el pastel por 30 minutos");
    console.log("El pastel está listo!");
  }
  
  prepararPastel().then(() => {
      console.log("El Pastel esta preparado y listo para disfrutar");
  }).catch((error) => {
      console.error("Ocurrió un error al preparar el pastel:", error);
  });