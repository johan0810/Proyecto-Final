//CONFIGURACION VISTA 360
export const script = {
  mounted() {
    pannellum.viewer("panoramica", {
      autoLoad: true,
      autoRotate: -4,
      showControls: false,
      compass: false,
      //"orientationOnByDefault": true,

      default: {
        firstScene: "entrada1",

        sceneFadeDuration: 1000,
      },

      scenes: {
        entrada1: {
          //"title": "Entrada",
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Posición inicial izquierda o derecha
          type: "equirectangular",
          panorama: "../images/IMG_20221112_104137_00_003.jpg",
          hotSpots: [
            {
              //FLECHA ARRIBA
              pitch: -15,
              yaw: 150, //Posición flecha izquierda o derecha
              type: "scene",
              text: "Terraza oeste",
              sceneId: "entrada2", //PENDIENTE OJO   Arbol_Cendero
              cssClass: "flecha-l", //Cuatro tamaños de flechas: flecha-xl, flecha-l, flecha-m, flecha-s, flecha-xs
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 210, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        entrada2: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_104246_00_004.jpg",
          hotSpots: [
            {
              // Ir Adelante
              pitch: -8,
              yaw: 220,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada02",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 155, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Atras
              pitch: -4,
              yaw: 30,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada1",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 140, //Grados izquierda o derecha de la proxima imagen
            },
            {
              //PUNTO INFORMACIÓN
              pitch: 0,
              yaw: 190,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "Portería, se encuentra un celador y una enfermera, quien es la encargada de hacer cumplir el protocolo de bioseguridad, una vez hecho esto las personas podrán ingresar al centro.",
            },
          ],
        },
        entrada02: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_135935_00_merged.jpg",
          hotSpots: [
            {
              pitch: -8,
              yaw: 220,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada3",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 155, //Grados izquierda o derecha de la proxima imagen
            },
            {
              pitch: -4,
              yaw: -3,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada02",
              sceneId: "entrada2",
              sceneId: "entrada02",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 140, //Grados izquierda o derecha de la proxima imagen
            },
            {
              //PUNTO INFORMACIÓN
              pitch: 0,
              yaw: 190,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "Robinson Arley Acosta Briñez.",
            },
          ],
        },
        entrada3: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_110600_00_merged.jpg",
          hotSpots: [
            {
              pitch: -12,
              yaw: 30,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada02",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir al parqueadero
              pitch: -18,
              yaw: -80,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada4",
              cssClass: "flecha-xl",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Adelante
              pitch: -3,
              yaw: 182,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada5", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Atras
              pitch: 0,
              yaw: -80,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "Parqueadero motos",
            },
          ],
        },
        entrada4: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_110821_00_merged.jpg",
          hotSpots: [
            {
              pitch: 2,
              yaw: 0,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada3",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 160, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada5: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_110926_00_merged.jpg",
          hotSpots: [
            {
              // Ir  Adelante
              pitch: -4,
              // Ir Adelante
              pitch: -12,

              // Ir  Adelante
              pitch: -4,
              yaw: -2,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada6",
              cssClass: "flecha-s",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 140, //Grados izquierda o derecha de la proxima imagen
            },

            {
              pitch: -10,
              yaw: 180,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada3", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada6: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_111039_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -20,
              yaw: -29,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada5",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: 203,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada7", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada7: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_111136_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -20,
              yaw: -2,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada6",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -180,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada8", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada8: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_111428_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: -35,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada7",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -188,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada9", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada9: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_135500_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -8,
              yaw: -35,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada10",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -15,
              yaw: 206,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada8", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 140, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Atras
              pitch: 0,
              yaw: -80,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "Parqueadero Carros",
            },
          ],
        },
        entrada10: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_111621_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -6,
              yaw: -35,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada9",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -185,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada11", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS parqueadero carro
              pitch: -6,
              yaw: 65,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada010",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada010: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_112156_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -10,
              yaw: -182,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada10", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada11: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_112340_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: -20,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada10",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -175,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada12", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              pitch: -6,
              yaw: 78,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "bienestar", //PENDIENTE
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 155, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada12: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_112504_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: 80,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada11",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -94,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada13", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada13: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_112546_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: 96,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada12",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -74,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada14", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada14: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_112712_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: 78,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada13",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -92,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada15", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // LADO DE LA CANCHA DE VOLI
              pitch: -10,
              yaw: -187,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym1",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada15: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_112846_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -14,
              yaw: -114,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada14", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -13,
              yaw: 60,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada16",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ESCALERAS
              pitch: -5,
              yaw: -200,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada015", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // ESCALERAS 1  //pendiente falta
        entrada015: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_121148_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -33,
              yaw: -165,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada15",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -10,
              yaw: -195,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada", //crear.........0000000000000000000000000000000000000000000000000021874545646464
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada16: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_114750_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -14,
              yaw: -122,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada15", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -8,
              yaw: 65,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada17",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir AL AMBIENTE
              pitch: -20,
              yaw: -20,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada016",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada016: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_113131_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: 85,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada16", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada17: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_113333_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: 85,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada16", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -13,
              yaw: -86,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir AL AMBIENTE MECANICA
              pitch: -20,
              yaw: 176,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada017",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //    AMBIENTE MECANICA
        entrada017: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_114633_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -140,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada17", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //PENDIENTE FLECHAS
        entrada18: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_113452_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: 88,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada17", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -13,
              yaw: -88,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada19",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir A LAS ESCALERAS
              pitch: -5,
              yaw: 179,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "escalera2",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir AL GYM
              pitch: -9,
              yaw: 162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Gym",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir A LA RAMPA
              pitch: -1,
              yaw: -2,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "rampa",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // ESCALERAS 2
        escalera2: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_115435_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -25,
              yaw: -28,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: 2,
              yaw: -1,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera", //crear..
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // RAMPA
        rampa: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_115626_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: 0,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -20,
              yaw: -26,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera", //crear.......
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada19: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_113616_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -10,
              yaw: 85,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada20", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -30,
              yaw: -96,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir AL AMBIENTE LADO RAMPA
              pitch: -20,
              yaw: -6,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada019",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //    AMBIENTE LADO RAMPA
        entrada019: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_115100_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -179,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada19", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada20: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_115209_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -6,
              yaw: 79,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada21", //crear.........
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -105,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada19",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir AL AMBIENTE
              pitch: -20,
              yaw: -6,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada020",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //    AMBIENTE CONSTRUCION
        entrada020: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_115240_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -79,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada20", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //CAFETERIA
        entrada21: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_142303_00_merged.jpg",
          hotSpots: [
            {
              // ESQUINA DE TORRE DE ALTURA
              pitch: -8,
              yaw: -146.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "torrealtura",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Atras
              pitch: -15,
              yaw: 138,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada20",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // TORRE DE ALTURAS
        torrealtura: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_134609_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -10,
              yaw: -116,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -205,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada21",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // CERA GYM
        ceragym: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_134801_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -6,
              yaw: 92,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "torrealtura", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -10,
              yaw: -88,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Gym",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // ANDEN GYM SALA DE INSTRUCTORES
              pitch: -5,
              yaw: 0.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "sala_instrutores",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //    SALA DE INSTRUTORES
        sala_instrutores: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_134838_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -8,
              yaw: -145,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // GYM
        Gym: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_134435_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: 93.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -8,
              yaw: -86.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym1",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // ENTRO DEL GYM
              pitch: -20,
              yaw: -6,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entradaGym",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // REGRESAR A LA ENTRADA-18 (RAMPA)
              pitch: -10,
              yaw: -190,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //   DENTRO DEL GYMMM
        entradaGym: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_142551_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Gym", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // CERA GYM
        ceragym1: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_135056_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -6,
              yaw: 63.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "bienestar", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -7,
              yaw: -115,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Gym",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // LADO DE LA CANCHA DE VOLI
              pitch: -10,
              yaw: -190,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "cancha_voli",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // REGRESAR A LA ENTRADA-12
              pitch: -20,
              yaw: -6,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada14",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        cancha_voli: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_135001_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -8,
              yaw: 92,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym1", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -7,
              yaw: -5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "cancha",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        cancha: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_142659_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -7,
              yaw: -115,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "cancha_voli",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        // BIENESTAR DEL APRENDIZ

        bienestar: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_111701_00_merged.jpg",
          hotSpots: [
            {
              // IR A LA ENTRADA-10
              pitch: -5,
              yaw: -135,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada11", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -5,
              yaw: -188.7,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym1",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir A LA OFICINA BIENESTAR
              pitch: -12,
              yaw: 112,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Oficina_bienestar",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir AL ARBOL
              pitch: -9,
              yaw: -10,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Arbol_Cendero", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //   PUERTA BIENESTAR
        Oficina_bienestar: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_135251_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "bienestar", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // ARBOL & CENDERO

        Arbol_Cendero: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_135551_00_merged.jpg",
          hotSpots: [
            {
              // Ir  ATRAS BIENESTAR
              pitch: -6,
              yaw: 75.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "bienestar", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -8,
              yaw: -110,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Arbol",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // CENDERO PARQUEADERO MOTOS SOLO DOCENTES
              pitch: -7,
              yaw: -10.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Cendero",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //   IR AL ARBOL
        Arbol: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_135350_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -6,
              yaw: -210,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Arbol_Cendero", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //   IR AL CENDERO

        Cendero: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_135646_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -6,
              yaw: -228,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Arbol_Cendero", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        /////////////////////////////// PRIMERA PLANTA (PISO)) TERMINADA (O) //////////7////////////////

        /////////////////////////////// SEGUNDA PLANTA (PISO) INICIO DESDE ESCALERAS Y RAMPA //////////7////////////////

        // ESCALERA & RAMPA SEGUNDO PISO
        Rampa_Escalera: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/IMG_20221112_115709_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -11,
              yaw: -72,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "rampa",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -26.5,
              yaw: 114,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "escalera2", //crear.........0000000000000000000000000000000000000000000000000021874545646464
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -15,
              yaw: -162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ass",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        ass: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "/images/ron.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -11,
              yaw: -72,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Atras
              pitch: 0,
              yaw: 0,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "MEDIA O MIEDO JAJAJJAJAJA PONGO 5",
            },
          ],
        },
      },
    });
  },
};
