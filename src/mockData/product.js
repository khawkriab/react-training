const products = [
  {
    productName: "Alpha Widget",
    productPrice: 19.99,
    productQuantity: 150,
    productType: "Electronics",
    addDate: "2024-08-01",
  },
  {
    productName: "Beta Gadget",
    productPrice: 29.99,
    productQuantity: 0,
    productType: "Appliances",
    addDate: "2024-08-02",
  },
  {
    productName: "Gamma Tool",
    productPrice: 12.99,
    productQuantity: 500,
    productType: "Hardware",
    addDate: "2024-08-03",
  },
  {
    productName: "Delta Device",
    productPrice: 49.99,
    productQuantity: 80,
    productType: "Electronics",
    addDate: "2024-08-04",
  },
  {
    productName: "Epsilon Widget",
    productPrice: 5.99,
    productQuantity: 1000,
    productType: "Toys",
    addDate: "2024-08-05",
  },
  {
    productName: "Zeta Gizmo",
    productPrice: 39.99,
    productQuantity: 0,
    productType: "Appliances",
    addDate: "2024-08-06",
  },
  {
    productName: "Eta Tool",
    productPrice: 7.99,
    productQuantity: 320,
    productType: "Hardware",
    addDate: "2024-08-07",
  },
  {
    productName: "Theta Device",
    productPrice: 14.99,
    productQuantity: 50,
    productType: "Electronics",
    addDate: "2024-08-08",
  },
  {
    productName: "Iota Gadget",
    productPrice: 24.99,
    productQuantity: 0,
    productType: "Appliances",
    addDate: "2024-08-09",
  },
  {
    productName: "Kappa Widget",
    productPrice: 9.99,
    productQuantity: 150,
    productType: "Toys",
    addDate: "2024-08-10",
  },
  {
    productName: "Lambda Gizmo",
    productPrice: 17.99,
    productQuantity: 300,
    productType: "Hardware",
    addDate: "2024-08-11",
  },
  {
    productName: "Mu Tool",
    productPrice: 27.99,
    productQuantity: 0,
    productType: "Electronics",
    addDate: "2024-08-12",
  },
  {
    productName: "Nu Device",
    productPrice: 37.99,
    productQuantity: 90,
    productType: "Appliances",
    addDate: "2024-08-13",
  },
  {
    productName: "Xi Gadget",
    productPrice: 13.99,
    productQuantity: 400,
    productType: "Hardware",
    addDate: "2024-08-14",
  },
  {
    productName: "Omicron Widget",
    productPrice: 21.99,
    productQuantity: 700,
    productType: "Toys",
    addDate: "2024-08-15",
  },
  {
    productName: "Pi Gizmo",
    productPrice: 8.99,
    productQuantity: 0,
    productType: "Appliances",
    addDate: "2024-08-16",
  },
  {
    productName: "Rho Tool",
    productPrice: 32.99,
    productQuantity: 55,
    productType: "Electronics",
    addDate: "2024-08-17",
  },
  {
    productName: "Sigma Device",
    productPrice: 22.99,
    productQuantity: 65,
    productType: "Hardware",
    addDate: "2024-08-18",
  },
  {
    productName: "Tau Gadget",
    productPrice: 18.99,
    productQuantity: 80,
    productType: "Toys",
    addDate: "2024-08-19",
  },
  {
    productName: "Upsilon Widget",
    productPrice: 11.99,
    productQuantity: 0,
    productType: "Appliances",
    addDate: "2024-08-20",
  },
  {
    productName: "Phi Gizmo",
    productPrice: 26.99,
    productQuantity: 60,
    productType: "Electronics",
    addDate: "2024-08-21",
  },
  {
    productName: "Chi Tool",
    productPrice: 6.99,
    productQuantity: 0,
    productType: "Hardware",
    addDate: "2024-08-22",
  },
  {
    productName: "Psi Device",
    productPrice: 15.99,
    productQuantity: 450,
    productType: "Toys",
    addDate: "2024-08-23",
  },
  {
    productName: "Omega Gadget",
    productPrice: 19.49,
    productQuantity: 100,
    productType: "Appliances",
    addDate: "2024-08-24",
  },
  {
    productName: "Alpha Device",
    productPrice: 34.99,
    productQuantity: 30,
    productType: "Electronics",
    addDate: "2024-08-25",
  },
  {
    productName: "Beta Widget",
    productPrice: 20.99,
    productQuantity: 90,
    productType: "Hardware",
    addDate: "2024-08-26",
  },
  {
    productName: "Gamma Gizmo",
    productPrice: 16.99,
    productQuantity: 50,
    productType: "Toys",
    addDate: "2024-08-27",
  },
  {
    productName: "Delta Tool",
    productPrice: 23.99,
    productQuantity: 120,
    productType: "Appliances",
    addDate: "2024-08-28",
  },
  {
    productName: "Epsilon Device",
    productPrice: 10.99,
    productQuantity: 200,
    productType: "Electronics",
    addDate: "2024-08-29",
  },
  {
    productName: "Zeta Gadget",
    productPrice: 40.99,
    productQuantity: 70,
    productType: "Hardware",
    addDate: "2024-08-30",
  },
  {
    productName: "Eta Widget",
    productPrice: 25.99,
    productQuantity: 0,
    productType: "Toys",
    addDate: "2024-08-31",
  },
  {
    productName: "Theta Gizmo",
    productPrice: 14.49,
    productQuantity: 150,
    productType: "Appliances",
    addDate: "2024-09-01",
  },
  {
    productName: "Iota Tool",
    productPrice: 29.99,
    productQuantity: 0,
    productType: "Electronics",
    addDate: "2024-09-02",
  },
  {
    productName: "Kappa Device",
    productPrice: 12.49,
    productQuantity: 500,
    productType: "Hardware",
    addDate: "2024-09-03",
  },
  {
    productName: "Lambda Gadget",
    productPrice: 18.49,
    productQuantity: 300,
    productType: "Toys",
    addDate: "2024-09-04",
  },
  {
    productName: "Mu Widget",
    productPrice: 35.99,
    productQuantity: 90,
    productType: "Appliances",
    addDate: "2024-09-05",
  },
  {
    productName: "Nu Gizmo",
    productPrice: 17.99,
    productQuantity: 85,
    productType: "Electronics",
    addDate: "2024-09-06",
  },
  {
    productName: "Xi Tool",
    productPrice: 22.49,
    productQuantity: 70,
    productType: "Hardware",
    addDate: "2024-09-07",
  },
  {
    productName: "Omicron Device",
    productPrice: 30.99,
    productQuantity: 80,
    productType: "Toys",
    addDate: "2024-09-08",
  },
  {
    productName: "Pi Gadget",
    productPrice: 24.99,
    productQuantity: 40,
    productType: "Appliances",
    addDate: "2024-09-09",
  },
  {
    productName: "Rho Widget",
    productPrice: 9.49,
    productQuantity: 250,
    productType: "Electronics",
    addDate: "2024-09-10",
  },
  {
    productName: "Sigma Gizmo",
    productPrice: 15.49,
    productQuantity: 100,
    productType: "Hardware",
    addDate: "2024-09-11",
  },
  {
    productName: "Tau Tool",
    productPrice: 28.49,
    productQuantity: 0,
    productType: "Toys",
    addDate: "2024-09-12",
  },
  {
    productName: "Upsilon Device",
    productPrice: 13.99,
    productQuantity: 300,
    productType: "Appliances",
    addDate: "2024-09-13",
  },
  {
    productName: "Phi Gadget",
    productPrice: 39.99,
    productQuantity: 25,
    productType: "Electronics",
    addDate: "2024-09-14",
  },
  {
    productName: "Chi Widget",
    productPrice: 21.49,
    productQuantity: 150,
    productType: "Hardware",
    addDate: "2024-09-15",
  },
  {
    productName: "Psi Gizmo",
    productPrice: 8.49,
    productQuantity: 0,
    productType: "Toys",
    addDate: "2024-09-16",
  },
  {
    productName: "Omega Tool",
    productPrice: 11.49,
    productQuantity: 100,
    productType: "Appliances",
    addDate: "2024-09-17",
  },
];
