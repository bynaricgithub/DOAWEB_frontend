
import React, { useState } from "react";
import { Accordion, Card, Button, Table } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const Committees = () => {
  const [activeKey, setActiveKey] = useState(null); // Manage active accordion item

  const toggleAccordion = (key) => {
    if (activeKey === key) {
      setActiveKey(null); // Collapse if clicked again
    } else {
      setActiveKey(key); // Expand this item
    }
  };

  const committees = [
    { id: 1, name: "Academic Committee" },
    { id: 2, name: "Finance Committee" },
    { id: 3, name: "Course Committee" },
    { id: 4, name: "Equivalence Committee" },
    { id: 5, name: "Examination Committee" },
    { id: 6, name: "Fee Fixation Committee" },
  ];

  const academicCommitteeData = [
    {
      sr: 1,
      name: "श्री.विनोद दांडगे",
      position: "संचालक, महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "डॉ.विश्वनाथ साबळे",
      position: "अधिष्ठाता, सर ज.जी. कला महाविद्यालय, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री. संदिप डोंगरे",
      position: "सचिव, महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "डॉ. सुभाष पवार",
      position: "डिजिटल क्रिएटर, पुणे",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "डॉ. दिपक कन्नल",
      position: "मा. अधिष्ठाता, महाराजा सयाजीराव विद्यापीठ, बडोदा",
      role: "सदस्य",
    },
    {
      sr: 6,
      name: "डॉ. नितीन कुलकर्णी",
      position: "संचालक, नॅशनल इंस्टिटुयट ऑफ फॅशन टेक्नॉलॉजी, खारघर, नवीमुंबई",
      role: "सदस्य",
    },
    {
      sr: 7,
      name: "डॉ. नितीन हडप",
      position:
        "विभाग प्रमुख, फॅशन डिझाईनींग डिपार्टमेंट एम.एन.व्ही.टी.आय., पुणे",
      role: "सदस्य",
    },
    {
      sr: 8,
      name: "श्री. यशवंत देशमुख",
      position: "जेष्ठ कलाकार, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 9,
      name: "श्रीमती आरती श्रावस्ती",
      position: "उप सचिव (कला), महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई",
      role: "सदस्य सचिव",
    },
  ];

  const financeCommitteeData = [
    {
      sr: 1,
      name: "श्री. विनोद दांडगे",
      position: "संचालक, महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "डॉ.विश्वनाथ साबळे",
      position: "अधिष्ठाता, सर ज.जी. कला महाविद्यालय, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री. संदीप डोंगरे",
      position: "सचिव, महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "श्रीमती रश्मी गोखले",
      position: "लेखाधिकारी, कला संचालनालय, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "श्रीमती रश्मी गोखले",
      position: "लेखाधिकारी, महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई",
      role: "सदस्य सचिव",
    },
  ];
  const CourseCommitteeData = [
    {
      sr: 1,
      name: "श्री. अजय दळवी",
      position: "प्राचार्य, दळवीज आर्ट इंस्टिटुयट, कोल्हापुर",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "श्री. संजय साबळे",
      position: "सहा. अधिव्याख्याता, चित्रकला महाविद्यालय, नाशिक",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री. सतिश काळे",
      position: "सहा. अधिव्याख्याता, अभिनव कला महाविद्यालय, टिळक रोड, पुणे",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "डॉ. माणिक गावकर",
      position: "सहा. अधिव्याख्याता, मॉडेल आर्ट इंस्टिटयुट, दादर, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "श्री. सत्यजीत वरेकर",
      position: "सहा. अधिव्याख्याता, कलाविश्व महाविद्यालय, सांगली",
      role: "सदस्य",
    },
    {
      sr: 6,
      name: "श्रीमती आरती श्रावस्ती",
      position: "उप सचिव (कला), महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई",
      role: "सदस्य सचिव",
    },
  ];
  const CourseCommitteeData1 = [
    {
      sr: 1,
      name: "श्रीमती सुचित्रा मिटकर",
      position: "अधिव्याख्याता, सर ज.जी. कला महाविद्यालय, मुंबई",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "श्री. भटु भामरे",
      position: "सहा. अधिव्याख्याता, धुळे स्कूल ऑफ आर्ट, धुळे",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्रीमती कावेरी शेलार",
      position:
        "अधिष्ठाता, सोफिया पॉलिटेक्निक आर्ट & डिझाइन डिपार्टमेंट, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "श्रीमती मंजिरी ठाकुर",
      position: "व्यवसायीक कलाकार, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "श्री. संदिप डोंगरे",
      position:
        "उप सचिव (कला), महाराष्ट्र राज्य कला शिक्षण मंडळ विभागीय कार्यालय, नागपूर",
      role: "सदस्य सचिव",
    },
  ];
  const CourseCommitteeData2 = [
    {
      sr: 1,
      name: "श्री. नितीन किटुकले",
      position: "अधिव्याख्याता, जे.के. अकॅडमी ऑफ आर्ट ॲन्ड डिझाईन, मुंबई",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "श्री. मनोज दरेकर",
      position: "सहा. अधिव्याख्याता, रा.शि.गोसावी, कला निकेतन, कोल्हापूर",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "डॉ. राहुल मेश्राम",
      position: "सहा. अधिव्याख्याता,सोफिया पॉलिटेक्निक आर्ट डिपार्टमेंट, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "श्री. रमेश पवार",
      position: "सहा. अधिव्याख्याता, अभिनव कला महाविद्यालय, पाषाण, पुणे ",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "श्रीमती आरती श्रावस्ती",
      position: "उप सचिव (कला), महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई ",
      role: "सदस्य सचिव",
    },
  ];
  const CourseCommitteeData3 = [
    {
      sr: 1,
      name: "प्रा. रमेश सुभाष वडजे",
      position: "अधिष्ठाता, शासकीय कला व अभिकल्प महाविद्यालय, छ. संभाजीनगर",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "श्री. नितीन मेस्त्री",
      position: "अधिव्याख्याता, सर ज.जी कला महाविद्यालय, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री. किशोर पुरेकर",
      position: "प्र. प्राचार्य, कला मंदिर महाविद्यालय, कोल्हापूर",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "श्री. सुनिल देशपांडे",
      position: "सहा. अधिव्याख्याता, भारती विद्यापीठ, पुणे ",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "श्रीमती आरती श्रावस्ती",
      position: "उप सचिव (कला) महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई ",
      role: "सदस्य सचिव",
    },
  ];
  const CourseCommitteeData4 = [
    {
      sr: 1,
      name: "डॉ. गणेश तरतरे",
      position: "प्राध्यापक, सर ज.जी. कला महाविद्यालय, मुंबई",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "प्रा. सुनिल तांबे",
      position: "प्राचार्य, धुळे स्कूल ऑफ आर्ट, धुळे",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री. प्रविण मुखेकर",
      position: "प्राचार्य,  कैलास‍ कलानिकेतन, बीड",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "श्री. अमोल पाटील",
      position: "अधिव्याख्याता, शरद पवार चित्रकला महाविद्यालय, नागपुर ",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "डॉ. संजय कुऱ्हे",
      position: "प्राचार्य, डॉ. संजय कुऱ्हे कॉलेज ऑफ मॉडर्न आर्ट, अमरावती ",
      role: "सदस्य",
    },
    {
      sr: 6,
      name: "श्री. संजय सोनवणे",
      position: "प्राचार्य, चित्रकला महाविद्यालय, कोपरगाव. ",
      role: "सदस्य",
    },
    {
      sr: 7,
      name: "श्री. संतोष शिर्के",
      position: "शारदाबाई पवार कला महाविद्यालय, मु.पो., काऱ्हाटी, बारामती. ",
      role: "सदस्य",
    },
    {
      sr: 8,
      name: "श्री. संदिप डोंगरे",
      position:
        "उप सचिव (कला), महाराष्ट्र राज्य कला शिक्षण मंडळ विभागीय कार्यालय, नागपूर ",
      role: "सदस्य सचिव",
    },
  ];
  const EquivalenceCommitteeData = [
    {
      sr: 1,
      name: "श्रीमती स्मिता किंकळे",
      position: "अधिव्याख्याता, सर.ज.जी. कला महाविद्यालय, मुंबई ",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "डॉ. संजय भारती",
      position: "प्र. प्राचार्य, अभिनव कला महाविद्यालय, पाषाण, पुणे",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री. संजय गायकवाड",
      position: "सहा. अधिव्याख्याता, दळवीज आर्ट ऑफ इंस्टिटुयट, कोल्हापूर",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "श्री. धनराज ख्याडे",
      position: "सहा. अधिव्याख्याता, रॉबी डिसिल्वा दृक कला महाविद्यालय, वसई ",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "श्री. संदिप डोंगरे",
      position:
        "उप सचिव (कला), महाराष्ट्र राज्य कला शिक्षण मंडळ विभागीय कार्यालय, नागपूर ",
      role: "सदस्य सचिव",
    },
  ];
  const ExaminationCommitteeData1 = [
    {
      sr: 1,
      name: "श्रीमती आरती श्रावस्ती",
      position: "उप सचिव (कला) महाराष्ट्र राज्य, कला शिक्षण मंडळ, मुंबई ",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "श्री. दत्तात्रय ठोंबरे",
      position: "प्र. प्राचार्य, वसई विकासीनीचे दृक कला निकेतन, वसई",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री. सुरेंद्र जगताप",
      position: "अधिव्याख्याता, जे.के. अकॅडमी ऑफ आर्ट ॲन्ड डिझाईन, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "श्री. अविनाश सोनवणे",
      position: "सहा. अधिव्याख्याता, स्कूल ऑफ आर्ट, धुळे ",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "श्री. नागेश वाघमोडे",
      position: "परीक्षा नियंत्रक, महाराष्ट्र राज्य, कला शिक्षण मंडळ ",
      role: "सदस्य सचिव",
    },
  ];
  const ExaminationCommitteeData2 = [
    {
      sr: 1,
      name: "श्री. संदिप डोंगरे",
      position:
        "उप सचिव (कला), महाराष्ट्र राज्य कला शिक्षण मंडळ विभागीय कार्यालय, नागपूर ",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "श्री. दिनकर पवार",
      position: "प्राचार्य, कला अकादमी बृहन्मुंबई महानगर पालिका, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री. अरूण सपकाळे",
      position: "कला शिक्षक, आर.आर. विद्यालय, जळगाव",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "श्री. चंद्रकांत लिंबेकर",
      position: "कला शिक्षक, बळीराम पाटील हायस्कूल, छ. संभाजीनगर ",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "श्री. नागेश वाघमोडे",
      position: "परीक्षा नियंत्रक, महाराष्ट्र राज्य, कला शिक्षण मंडळ ",
      role: "सदस्य सचिव",
    },
  ];
  const FeeFixationCommitteeData = [
    {
      sr: 1,
      name: "श्री.प्रमोद नाईक",
      position: "संचालक, महाराष्ट्र राज्य तंत्र शिक्षण मंडळ, मुंबई़",
      role: "अध्यक्ष",
    },
    {
      sr: 2,
      name: "श्री.तेजस व्ही. पाध्ये",
      position: "भारतीय सनदी लेखापाल, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 3,
      name: "श्री.हर्षद एस. देशपांडे,",
      position: "परिव्यय लेखापाल, मुंबई",
      role: "सदस्य",
    },
    {
      sr: 4,
      name: "डॉ.यशवंत व्ही. जोशी",
      position: "नामांकित तज्ञ (व्हीडीओ कॉन्फरन्सींगद्वारे)	",
      role: "सदस्य",
    },
    {
      sr: 5,
      name: "डॉ.विष्णुकांत शिवप्रसाद मौर्य",
      position: "नामांकित तज्ञ (व्हीडीओ कॉन्फरन्सींगद्वारे ",
      role: "सदस्य",
    },
    {
      sr: 6,
      name: "श्री.राजीव मिश्रा",
      position: "संचालक, कला संचालनालय, महाराष्ट्र राज्य, मुंबई ",
      role: "सदस्य सचिव",
    },
  ];

  return (
    <Card className="p-5 accorianpadding">
      {/* <div className="card-header backgroundColorCardHeader mb-4">
        <h1 className="fontForHeader">Constitution of Committees</h1>
      </div> */}
      <Accordion>
      {committees.map((committee) => (
        <Card key={committee.id} className="mb-2">
          <Card.Header
            className="d-flex justify-content-between align-items-center rounded-1"
            onClick={() => toggleAccordion(committee.id)} // Apply click on the entire header
            aria-expanded={activeKey === committee.id}
            style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate it's clickable
          >
            <span className="text-light">
              {committee.id}. {committee.name}
            </span>
            <Button
              className="text-light"
              variant="link"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling, button won't toggle separately
                toggleAccordion(committee.id);
              }}
            >
              {activeKey === committee.id ? <FaMinus /> : <FaPlus />}
            </Button>
          </Card.Header>
          <Accordion.Collapse eventKey={committee.id.toString()} in={activeKey === committee.id}>
              <Card.Body>
                {committee.id === 1 ? (
                  <>
                    <h6 className="text-center"> विद्याविषयक समिती</h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {academicCommitteeData.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>{" "}
                  </>
                ) : committee.id === 2 ? (
                  <>
                    <h6 className="text-center">वित्त समिती</h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {financeCommitteeData.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                ) : committee.id === 3 ? (
                  <>
                    <h6 className="text-center">
                      {" "}
                      (1) पाठयक्रम समिती – मूलभूत / रेखा व रंगकला
                      पदविका/प्रमाणपत्र अभ्यासक्रमाकरीता
                    </h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CourseCommitteeData.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <h6 className="text-center">
                      {" "}
                      (2) पाठयक्रम समिती – अंतर्गत गृह सजावट/वस्त्रकला
                      (प्रिंटिंग & डाईंग आणि विव्हिंग) पदवीका अभ्यासक्रमाकरीता
                    </h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CourseCommitteeData1.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <h6 className="text-center">
                      {" "}
                      (3) पाठयक्रम समिती – उपयोजित कला पदवीका अभ्यासक्रमाकरीता
                    </h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CourseCommitteeData2.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <h6 className="text-center">
                      {" "}
                      (4) पाठयक्रम समिती – शिल्पकला व प्रतिमानबंध/मातकाम पदवीका
                      अभ्यासक्रमाकरीता
                    </h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CourseCommitteeData3.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <h6 className="text-center">
                      (5) पाठयक्रम समिती – कला शिक्षक प्रशिक्षण पदविका/आर्ट
                      मास्टर (प्रमाणपत्र)/कला शिक्षण शास्त्र पदवीका
                      अभ्यासक्रमाकरीता
                    </h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CourseCommitteeData4.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                ) : committee.id === 4 ? (
                  <>
                    <h6 className="text-center"> समतुल्यता समिती</h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {EquivalenceCommitteeData.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                ) : committee.id === 5 ? (
                  <>
                    <h6 className="text-center">
                      (1) परीक्षा समिती (उच्च कला)
                    </h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ExaminationCommitteeData1.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <h6 className="text-center">
                      (2) परीक्षा समिती (शासकीय रेखाकला परीक्षा)
                    </h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ExaminationCommitteeData2.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                ) : committee.id === 6 ? (
                  <>
                    <h6 className="text-center">शुल्क निश्चिती समिती</h6>
                    <Table bordered hover responsive className="region-table">
                      <thead>
                        <tr>
                          <th>अनु. क्र.</th>
                          <th>नाव</th>
                          <th>संस्था व पदनाम</th>
                          <th>समिती मधील पद</th>
                        </tr>
                      </thead>
                      <tbody>
                        {FeeFixationCommitteeData.map((member, index) => (
                          <tr key={index}>
                            <td>{member.sr}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                ) : (
                  <p>No additional information available for this committee.</p>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Card>
  );
};

export default Committees;
