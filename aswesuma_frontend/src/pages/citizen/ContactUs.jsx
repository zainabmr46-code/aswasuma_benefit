import React from "react";

function ContactUs() {
  const divisions = [
    {
      id: 1,
      division_no: "1079",
      division_name: "Westhall",
      officer_name: "Mr. R.M.I.M. Karunaratne",
      official_address: "Barcapal Estate, Upper, Kataboola",
      contact_number: "(77) 790-3341",
    },
    {
      id: 2,
      division_no: "1080",
      division_name: "Hydri",
      officer_name: "Mrs. S. Kokila",
      official_address: "Hydri, Rosella",
      contact_number: "(77) 859-0196",
    },
    {
      id: 3,
      division_no: "1081",
      division_name: "KadiEllena",
      officer_name: "Mr. J.A.J.T. Jayakody",
      official_address: "Kadiellena, Kataboola",
      contact_number: "(76) 076-6663",
    },
    {
      id: 4,
      division_no: "1082",
      division_name: "Greenwood",
      officer_name: "Mr. J.A.J.T. Jayakody",
      official_address: "Greenwood, Nawalapitiya",
      contact_number: "(76) 076-6663",
    },
    {
      id: 5,
      division_no: "1083",
      division_name: "Bawwagama",
      officer_name: "Mr. P.D.S. Raveendra Kumara",
      official_address: "Office Nila Sevena, Bawwagama",
      contact_number: "(77) 512-5989",
    },
    {
      id: 6,
      division_no: "1084",
      division_name: "Imbulpitiya",
      officer_name: "Mr. H.B. Gamini Sepala",
      official_address: "Office Nila Sevena, Imbulpitiya",
      contact_number: "(77) 316-9254",
    },
    {
      id: 7,
      division_no: "1085",
      division_name: "Nawalapitiya East",
      officer_name: "Mr. B.B.S.J. Perera",
      official_address: "Office Nila Sevena, Nawalapitiya",
      contact_number: "(71) 954-3906",
    },
    {
      id: 8,
      division_no: "1086",
      division_name: "Nawalapitiya South",
      officer_name: "Mr. H.M.J.H. Bandara",
      official_address: "Grama Niladhari Office, Nawalapitiya South",
      contact_number: "(77) 104-0225",
    },
    {
      id: 9,
      division_no: "1087",
      division_name: "Nawalapitiya North",
      officer_name: "Mrs. B.B.I.D. Perera",
      official_address: "Nilasevena Office, Nawalapitiya North",
      contact_number: "(71) 845-7116",
    },
    {
      id: 10,
      division_no: "1088",
      division_name: "Nawalapitiya West",
      officer_name: "Mr. A.M.T.S.S. Attanayake",
      official_address: "Soysakele, Nawalapitiya West",
      contact_number: "(77) 798-4764",
    },
    {
      id: 11,
      division_no: "1089",
      division_name: "Uda Rambukpitiya",
      officer_name: "Mrs. T.M.S.C. Thennakoon",
      official_address: "Old Pradeshiya Sabha Building, Uda Rambukpitiya",
      contact_number: "(71) 183-9386",
    },
    {
      id: 12,
      division_no: "1090",
      division_name: "Pahala Rambukpitiya",
      officer_name: "Mr. G.G. Sajeewa Gurudeniya",
      official_address: "Silvas Land, Rambukpitiya, Nawalapitiya",
      contact_number: "(77) 500-5936",
    },
    {
      id: 13,
      division_no: "1091",
      division_name: "Balantota North",
      officer_name: "Mr. H.G.U.B. Harangala",
      official_address: "Kadira Land, Rambukpitiya, Nawalapitiya",
      contact_number: "(71) 800-9315",
    },
    {
      id: 14,
      division_no: "1092",
      division_name: "Balantota South",
      officer_name: "Mrs. H.M.N.M.D. Herath",
      official_address: "Nawa Shantha Janapadaya, Rambukpitiya",
      contact_number: "(71) 247-9890",
    },
    {
      id: 15,
      division_no: "1093",
      division_name: "Aluthgama",
      officer_name: "Mrs. T.H.M.C. Priyadarshani",
      official_address: "Praja Shalawa, Aluthgama, Nawalapitiya",
      contact_number: "(78) 776-3003",
    },
    {
      id: 16,
      division_no: "1094",
      division_name: "Dekinda",
      officer_name: "Miss N.G.M. Anuradhi Godage",
      official_address: "Dekinda, Nawalapitiya",
      contact_number: "(71) 378-8557",
    },
    {
      id: 17,
      division_no: "1095",
      division_name: "Wewegama",
      officer_name: "Mrs. R.M.S.N. Ratnayake",
      official_address: "Praja Shalawa, Wewegama, Dekinda",
      contact_number: "(71) 720-9073",
    },
    {
      id: 18,
      division_no: "1096",
      division_name: "Weligampola",
      officer_name: "Miss M.M.K.K. Hemachandra",
      official_address: "Weligampola, Nawalapitiya",
      contact_number: "(77) 255-3912",
    },
    {
      id: 19,
      division_no: "1097",
      division_name: "Kandopitiya",
      officer_name: "Mrs. P.D. Hettiarachchi",
      official_address: "Dekinda Road, Hynford, Nawalapitiya",
      contact_number: "(71) 378-8401",
    },
    {
      id: 20,
      division_no: "1098",
      division_name: "Inguruoya South",
      officer_name: "Mrs. E.G.N.P. Ratnayake",
      official_address: "Jana Sabha Office, Inguruoya, Nawalapitiya",
      contact_number: "(77) 246-0380",
    },
    {
      id: 21,
      division_no: "1099",
      division_name: "Inguruoya North",
      officer_name: "Mrs. A.G.S.S.K. Dharmasena",
      official_address: "Nila Sevena, Inguruoya North",
      contact_number: "(71) 401-9396",
    },
    {
      id: 22,
      division_no: "1100",
      division_name: "Mapakanda North",
      officer_name: "Mrs. H.T.D.C. Nandani",
      official_address: "Mapakanda North, Nawalapitiya",
      contact_number: "(71) 446-4789",
    },
    {
      id: 23,
      division_no: "1101",
      division_name: "Mapakanda South",
      officer_name: "Mrs. D.M.C.N. Jayathilaka",
      official_address: "Mapakanda South, Nawalapitiya",
      contact_number: "(77) 446-8000",
    },
    {
      id: 24,
      division_no: "1102",
      division_name: "Weligodawatta",
      officer_name: "Miss M. Anuttara Gallage",
      official_address: "Sewa Piyasa, Weligodawatta, Nawalapitiya",
      contact_number: "(70) 535-9825",
    },
    {
      id: 25,
      division_no: "1103",
      division_name: "Dandubadiruppa",
      officer_name: "Mr. R.M.S. Nimantha Ratnayake",
      official_address: "Gonawalapathana, Nawalapitiya",
      contact_number: "(77) 927-9393",
    },
    {
      id: 26,
      division_no: "1104",
      division_name: "Pallegama",
      officer_name: "Mr. M.K. Gunasekara",
      official_address: "Pallegama, Nawalapitiya",
      contact_number: "(76) 093-8469",
    },
    {
      id: 27,
      division_no: "1105",
      division_name: "Warakawa",
      officer_name: "Mr. B.B.S.J. Perera",
      official_address: "Warakawa, Nawalapitiya",
      contact_number: "(71) 954-3906",
    },
    {
      id: 28,
      division_no: "1106",
      division_name: "Panithuduwa",
      officer_name: "Mr. G.G. Sajeewa Gurudeniya",
      official_address: "Panithuduwa, Nawalapitiya",
      contact_number: "(77) 500-5936",
    },
    {
      id: 29,
      division_no: "1107",
      division_name: "Karahadungala",
      officer_name: "Mrs. P.N. Fernando",
      official_address: "Meepitiya, Nawalapitiya",
      contact_number: "(71) 477-8414",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>GN Division Contact Directory</h2>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>#</th>
            <th>Division No</th>
            <th>Division</th>
            <th>Officer Name</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {divisions.map((division, index) => (
            <tr key={division.id}>
              <td>{index + 1}</td>
              <td>{division.division_no}</td>
              <td>{division.division_name}</td>
              <td>{division.officer_name}</td>
              <td>{division.official_address}</td>
              <td>{division.contact_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactUs;