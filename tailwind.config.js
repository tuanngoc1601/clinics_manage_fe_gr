/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        26: "26px",
        50: "50px",
        100: "100px",
        150: "150px",
        190: "190px",
        200: "200px",
        220: "220px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        26: "26px",
        39: "39px",
        50: "50px",
        78: "78px",
        80: "80px",
        100: "100px",
        150: "150px",
        158: "158px",
        200: "200px",
        217: "217px",
        220: "220px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        390: "390px",
        403: "403px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        '10px': "10px",
        '13px': "13px",
        '15px': "15px",
      },
      colors: {
        textBar: "#969495",
        textNav: "#111111",
        textPlaceholder: "#999999",
        textAddress: "#666666",
        textBorder: "#dddddd",
        bgTimeSchedule: "#eeeeee",
        bgFooter: "#efefef",
        bgFooterMedia: "#64b9e5",
        bgDoctorBooking: "#f6f6f6",
        bgNote: "#D4EFFC",
        bgButtonBooking: "#ffc419",
        boderItem: "#f1f1f1",
        borderPrice: "#f89008",
        textPrimary: "#45c3d2",
        textNameDoctor: "#113135",
        textDate: "#337ab7",
        textDesc: "#626262",
        detailBtn: "#daf3f6",
        navActive: "#B511B8",
        headingColor: "#1a1a1a",
        textColor: "#333333",
        textBooking: "#555555",
        primary: "#EDFFFA",
      },
      backgroundImage: {
        'bgItem': "url('/src/assets/images/background/bg-item.png')",
        'bgSection': "url('/src/assets/images/background/bg-section.png')",
        'bgMentalHealth': "url('/src/assets/images/background/bg-health.png')",
        'bgMedia': "url('/src/assets/images/background/bg-media.png')",
      }
    },
  },
  plugins: [],
}