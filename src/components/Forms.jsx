// form.jsx

import { useState, useEffect } from "react";
import "./Forms.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Forms = () => {
  const navigatehome = () => {
    if (
      window.confirm(
        "Are you sure you want to go back ? Data entered will be lost!"
      )
    ) {
      window.location.href = "/";
    }
  };
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [formId, setFormId] = useState("");
  const [isTypeOfFormFilled, setTypeOfFormFilled] = useState(true);
  const [isTypeOfPatientFilled, setTypeOfPatientFilled] = useState(true);

  const [isGenderFilled, setGenderFilled] = useState(true);

  const [user, setUser] = useState({
    FormId: "",
    DateTime: "",
    FilledBy_Name: "",
    Type_of_form: "",
    Type_of_paitent: "",
    Name: "",
    Age: "",
    AadhaarNumber: "",
    Gender: "",
    Contact_no: "",
    Address: "",
    Previous_Occupation: "",
    Chief_Complaint: "",
    HOPI: "",
    Site: "",
    PainSiteLeft: [{}],
    PainSiteRight: [{}],
    Type: "",
    Medical_History: "",
    Surgical_History: "",
    Height: "",
    Weight: "",
    BMI: "",
    BP: "",
    PR: "",
    RR: "",
    Pallor: "",
    Icterus: "",
    Cyanosis: "",
    Clubbing: "",
    Erythema: "",
    Eruptinosa: "",
    GaitImage: null,
    PostureImage: null,

    Onset: "",
    Duration: "",
    Progression: "",
    Aggravating_Factors: "",
    Relieving_Factors: "",
    Diurnal_Variation: "",
    Irritability: "",
    vas: "",
    Menstrual_History: "",
    StrengthR: [{}],
    StrengthL: [{}],
    Tightness: [{}],
    GPLAD: "",
    G1: "",
    G2: "",
    G3: "",
    G4: "",

    Lymphadenopathy: "",
    TUG: "",
    Special_Tests_Positive: "",
    Special_Tests_Negative: "",
    Geriatric_Depression_Scale: "",
    SF_36_Score: "",
    Instrumental_Activity: "",

    Fall_Efficacy_Scale: "",
    Moca_Scale_Score: "",
    Activity_of_Daily_Living: "",
    Deformities: [],
    KuppuSwamy_Scale: "",
    Oedema: "",
    IndicatePain: [{}],
    NRSNeck: [{}],
    NRSUpperBack: [{}],
    NRSLowBack: [{}],
    NRSHip: [{}],
    NRSKnee: [{}],
    NRSAnkleAndFoot: [{}],

    MotorExamination: [{}],
    LowerExtremityFunctionScale: [{}],
    TheOsteoporosisKnowledgeAssessmentTool: [{}],
    NeurogicalAssessment: [{}],
    Sleep: "",
    Appetite: "",
    Diet: "",
    Bowel: "",
    Bladder: "",
    WoundObservation: "",
    Swelling: "",
    Scars: "",
    Tenderness: "",
    Spasm: "",
    Warmth: "",
    SwellinG: "",
    OnAuscultation: "",
    VoluntaryControl: "",
    Reflexes: "",
    SixMinuteWalkTest: "",
    Grade_of_Dyspnoea: "",
    CervicalRange: "",
    ShoulderRange: "",
    ElbowRange: "",
    WristRange: "",
    HandRange: "",
    TrunkRange: "",
    KneeRange: "",
    HipRange: "",
    AnkleRange: "",
    Treatment:"",
    Additional_remarks: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    setCurrentDateTime(formattedDateTime);
    setUser((prevUser) => ({
      ...prevUser,
      DateTime: formattedDateTime,
    }));
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("StrengthR")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        StrengthR: {
          ...prevUser.StrengthR,
          [category]: value,
        },
      }));
    } else if (name.startsWith("StrengthL")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        StrengthL: {
          ...prevUser.StrengthL,
          [category]: value,
        },
      }));
    } else if (name.startsWith("Tightness")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        Tightness: {
          ...prevUser.Tightness,
          [category]: value,
        },
      }));
    } else if (name.startsWith("IndicatePain")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        IndicatePain: {
          ...prevUser.IndicatePain,
          [category]: value,
        },
      }));
    } else if (name.startsWith("NRSNeck")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        NRSNeck: {
          ...prevUser.NRSNeck,
          [category]: value,
        },
      }));
    } else if (name.startsWith("NRSUpperBack")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        NRSUpperBack: {
          ...prevUser.NRSUpperBack,
          [category]: value,
        },
      }));
    } else if (name.startsWith("NRSLowBack")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        NRSLowBack: {
          ...prevUser.NRSLowBack,
          [category]: value,
        },
      }));
    } else if (name.startsWith("NRSHip")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        NRSHip: {
          ...prevUser.NRSHip,
          [category]: value,
        },
      }));
    } else if (name.startsWith("NRSKnee")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        NRSKnee: {
          ...prevUser.NRSKnee,
          [category]: value,
        },
      }));
    } else if (name.startsWith("NRSAnkleAndFoot")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        NRSAnkleAndFoot: {
          ...prevUser.NRSAnkleAndFoot,
          [category]: value,
        },
      }));
    } else if (name.startsWith("PainSiteLeft")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        PainSiteLeft: {
          ...prevUser.PainSiteLeft,
          [category]: value,
        },
      }));
    } else if (name.startsWith("PainSiteRight")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        PainSiteRight: {
          ...prevUser.PainSiteRight,
          [category]: value,
        },
      }));
    } else if (name.startsWith("MotorExamination")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        MotorExamination: {
          ...prevUser.MotorExamination,
          [category]: value,
        },
      }));
    } else if (name.startsWith("LowerExtremityFunctionScale")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        LowerExtremityFunctionScale: {
          ...prevUser.LowerExtremityFunctionScale,
          [category]: value,
        },
      }));
    } else if (name.startsWith("TheOsteoporosisKnowledgeAssessmentTool")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        TheOsteoporosisKnowledgeAssessmentTool: {
          ...prevUser.TheOsteoporosisKnowledgeAssessmentTool,
          [category]: value,
        },
      }));
    } else if (name.startsWith("NeurogicalAssessment")) {
      // Handle strength input separately
      const [, category] = name.split("_");
      setUser((prevUser) => ({
        ...prevUser,
        NeurogicalAssessment: {
          ...prevUser.NeurogicalAssessment,
          [category]: value,
        },
      }));
    } else {
      // Handle other inputs
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleImageInput = (e) => {
    const GaitImage = e.target.files[0];
    setUser({
      ...user,
      GaitImage: GaitImage,
    });
  };

  const handleImage2Input = (e) => {
    const PostureImage = e.target.files[0];
    setUser({
      ...user,
      PostureImage: PostureImage,
    });
  };
  const handleDeformitiesInput = (e) => {
    const { name, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      Deformities: checked
        ? [...prevUser.Deformities, name]
        : prevUser.Deformities.filter((deformity) => deformity !== name),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(user.Contact_no)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    const AddharPattern = /^\d{12}$/;
    if (!AddharPattern.test(user.AadhaarNumber)) {
      toast.error("Please enter a valid 12-digit Aaddhar number.");
      return;
    }

    if (!user.Type_of_form) {
      setTypeOfFormFilled(false);
      return;
    }

    if (!user.Type_of_paitent) {
      setTypeOfPatientFilled(false);
      return;
    }

    if (!user.Gender) {
      setGenderFilled(false);
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to submit the form?"
    );

    if (!confirmed) return;
    try {
      const formData = new FormData();
      formData.append("FormId", user.FormId);
      formData.append("DateTime", user.DateTime);
      formData.append("FilledBy_Name", user.FilledBy_Name);
      formData.append("Name", user.Name);
      formData.append("Age", user.Age);
      formData.append("AadhaarNumber", user.AadhaarNumber);
      formData.append("Type_of_form", user.Type_of_form);
      formData.append("Type_of_paitent", user.Type_of_paitent);
      formData.append("Gender", user.Gender);
      formData.append("Contact_no", user.Contact_no);
      formData.append("Address", user.Address);
      formData.append("Previous_Occupation", user.Previous_Occupation);
      formData.append("Chief_Complaint", user.Chief_Complaint);
      //  formData.append("Medical_History", user.Medical_History);
      formData.append("Medical_History", user.Medical_History);

      formData.append("HOPI", user.HOPI);
      formData.append("Surgical_History", user.Surgical_History);
      formData.append("Height", user.Height);
      formData.append("Weight", user.Weight);
      formData.append("BMI", user.BMI);
      formData.append("BP", user.BP);
      formData.append("PR", user.PR);
      formData.append("RR", user.RR);
      formData.append("Pallor", user.Pallor);
      formData.append("Icterus", user.Icterus);
      formData.append("Cyanosis", user.Cyanosis);
      formData.append("Clubbing", user.Clubbing);
      formData.append("Erythema", user.Erythema);
      formData.append("Eruptinosa", user.Eruptinosa);

      formData.append("GaitImage", user.GaitImage);

      formData.append("PostureImage", user.PostureImage);

      formData.append("Site", user.Site);
      formData.append("Type", user.Type);
      formData.append("Onset", user.Onset);
      formData.append("Duration", user.Duration);
      formData.append("Progression", user.Progression);
      formData.append("Aggravating_Factors", user.Aggravating_Factors);
      formData.append("Relieving_Factors", user.Relieving_Factors);
      formData.append("Diurnal_Variation", user.Diurnal_Variation);
      formData.append("Irritability", user.Irritability);
      formData.append("vas", user.vas);
      formData.append("Menstrual_History", user.Menstrual_History);
      formData.append("StrengthR", JSON.stringify(user.StrengthR));
      formData.append("StrengthL", JSON.stringify(user.StrengthL));
      formData.append("Tightness", JSON.stringify(user.Tightness));
      formData.append("GPLAD", user.GPLAD);
      formData.append("G1", user.G1);
      formData.append("G2", user.G2);
      formData.append("G3", user.G3);
      formData.append("G4", user.G4);

      formData.append("Lymphadenopathy", user.Lymphadenopathy);
      formData.append("TUG", user.TUG);
      formData.append("Special_Tests_Positive", user.Special_Tests_Positive);
      formData.append("Special_Tests_Negative", user.Special_Tests_Negative);
      formData.append(
        "Geriatric_Depression_Scale",
        user.Geriatric_Depression_Scale
      );
      formData.append("SF_36_Score", user.SF_36_Score);
      formData.append("Instrumental_Activity", user.Instrumental_Activity);

      formData.append("Fall_Efficacy_Scale", user.Fall_Efficacy_Scale);
      formData.append("Moca_Scale_Score", user.Moca_Scale_Score);
      formData.append(
        "Activity_of_Daily_Living",
        user.Activity_of_Daily_Living
      );
      formData.append("Deformities", JSON.stringify(user.Deformities));
      formData.append("KuppuSwamy_Scale", user.KuppuSwamy_Scale);
      formData.append("Oedema", user.Oedema);
      formData.append("IndicatePain", JSON.stringify(user.IndicatePain));
      formData.append("NRSNeck", JSON.stringify(user.NRSNeck));
      formData.append("NRSUpperBack", JSON.stringify(user.NRSUpperBack));
      formData.append("NRSLowBack", JSON.stringify(user.NRSLowBack));
      formData.append("NRSHip", JSON.stringify(user.NRSHip));
      formData.append("NRSKnee", JSON.stringify(user.NRSKnee));
      formData.append("NRSAnkleAndFoot", JSON.stringify(user.NRSAnkleAndFoot));
      formData.append("PainSiteLeft", JSON.stringify(user.PainSiteLeft));
      formData.append("PainSiteRight", JSON.stringify(user.PainSiteRight));
      formData.append(
        "MotorExamination",
        JSON.stringify(user.MotorExamination)
      );
      formData.append(
        "LowerExtremityFunctionScale",
        JSON.stringify(user.LowerExtremityFunctionScale)
      );
      formData.append(
        "TheOsteoporosisKnowledgeAssessmentTool",
        JSON.stringify(user.TheOsteoporosisKnowledgeAssessmentTool)
      );
      formData.append(
        "NeurogicalAssessment",
        JSON.stringify(user.NeurogicalAssessment)
      );

      formData.append("Sleep", user.Sleep);
      formData.append("Appetite", user.Appetite);
      formData.append("Diet", user.Diet);
      formData.append("Bowel", user.Bowel);
      formData.append("Bladder", user.Bladder);
      formData.append("WoundObservation", user.WoundObservation);
      formData.append("Swelling", user.Swelling);
      formData.append("Scars", user.Scars);
      formData.append("Tenderness", user.Tenderness);
      formData.append("Spasm", user.Spasm);
      formData.append("Warmth", user.Warmth);
      formData.append("SwellinG", user.SwellinG);
      formData.append("OnAuscultation", user.OnAuscultation);
      formData.append("VoluntaryControl", user.VoluntaryControl);
      formData.append("Reflexes", user.Reflexes);
      formData.append("SixMinuteWalkTest", user.SixMinuteWalkTest);
      formData.append("Grade_of_Dyspnoea", user.Grade_of_Dyspnoea);
      formData.append("CervicalRange", user.CervicalRange);
      formData.append("ShoulderRange", user.ShoulderRange);
      formData.append("ElbowRange", user.ElbowRange);
      formData.append("WristRange", user.WristRange);
      formData.append("HandRange", user.HandRange);
      formData.append("TrunkRange", user.TrunkRange);
      formData.append("KneeRange", user.KneeRange);
      formData.append("HipRange", user.HipRange);
      formData.append("AnkleRange", user.AnkleRange);
      formData.append("Treatment", user.Treatment);
      formData.append("Additional_remarks", user.Additional_remarks);
//https://des-zeta.vercel.app
      const response = await fetch("https://des-zeta.vercel.app/api/dataform/form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        setUser({
          FormId: "",
          DateTime: "",
          FilledBy_Name: "",
          Type_of_form: "",
          Type_of_paitent: "",
          Name: "",
          Age: "",
          AadhaarNumber: "",
          Gender: "",
          Contact_no: "",
          Address: "",
          Previous_Occupation: "",
          Chief_Complaint: "",
          HOPI: "",
          Site: "",
          PainSiteLeft: [{}],
          PainSiteRight: [{}],
          Type: "",
          Medical_History: "",
          Surgical_History: "",
          Height: "",
          Weight: "",
          BMI: "",
          BP: "",
          PR: "",
          RR: "",
          Pallor: "",
          Icterus: "",
          Cyanosis: "",
          Clubbing: "",
          Erythema: "",
          Eruptinosa: "",
          GaitImage: null,
          PostureImage: null,

          Onset: "",
          Duration: "",
          Progression: "",
          Aggravating_Factors: "",
          Relieving_Factors: "",
          Diurnal_Variation: "",
          Irritability: "",
          vas: "",
          Menstrual_History: "",
          StrengthR: [{}],
          StrengthL: [{}],
          Tightness: [{}],
          GPLAD: "",
          G1: "",
          G2: "",
          G3: "",
          G4: "",

          Lymphadenopathy: "",
          TUG: "",
          Special_Tests_Positive: "",
          Special_Tests_Negative: "",
          Geriatric_Depression_Scale: "",
          SF_36_Score: "",
          Instrumental_Activity: "",

          Fall_Efficacy_Scale: "",
          Moca_Scale_Score: "",
          Activity_of_Daily_Living: "",
          Deformities: [],
          KuppuSwamy_Scale: "",
          Oedema: "",
          IndicatePain: [{}],
          NRSNeck: [{}],
          NRSUpperBack: [{}],
          NRSLowBack: [{}],
          NRSHip: [{}],
          NRSKnee: [{}],
          NRSAnkleAndFoot: [{}],

          MotorExamination: [{}],
          LowerExtremityFunctionScale: [{}],
          TheOsteoporosisKnowledgeAssessmentTool: [{}],
          NeurogicalAssessment: [{}],
          Sleep: "",
          Appetite: "",
          Diet: "",
          Bowel: "",
          Bladder: "",
          WoundObservation: "",
          Swelling: "",
          Scars: "",
          Tenderness: "",
          Spasm: "",
          Warmth: "",
          SwellinG: "",
          OnAuscultation: "",
          VoluntaryControl: "",
          Reflexes: "",
          SixMinuteWalkTest: "",
          Grade_of_Dyspnoea: "",
          CervicalRange: "",
          ShoulderRange: "",
          ElbowRange: "",
          WristRange: "",
          HandRange: "",
          TrunkRange: "",
          KneeRange: "",
          HipRange: "",
          AnkleRange: "",
          Treatment:"",
          Additional_remarks: "",
        });

        toast.success("Form Submitted Successfully");
        console.log(responseData);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error)
    }
  };
  // DateTime
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Get month (01-12)
    const day = (now.getDate()).toString().padStart(2, '0');
    const sec = now.getMilliseconds().toString().slice(-2).padStart(2,'0');
    const randomDigits = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    const formattedFormId = `${year}${month}${day}-${randomDigits}-${sec}`; // Combine to form ID
    setFormId(formattedFormId);
    setUser((prevUser) => ({
      ...prevUser,
      FormId: formattedFormId,
    }));
  }, []);
  // const generateFormId = () => {
  //   const now = new Date();
  //   const year = now.getFullYear().toString().slice(-2); // Get last 2 digits of the year
  //   const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Get month (01-12)
  //   const day = (now.getDate()).toString().padStart(2, '0');
  //   const sec = now.getMilliseconds().toString().slice(-2).padStart(2,'0');
  //   const randomDigits = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
  //   return `${year}${month}${day}-${randomDigits}-${sec}`; // Combine to form ID
  // };

  return (
    <main>
      <body className="back">
        <div className="back3">
          <div className="instruct">
            &gt;Enter the data correctly.
            <br />
            &gt;Compulsary fields are denoted by <div className="star">*</div>
            .
            <br />
            &gt;Write "null/not applicable/--" in case of empty fields.
            <br />
            &gt;Fill multiple choice sections cautiously.
            <br />
            &gt;To include additional details, if necessary, please utilize the
            "Additional Remarks" section
            <br /> located at the end of the form.
          </div>
          <br />
        </div>
        <br />
        <div className="back2">
          <form onSubmit={handleSubmit}>
            <div className="element">
              Form ID
              <input
                className="box"
                type="text"
                id="FormId"
                name="FormId"
                value= {formId}
                readOnly
              />
            </div>
            <div className="element">
              Date and Time <div className="star"> * </div>
              <br />
              <input
                className="box"
                type="text"
                id="DateTime"
                name="DateTime"
                value={currentDateTime}
                readOnly
              />
            </div>
            <div className="element">
              Name of the person filling form <div className="star"> * </div>
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the name"
                name="FilledBy_Name"
                value={user.FilledBy_Name}
                onChange={handleInput}
                autoCapitalize="off"
                required
              />
            </div>
            <div className="element">
              Type of form <div className="star"> * </div>
              <br />
              <div className="box1">
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Type_of_form"
                  value="OPD"
                  required
                />
                OPD
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Type_of_form"
                  value="Geriatric"
                />
                Geriatric
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Type_of_form"
                  value=" Seva Arogya Camp"
                />
                Seva Arogya Camp
              </div>
            </div>
            {!isTypeOfFormFilled && (
              <p style={{ color: "red" }}>Please select Type of form</p>
            )}
            <div className="element">
              Type of Paitent <div className="star"> * </div>
              <br />
              <div className="box1">
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Type_of_paitent"
                  value="Old"
                  required
                />
                Old
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Type_of_paitent"
                  value="New"
                />
                New
              </div>
            </div>
            {!isTypeOfPatientFilled && (
              <p style={{ color: "red" }}>Please select Type of Patient</p>
            )}
            <div className="element">
              Name <div className="star"> * </div>
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the name"
                name="Name"
                value={user.Name}
                onChange={handleInput}
                autoCapitalize="off"
                required
              />
            </div>
            <div className="element">
              Aadhaar Number <div className="star"> * </div>
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Aadhaar Number"
                name="AadhaarNumber"
                onChange={handleInput}
                value={user.AadhaarNumber}
                required
              />
            </div>
            <div className="element">
              Age <div className="star"> * </div>
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the age"
                name="Age"
                onChange={handleInput}
                value={user.Age}
                required
              />
            </div>
            <div className="element">
              Gender <div className="star"> * </div>
              <br />
              <div className="box1">
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Gender"
                  value="Male"
                  required
                />
                Male
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Gender"
                  value="Female"
                />
                Female
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Gender"
                  value="Others"
                />
                Others
              </div>
              <br />
            </div>
            {!isGenderFilled && (
              <p style={{ color: "red" }}>Please select Gender</p>
            )}
            <div className="element">
              Contact Number <div className="star"> * </div>
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Contact number"
                name="Contact_no"
                value={user.Contact_no}
                onChange={handleInput}
                autoCapitalize="off"
                required
              ></input>
            </div>
            <div className="element">
              Address <div className="star"> * </div>
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Address"
                name="Address"
                value={user.Address}
                onChange={handleInput}
                autoCapitalize="off"
                required
              ></input>
            </div>
            <div className="element">
              Previous Occupation
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Previous_Occupation"
                value={user.Previous_Occupation}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Chief Complaint
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Chief_Complaint"
                value={user.Chief_Complaint}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              HOPI
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="HOPI"
                value={user.HOPI}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              <span style={{ fontWeight: "bold" }}> Pain:-</span>
              <br />
              Site
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Site"
                value={user.Site}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <br />
            <br />
            <div className="nrs" style={{ height: "100%" }}>
              Pain Site(Left Side)
              <br />
              <div className="nrsbox" style={{ height: "100%" }}>
                {/* fksfsdf fs dfsd fd sf f s f s f s df sf sf s f s f s  f s fs df sdf  sf  sf s f s f s f s f sd fs fs d f  */}
                <table
                  className="nrs-table"
                  // style={{height:"100%", width: "600px" }}
                  cellspacing="0"
                  cellpadding="3"
                >
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td>Neck</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Neck"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Upper Back</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Upper Back"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Lower Back</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Lower Back"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>SIJ</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_SIJ"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Shoulder</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Shoulder"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Elbow</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Elbow"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Hip</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Hip"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Knee</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Knee"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Foot</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Foot"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Ankle</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteLeft_Ankle"
                        value="10"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="nrs" style={{ height: "690px" }}>
              Pain Site(Right Side)
              <br />
              <div className="nrsbox" style={{ height: "620px" }}>
                <table
                  className="nrs-table"
                  style={{ height: "600px", width: "600px" }}
                  cellspacing="0"
                  cellpadding="1"
                >
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td>Neck</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Neck"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Upper Back</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Upper Back"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Lower Back</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Lower Back"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>SIJ</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_SIJ"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Shoulder</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Shoulder"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Elbow</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Elbow"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Hip</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Hip"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Knee</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Knee"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Foot</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Foot"
                        value="10"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Ankle</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="PainSiteRight_Ankle"
                        value="10"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="element">
              Type
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Type"
                value={user.Type}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="strength-table" style={{ height: "1200px" }}>
              Indicate Pain
              <div className="deformities-box2">
                <img
                  src="https://img.freepik.com/premium-vector/line-figure-person-front-back-side-man-woman-human-three-angles-diagrams_399998-143.jpg"
                  alt=""
                  style={{ width: "680px" }}
                />
                <div className="Strength">
                  <table
                    cellspacing="0"
                    cellpadding="8"
                    className="Tightness-tabular"
                    style={{ height: "700px" }}
                  >
                    <tr>
                      <th></th>
                      <th>Right</th>
                      <th>Left</th>
                      <th>Both</th>
                    </tr>
                    <tr>
                      <td>Neck</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Neck"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Neck"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Neck"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Upper Back</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Upper Back"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Upper Back"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Upper Back"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Lower Back </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Lower Back"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Lower Back"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Lower Back"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Shoulder Girdle</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Shoulder Girdle"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Shoulder Girdle"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Shoulder Girdle"
                          value="both"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Elbow</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Elbow"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Elbow"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Elbow"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wrist</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Wrist"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Wrist"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Wrist"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Hand</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Hand"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Hand"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Hand"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>SIJ</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_SIJ"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_SIJ"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_SIJ"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Hip</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Hip"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Hip"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Hip"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Knee</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Knee"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Knee"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Knee"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Ankle</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Ankle"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Ankle"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Ankle"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Foot</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Foot"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Foot"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Foot"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>No Pain</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_No Pain"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_No Pain"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_No Pain"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Non-specific Pain</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Non-specific Pain"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Non-specific Pain"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="IndicatePain_Non-specific Pain"
                          value="both"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="element">
              Onset
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Onset"
                value={user.Onset}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Duration
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Duration"
                value={user.Duration}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Progression
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Progression"
                value={user.Progression}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Aggravating Factors
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Aggravating_Factors"
                value={user.Aggravating_Factors}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Relieving Factors
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Relieving_Factors"
                value={user.Relieving_Factors}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Diurnal Variation
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Diurnal_Variation"
                value={user.Diurnal_Variation}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Irritability
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Irritability"
                value={user.Irritability}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="vas">
              VAS
              <br />
              <div className="vasbox">
                <table className="align">
                  <tr className="align">
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        className="radio1"
                        name="vas"
                        value="0"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio1"
                        name="vas"
                        value="1"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="2"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="3"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="4"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="5"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="6"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="7"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="8"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="9"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        name="vas"
                        value="10"
                        onChange={handleInput}
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <img
              src="https://spacecoastdaily.com/wp-content/uploads/2018/02/Pain_Scale__Arvin61r58-2.png"
              className="pain-scale"
              alt=""
            />
            <br />

            <span style={{ fontWeight: "bold", marginLeft: "170px" }}>
              {" "}
              Use face pain rating scale image for below...
            </span>
            <div className="nrs">
              NRS Neck
              <br />
              <div className="nrsbox">
                <table className="nrs-table" cellspacing="0" cellpadding="1">
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td>At rest</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_At rest"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>On Activity</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSNeck_On Activity"
                        value="10"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="nrs">
              NRS Upper Back
              <br />
              <div className="nrsbox">
                <table className="nrs-table" cellspacing="0" cellpadding="1">
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td>At rest</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_At rest"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>On Activity</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSUpperBack_On Activity"
                        value="10"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="nrs">
              NRS Low Back
              <br />
              <div className="nrsbox">
                <table className="nrs-table" cellspacing="0" cellpadding="1">
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td>At rest</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_At rest"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>On Activity</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSLowBack_On Activity"
                        value="10"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="nrs">
              NRS Hip
              <br />
              <div className="nrsbox">
                <table className="nrs-table" cellspacing="0" cellpadding="1">
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td>At rest</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_At rest"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>On Activity</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSHip_On Activity"
                        value="10"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="nrs">
              NRS Knee
              <br />
              <div className="nrsbox">
                <table className="nrs-table" cellspacing="0" cellpadding="1">
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td>At rest</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_At rest"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>On Activity</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSKnee_On Activity"
                        value="10"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="nrs">
              NRS Ankle And Foot
              <br />
              <div className="nrsbox">
                <table className="nrs-table" cellspacing="0" cellpadding="1">
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td>At rest</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_At rest"
                        value="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>On Activity</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="0"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="2"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="3"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="4"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="5"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="6"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="7"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="8"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="9"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NRSAnkleAndFoot_On Activity"
                        value="10"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="element">
              Surgical History
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Surgical_History"
                value={user.Surgical_History}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="medical">
              Medical History
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Medical_History"
                value={user.Medical_History}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              <span style={{ fontWeight: "bold" }}> Personal History</span>
              <br />
              Sleep
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Sleep"
                value={user.Sleep}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Appetite
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Appetite"
                value={user.Appetite}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Diet
              <br />
              <div className="box1">
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Diet"
                  value="Veg"
                />
                Veg
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Diet"
                  value="Non-Veg"
                />
                Non-Veg
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="Diet"
                  value="Both"
                />
                Both
              </div>
            </div>
            <div className="element">
              Bowel
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Bowel"
                value={user.Bowel}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Bladder
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Bladder"
                value={user.Bladder}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <br />
            <div className="element">
              Menstrual History
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Menstrual_History"
                value={user.Menstrual_History}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <br />
            <div className="element">
              GPLAD
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="GPLAD"
                value={user.GPLAD}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              G1
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="G1"
                value={user.G1}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              G2
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="G2"
                value={user.G2}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              G3
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="G3"
                value={user.G3}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              G4
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="G4"
                value={user.G4}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Height
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Height"
                value={user.Height}
                onChange={handleInput}
                autoCapitalize="off"
                required
              ></input>
            </div>
            <div className="element">
              Weight
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Weight"
                value={user.Weight}
                onChange={handleInput}
                autoCapitalize="off"
                required
              ></input>
            </div>
            <div className="element">
              BMI
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="BMI"
                value={user.BMI}
                onChange={handleInput}
                autoCapitalize="off"
                required
              ></input>
            </div>
            <div className="element">
              B.P
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="BP"
                value={user.BP}
                onChange={handleInput}
                autoCapitalize="off"
                required
              ></input>
            </div>
            <div className="element">
              P.R
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="PR"
                value={user.PR}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              R.R
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="RR"
                value={user.RR}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Pallor
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Pallor"
                value={user.Pallor}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Icterus
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Icterus"
                value={user.Icterus}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Cyanosis
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Cyanosis"
                value={user.Cyanosis}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Clubbing
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Clubbing"
                value={user.Clubbing}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Erythema
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Erythema"
                value={user.Erythema}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Eruptinosa
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Eruptinosa"
                value={user.Eruptinosa}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Lymphadenopathy
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Lymphadenopathy"
                value={user.Lymphadenopathy}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="deformities" style={{ height: "250px" }}>
              Oedema
              <br />
              <div className="medical-box" style={{ height: "170px" }}>
                <input
                  className="radio"
                  type="radio"
                  value="Grade 1"
                  name="Oedema"
                  onChange={handleInput}
                />
                Grade 1
                <br />
                <input
                  className="radio"
                  type="radio"
                  value="Grade 2"
                  name="Oedema"
                  onChange={handleInput}
                />
                Grade 2
                <br />
                <input
                  className="radio"
                  type="radio"
                  name="Oedema"
                  value="Grade 3"
                  onChange={handleInput}
                />
                Grade 3
                <br />
                <input
                  className="radio"
                  type="radio"
                  value="Grade 4"
                  name="Oedema"
                  onChange={handleInput}
                />
                Grade 4
                <br />
              </div>
            </div>
            <div className="element">
              Posture Image &nbsp; (Image should be in format
              paitent_name.jpg/png/jpeg)
              <br />
              <input
                className="box"
                type="file"
                name="PostureImage"
                onChange={handleImage2Input}
              />
            </div>
            <div className="element">
              Gait Video &nbsp; (Video should be in format paitent_name.mp4)
              <br />
              <input
                className="box"
                type="file"
                name="GaitImage"
                onChange={handleImageInput}
              />
            </div>
            <div className="element">
              <span style={{ fontWeight: "bold" }}> On Observation:-</span>
              <br />
              Swelling
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Swelling"
                value={user.Swelling}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Wound Observation
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="WoundObservation"
                value={user.WoundObservation}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Scars
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Scars"
                value={user.Scars}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              <span style={{ fontWeight: "bold" }}> On Palpation:-</span>
              <br />
              Tenderness
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Tenderness"
                value={user.Tenderness}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Spasm
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Spasm"
                value={user.Spasm}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Warmth
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Warmth"
                value={user.Warmth}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Swelling
              <br />
              <div className="box1">
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="SwellinG"
                  value="Pitting"
                />
                Pitting
                <input
                  className="radio"
                  type="radio"
                  onChange={handleInput}
                  name="SwellinG"
                  value="NonPitting"
                />
                Non Pitting
              </div>
            </div>
            <br />
            <div className="element">
              On Auscultation
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="OnAuscultation"
                value={user.OnAuscultation}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <br />
            <div className="nrs" style={{ height: "690px" }}>
              <span style={{ fontWeight: "bold" }}> On Examination:-</span>
              <br />
              Motor Examination(Range of Motion)
              <br />
              <div className="nrsbox" style={{ height: "620px" }}>
                <table
                  className="nrs-table"
                  style={{ height: "600px", width: "720px" }}
                  cellspacing="0"
                  cellpadding="1"
                >
                  <tr>
                    <td></td>
                    <td>Complete and Painless</td>
                    <td>Complete and Painful throughout Range</td>
                    <td>Complete and Painful in partial Range</td>
                    <td>Incomplete and Painless within Range</td>
                    <td>Incomplete range and Painful in partial Range</td>
                    <td>Incomplete range and Painful throughout Range</td>
                    <td>Cannot perform due to pain</td>
                  </tr>

                  <tr>
                    <td>Cervical </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Cervical"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Cervical"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Cervical"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Cervical"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Cervical"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Cervical"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Cervical"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Shoulder </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Shoulder"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Shoulder"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Shoulder"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Shoulder"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Shoulder"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Shoulder"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Shoulder"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Elbow</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Elbow"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Elbow"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Elbow"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Elbow"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Elbow"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Elbow"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Elbow"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Wrist</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Wrist"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Wrist"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Wrist"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Wrist"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Wrist"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Wrist"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Wrist"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hand</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hand"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hand"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hand"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hand"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hand"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hand"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hand"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Trunk</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Trunk"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Trunk"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Trunk"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Trunk"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Trunk"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Trunk"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Trunk"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hip</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hip"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hip"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hip"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hip"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hip"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hip"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Hip"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Knee</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Knee"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Knee"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Knee"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Knee"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Knee"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Knee"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Knee"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Ankle</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Ankle"
                        value="Complete and Painless"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Ankle"
                        value="Complete and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Ankle"
                        value="Complete and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Ankle"
                        value="Incomplete and Painless within Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Ankle"
                        value="Incomplete range and Painful in partial Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Ankle"
                        value="Incomplete range and Painful throughout Range"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="MotorExamination_Ankle"
                        value="Cannot perform due to pain"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="element">
              Cervical Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="CervicalRange"
                value={user.CervicalRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <div className="element">
              Shoulder Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="ShoulderRange"
                value={user.ShoulderRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <div className="element">
              Elbow Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="ElbowRange"
                value={user.ElbowRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <div className="element">
              Wrist Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="WristRange"
                value={user.WristRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <div className="element">
              Hand Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="HandRange"
                value={user.HandRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <div className="element">
              Trunk Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="TrunkRange"
                value={user.TrunkRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <div className="element">
              Hip Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="HipRange"
                value={user.HipRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <div className="element">
              Knee Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="KneeRange"
                value={user.KneeRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <div className="element">
              Ankle Range
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the Range"
                name="AnkleRange"
                value={user.AnkleRange}
                onChange={handleInput}
                autoCapitalize="off"
              />
            </div>
            <br />
            <div className="strength-table">
              Strength(Right)
              <div className="deformities-box" style={{ height: 'max-content' }}>
                <div className="Strength">
                  <table
                    cellspacing="0"
                    cellpadding="8"
                    className="strength-tabular"
                  >
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">0</th>
                        <th scope="col">1</th>
                        <th scope="col">2</th>
                        <th scope="col">3</th>
                        <th scope="col">4</th>
                        <th scope="col">5</th>
                      </tr>
                    </thead>
                    <tbody className="tabledivider ">
                      <tr>
                        <th scope="row">Shoulder flexors</th>
                        <td>
                          <input
                            className="radio"
                            type="radio"
                            onChange={handleInput}
                            name={`StrengthR_Shoulderflexors`}
                            value="0"
                          />
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthR_Shoulderflexors`}
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthR_Shoulderflexors`}
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthR_Shoulderflexors`}
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthR_Shoulderflexors`}
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthR_Shoulderflexors`}
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shoulder extensors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShouldExtensors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShouldExtensors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShouldExtensors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShouldExtensors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShouldExtensors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShouldExtensors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shoulder abductors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderAbductors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderAbductors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderAbductors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderAbductors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderAbductors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderAbductors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shoulder IR </th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderIR"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderIR"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderIR"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderIR"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderIR"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderIR"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shoulder ER</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderER"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderER"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderER"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderER"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderER"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ShoulderER"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Elbow flexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ElbowFlexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ElbowFlexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ElbowFlexors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ElbowFlexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ElbowFlexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_ElbowFlexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Wrist Extensors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristExtensors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristExtensors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristExtensors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristExtensors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristExtensors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristExtensors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Wrist Radial Deviatora</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristRadialDeviatora"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristRadialDeviatora"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristRadialDeviatora"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristRadialDeviatora"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristRadialDeviatora"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristRadialDeviatora"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Wrist ulnar Deviatora</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristUlnarDeviatora"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristUlnarDeviatora"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristUlnarDeviatora"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristUlnarDeviatora"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristUlnarDeviatora"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_WristUlnarDeviatora"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip Flexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipFlexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipFlexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipFlexors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipFlexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipFlexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipFlexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip Extensors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipExtensors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipExtensors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipExtensors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipExtensors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipExtensors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipExtensors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip adductors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipAdductors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipAdductors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipAdductors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipAdductors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipAdductors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipAdductors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip IR</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipIR"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipIR"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipIR"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipIR"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipIR"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipIR"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip ER</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipER"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipER"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipER"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipER"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipER"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_HipER"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Knee flexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeFlexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeFlexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeFlexors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeFlexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeFlexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeFlexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Knee Extensors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeExtensors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeExtensors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeExtensors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeExtensors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeExtensors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_KneeExtensors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Dorsiflexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Dorsiflexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Dorsiflexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Dorsiflexors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Dorsiflexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Dorsiflexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Dorsiflexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Plantarflexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Plantarflexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Plantarflexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            className="radio"
                            type="radio"
                            onChange={handleInput}
                            name="StrengthR_Plantarflexors"
                            value="2"
                          />
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Plantarflexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Plantarflexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthR_Plantarflexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
              className="strength-table"
              style={{ height: "880px", position: "relative", top: "7em" }}
            >
              Strength(Left)
              <div
                className="deformities-box"
                style={{ height: "980px", position: "relative" }}
              >
                <div className="Strength">
                  <table
                    cellspacing="0"
                    cellpadding="8"
                    className="strength-tabular"
                  >
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">0</th>
                        <th scope="col">1</th>
                        <th scope="col">2</th>
                        <th scope="col">3</th>
                        <th scope="col">4</th>
                        <th scope="col">5</th>
                      </tr>
                    </thead>
                    <tbody className="tabledivider ">
                      <tr>
                        <th scope="row">Shoulder flexors</th>
                        <td>
                          <input
                            className="radio"
                            type="radio"
                            onChange={handleInput}
                            name={`StrengthL_Shoulderflexors`}
                            value="0"
                          />
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthL_Shoulderflexors`}
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthL_Shoulderflexors`}
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthL_Shoulderflexors`}
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthL_Shoulderflexors`}
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name={`StrengthL_Shoulderflexors`}
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shoulder extensors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShouldExtensors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShouldExtensors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShouldExtensors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShouldExtensors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShouldExtensors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShouldExtensors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shoulder abductors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderAbductors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderAbductors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderAbductors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderAbductors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderAbductors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderAbductors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shoulder IR </th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderIR"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderIR"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderIR"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderIR"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderIR"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderIR"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shoulder ER</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderER"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderER"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderER"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderER"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderER"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ShoulderER"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Elbow flexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ElbowFlexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ElbowFlexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ElbowFlexors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ElbowFlexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ElbowFlexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_ElbowFlexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Wrist Extensors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristExtensors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristExtensors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristExtensors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristExtensors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristExtensors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristExtensors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Wrist Radial Deviatora</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristRadialDeviatora"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristRadialDeviatora"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristRadialDeviatora"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristRadialDeviatora"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristRadialDeviatora"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristRadialDeviatora"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Wrist ulnar Deviatora</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristUlnarDeviatora"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristUlnarDeviatora"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristUlnarDeviatora"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristUlnarDeviatora"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristUlnarDeviatora"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_WristUlnarDeviatora"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip Flexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipFlexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipFlexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipFlexors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipFlexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipFlexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipFlexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip Extensors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipExtensors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipExtensors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipExtensors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipExtensors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipExtensors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipExtensors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip adductors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipAdductors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipAdductors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipAdductors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipAdductors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipAdductors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipAdductors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip IR</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipIR"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipIR"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipIR"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipIR"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipIR"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipIR"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hip ER</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipER"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipER"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipER"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipER"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipER"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_HipER"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Knee flexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeFlexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeFlexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeFlexors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeFlexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeFlexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeFlexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Knee Extensors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeExtensors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeExtensors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeExtensors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeExtensors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeExtensors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_KneeExtensors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Dorsiflexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Dorsiflexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Dorsiflexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Dorsiflexors"
                              value="2"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Dorsiflexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Dorsiflexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Dorsiflexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Plantarflexors</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Plantarflexors"
                              value="0"
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Plantarflexors"
                              value="1"
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            className="radio"
                            type="radio"
                            onChange={handleInput}
                            name="StrengthL_Plantarflexors"
                            value="2"
                          />
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Plantarflexors"
                              value="3"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Plantarflexors"
                              value="4"
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-check">
                            <input
                              className="radio"
                              type="radio"
                              onChange={handleInput}
                              name="StrengthL_Plantarflexors"
                              value="5"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
              className="strength-table"
              style={{ height: "580px", position: "relative", top: "7em" }}
            >
              Tightness
              <div className="deformities-box" style={{ height: "480px" }}>
                <div className="Strength">
                  <table
                    cellspacing="0"
                    cellpadding="8"
                    className="Tightness-tabular"
                  >
                    <tr>
                      <th></th>
                      <th>Right</th>
                      <th>Left</th>
                      <th>Both</th>
                    </tr>
                    <tr>
                      <td>Trapezius</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Trapezius"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Trapezius"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Trapezius"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Pectoral</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Pectoral"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Pectoral"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Pectoral"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>DLF</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_DLF"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_DLF"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_DLF"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Iliopsoas</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Iliopsoas"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Iliopsoas"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Iliopsoas"
                          value="both"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Hams</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Hams"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Hams"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_Hams"
                          value="both"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>TA</td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_TA"
                          value="right"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_TA"
                          value="left"
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          className="radio"
                          onChange={handleInput}
                          name="Tightness_TA"
                          value="both"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="element">
              Voluntary Control
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="VoluntaryControl"
                value={user.VoluntaryControl}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Reflexes
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Reflexes"
                value={user.Reflexes}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <br />
            <div className="nrs" style={{ height: "690px" }}>
              Neurogical Assessment
              <br />
              <div className="nrsbox" style={{ height: "620px" }}>
                <table
                  className="nrs-table"
                  style={{ height: "600px", width: "720px" }}
                  cellspacing="0"
                  cellpadding="1"
                >
                  <tr>
                    <td></td>
                    <td>Infact</td>
                    <td>Affected</td>
                  </tr>

                  <tr>
                    <td>Olfactory Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Olfactory Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Olfactory Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Optic Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Optic Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Optic Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Occulomotor Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Occulomotor Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Occulomotor Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Trochlear Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Trochlear Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Trochlear Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Trigeminamal Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Trigeminamal Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Trigeminamal Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Abducens Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Abducens Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Abducens Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Facial Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Facial Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Facial Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Vestibulocochlear Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Vestibulocochlear Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Vestibulocochlear Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Glossopharyngeal Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Glossopharyngeal Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Glossopharyngeal Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Vagus Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Vagus Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Vagus Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Spinal Accesory Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Spinal Accesory Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Spinal Accesory Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hypoglossal Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Hypoglossal Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Hypoglossal Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sensory Nerve</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Sensory Nerve"
                        value="Infact"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="NeurogicalAssessment_Sensory Nerve"
                        value="Affected"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="element">
              Special Tests Positive
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Special_Tests_Positive"
                value={user.Special_Tests_Positive}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Special Tests Negative
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Special_Tests_Negative"
                value={user.Special_Tests_Negative}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              <span style={{ fontWeight: "bold" }}> Outcome Measures:-</span>
              <br />
              Geriatric Depression Scale(GDS)
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Geriatric_Depression_Scale"
                value={user.Geriatric_Depression_Scale}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              SF-36 Score
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="SF_36_Score"
                value={user.SF_36_Score}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Instrumental Activity
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Instrumental_Activity"
                value={user.Instrumental_Activity}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              TUG
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="TUG"
                value={user.TUG}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="deformities" style={{ height: "250px" }}>
              KuppuSwamy Scale
              <br />
              <div className="medical-box" style={{ height: "180px" }}>
                <input
                  className="radio"
                  type="radio"
                  name="KuppuSwamy_Scale"
                  value="Upper Class"
                  onChange={handleInput}
                />
                Upper class
                <br />
                <input
                  className="radio"
                  type="radio"
                  value="Upper-Middle Class"
                  onChange={handleInput}
                  name="KuppuSwamy_Scale"
                />
                Upper-Middle Class
                <br />
                <input
                  className="radio"
                  type="radio"
                  name="KuppuSwamy_Scale"
                  onChange={handleInput}
                  value="Lower-Middle Class"
                />
                Lower-Middle Class
                <br />
                <input
                  className="radio"
                  type="radio"
                  name="KuppuSwamy_Scale"
                  value="Lower Class"
                  onChange={handleInput}
                />
                Lower Class
                <br />
              </div>
            </div>
            <div className="element">
              Fall Efficacy Scale
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Fall_Efficacy_Scale"
                value={user.Fall_Efficacy_Scale}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Moca Scale Score
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Moca_Scale_Score"
                value={user.Moca_Scale_Score}
                onChange={handleInput}
                autoCapitalize="off"
              ></input>
            </div>
            <div className="element">
              Activity of Daily Living
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Activity_of_Daily_Living"
                onChange={handleInput}
                value={user.Activity_of_Daily_Living}
              ></input>
            </div>
            <div className="deformities">
              Deformities
              <br />
              <div className="deformities-box" style={{width:"auto" , height:"auto", marginBottom:"50px"}}>
                <input
                  className="radio"
                  type="checkbox"
                  name="Swaneck"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("Swaneck")}
                />
                SwanNeck
                <br />
                <input
                  className="radio"
                  type="checkbox"
                  name="FlatFoot"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("FlatFoot")}
                />
                Flatfoot
                <br />
                <input
                  className="radio"
                  type="checkbox"
                  name="Boutounierres"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("Boutounierres")}
                />
                Boutounierres
                <br />
                <input
                  className="radio"
                  type="checkbox"
                  name="Hand Z-deformity"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("Hand Z-deformity")}
                />
                Hand Z-deformity
                <br />
                <input
                  className="radio"
                  type="checkbox"
                  name="Genu varum"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("Genu varum")}
                />
                Genu varum
                <br />
                <input
                  className="radio"
                  type="checkbox"
                  name="Genu valgum"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("Genu valgum")}
                />
                Genu valgum
                <br />
                <input
                  className="radio"
                  type="checkbox"
                  name="Everted Calcanei"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("Everted Calcanei")}
                />
                Everted Calcanei
                <br />
                <input
                  className="radio"
                  type="checkbox"
                  name="Iverted Calcanei"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("Iverted Calcanei")}
                />
                Iverted Calcanei
                <br />
                <input
                  className="radio"
                  type="checkbox"
                  name="Hallux Valgus"
                  onChange={handleDeformitiesInput}
                  checked={user.Deformities.includes("Hallux Valgus")}
                />
                Hallux Valgus
                <br />
              </div>
            </div>
            <div className="nrs" style={{ height: "100%" }}>
              Lower Extremity Function Scale
              <br />
              <div className="nrsbox" style={{ height: "auto" }}>
                <table
                  className="nrs-table"
                  style={{ height: "auto", width: "720px" }}
                  cellspacing="0"
                  cellpadding="1"
                >
                  <tr>
                    <td></td>
                    <td>
                      Extremely difficult or unable to perform the activity
                    </td>
                    <td>Quite a bit difficult</td>
                    <td>moderate difficult</td>
                    <td>A little bit difficult</td>
                    <td>No difficulty</td>
                    <td>Not applicable</td>
                  </tr>

                  <tr>
                    <td className="text-long-form" >
                      Any of your usual work,housework or school activities
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Any of your usual work,housework or school activities"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Any of your usual work,housework or school activities"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Any of your usual work,housework or school activities"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Any of your usual work,housework or school activities"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Any of your usual work,housework or school activities"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Any of your usual work,housework or school activities"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form" >
                      Your usual hobbies,recreational or sporting activities
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Your usual hobbies,recreational or sporting activities"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Your usual hobbies,recreational or sporting activities"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Your usual hobbies,recreational or sporting activities"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Your usual hobbies,recreational or sporting activities"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Your usual hobbies,recreational or sporting activities"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Your usual hobbies,recreational or sporting activities"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form" >Getting into or out of the bath</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of the bath"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of the bath"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of the bath"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of the bath"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of the bath"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of the bath"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form" >Walking between rooms</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking between rooms"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking between rooms"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking between rooms"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking between rooms"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking between rooms"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking between rooms"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form" >Putting on your shoes or socks</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Putting on your shoes or socks"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Putting on your shoes or socks"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Putting on your shoes or socks"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Putting on your shoes or socks"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Putting on your shoes or socks"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Putting on your shoes or socks"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Squatting</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Squatting"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Squatting"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Squatting"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Squatting"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Squatting"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Squatting"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      Lifting an object,like a bag of groceries from the floor
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Lifting an object,like a bag of groceries from the floor"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Lifting an object,like a bag of groceries from the floor"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Lifting an object,like a bag of groceries from the floor"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Lifting an object,like a bag of groceries from the floor"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Lifting an object,like a bag of groceries from the floor"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Lifting an object,like a bag of groceries from the floor"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Performing light activities around your home</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing light activities around your home"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing light activities around your home"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing light activities around your home"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing light activities around your home"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing light activities around your home"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing light activities around your home"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Performing heavy activities around your home</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing heavy activities around your home"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing heavy activities around your home"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing heavy activities around your home"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing heavy activities around your home"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing heavy activities around your home"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Performing heavy activities around your home"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Getting into or out of car/rickshaw</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of car/rickshaw"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of car/rickshaw"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of car/rickshaw"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of car/rickshaw"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of car/rickshaw"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting into or out of car/rickshaw"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Getting onto or off a 2-wheeler</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting onto or off a 2-wheeler"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting onto or off a 2-wheeler"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting onto or off a 2-wheeler"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting onto or off a 2-wheeler"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting onto or off a 2-wheeler"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Getting onto or off a 2-wheeler"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Walking 2 blocks/2 chowks.</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking 2 blocks/2 chowks"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking 2 blocks/2 chowks"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking 2 blocks/2 chowks"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking 2 blocks/2 chowks"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking 2 blocks/2 chowks"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking 2 blocks/2 chowks"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Walking a mile.</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking a mile"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking a mile"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking a mile"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking a mile"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking a mile"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Walking a mile"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Going up or down 10 stairs</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Going up or down 10 stairs"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Going up or down 10 stairs"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Going up or down 10 stairs"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Going up or down 10 stairs"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Going up or down 10 stairs"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Going up or down 10 stairs"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Standing for 1 hour</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Standing for 1 hour"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Standing for 1 hour"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Standing for 1 hour"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Standing for 1 hour"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Standing for 1 hour"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Standing for 1 hour"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form"> Sitting for 1 hour</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Sitting for 1 hour"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Sitting for 1 hour"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Sitting for 1 hour"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Sitting for 1 hour"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Sitting for 1 hour"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Sitting for 1 hour"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Running on Even Ground</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Even Ground"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Even Ground"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Even Ground"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Even Ground"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Even Ground"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Even Ground"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Running on Uneven Ground</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Uneven Ground"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Uneven Ground"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Uneven Ground"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Uneven Ground"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Uneven Ground"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Running on Uneven Ground"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Making sharp turns while running</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Making sharp turns while running"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Making sharp turns while running"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Making sharp turns while running"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Making sharp turns while running"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Making sharp turns while running"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Making sharp turns while running"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Hopping</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Hopping"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Hopping"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Hopping"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Hopping"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Hopping"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Hopping"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Rolling over in bed</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Rolling over in bed"
                        value="Extremely difficult or unable to perform the activity"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Rolling over in bed"
                        value="Quite a bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Rolling over in bed"
                        value="moderate difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Rolling over in bed"
                        value="A little bit difficult"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Rolling over in bed"
                        value="No difficulty"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="LowerExtremityFunctionScale_Rolling over in bed"
                        value="Not applicable"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <br />
            <br />
            <div className="nrs" style={{ height: "100%" }}><br/><br/>
              <h4>The Osteoporosis Knowledge Assessment Tool</h4>
              <br />
              <div className="nrsbox" style={{ height: "100%" }}>
                <table
                  className="nrs-table"
                  style={{ height: "100%", width: "720px" }}
                  cellspacing="0"
                  cellpadding="3"
                >
                  <tr>
                    <td></td>
                    <td>True</td>
                    <td>False</td>
                    <td>Don't know</td>
                  </tr>

                  <tr>
                    <td className="text-long-form">
                      Osteoporosis leads to an increase risk of bone fractures
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis leads to an increase risk of bone fractures"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis leads to an increase risk of bone fractures"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis leads to an increase risk of bone fractures"
                        value="Don't know"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-long-form">
                      Osteoporosis usually causes symptoms(eg.pain)before
                      fractures occur
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis usually causes symptoms(eg.pain)before fractures occur"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis usually causes symptoms(eg.pain)before fractures occur"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis usually causes symptoms(eg.pain)before fractures occur"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      Having a higher peak bone mass at the end of childhood
                      gives no protection against the development of
                      osteoporosis in later life
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Having a higher peak bone mass at the end of childhood gives no protection against the development of osteoporosis in later life"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Having a higher peak bone mass at the end of childhood gives no protection against the development of osteoporosis in later life"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Having a higher peak bone mass at the end of childhood gives no protection against the development of osteoporosis in later life"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Osteoporosis is more common in men</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis is more common in men"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis is more common in men"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Osteoporosis is more common in men"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Cigarette smoking can contribute to osteoporosis</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Cigarette smoking can contribute to osteoporosis"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Cigarette smoking can contribute to osteoporosis"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Cigarette smoking can contribute to osteoporosis"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      White women are at highest risk of fracture as compared to
                      other races
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_White women are at highest risk of fracture as compared to other races"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_White women are at highest risk of fracture as compared to other races"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_White women are at highest risk of fracture as compared to other races"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      A fall is just as important as low bone strength in
                      causing fractures
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_A fall is just as important as low bone strength in causing fractures"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_A fall is just as important as low bone strength in causing fractures"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_A fall is just as important as low bone strength in causing fractures"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">By age 80,The majority of women have osteoporosis</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_By age 80,The majority of women have osteoporosis"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_By age 80,The majority of women have osteoporosis"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_By age 80,The majority of women have osteoporosis"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      From age 50,Most women can expect atleast one fracture
                      before they die
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_From age 50,Most women can expect atleast one fracture before they die"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_From age 50,Most women can expect atleast one fracture before they die"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_From age 50,Most women can expect atleast one fracture before they die"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      Any type of physical activity is beneficial for
                      osteoporosis
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Any type of physical activity is beneficial for osteoporosis"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Any type of physical activity is beneficial for osteoporosis"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Any type of physical activity is beneficial for osteoporosis"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      It is easy to tell wheather I am at risk of osteoporosis
                      by my clinical risk factor
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_It is easy to tell wheather I am at risk of osteoporosis by my clinical risk factor"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_It is easy to tell wheather I am at risk of osteoporosis by my clinical risk factor"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_It is easy to tell wheather I am at risk of osteoporosis by my clinical risk factor"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      Family history of osteoporosis strongly predisposes a
                      person to osteoporosis
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Family history of osteoporosis strongly predisposes a person to osteoporosis"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Family history of osteoporosis strongly predisposes a person to osteoporosis"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Family history of osteoporosis strongly predisposes a person to osteoporosis"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      An adequate calcium intake can be achieved from two
                      glasses of milk a day
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_An adequate calcium intake can be achieved from two glasses of milk a day"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_An adequate calcium intake can be achieved from two glasses of milk a day"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_An adequate calcium intake can be achieved from two glasses of milk a day"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      Sardines and broccoli are good sources of calcium for
                      people who cannot take dairy products
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Sardines and broccoli are good sources of calcium for people who cannot take dairy products"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Sardines and broccoli are good sources of calcium for people who cannot take dairy products"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Sardines and broccoli are good sources of calcium for people who cannot take dairy products"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">Calcium supplements alone can prevent bone loss</td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Calcium supplements alone can prevent bone loss"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Calcium supplements alone can prevent bone loss"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Calcium supplements alone can prevent bone loss"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      Alcohol in moderation has little effect on osteoporosis
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Alcohol in moderation has little effect on osteoporosis"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Alcohol in moderation has little effect on osteoporosis"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Alcohol in moderation has little effect on osteoporosis"
                        value="Don't know"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-long-form">
                      A high salt intake is a risk factor for osteoporosis
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_A high salt intake is a risk factor for osteoporosis"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_A high salt intake is a risk factor for osteoporosis"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_A high salt intake is a risk factor for osteoporosis"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      There is small amount of bone loss in the ten years
                      following the onset of menopause
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_There is small amount of bone loss in the ten years following the onset of menopause"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_There is small amount of bone loss in the ten years following the onset of menopause"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_There is small amount of bone loss in the ten years following the onset of menopause"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      Hormone therapy prevents further bone loss at any age
                      after menopause
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Hormone therapy prevents further bone loss at any age after menopause"
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Hormone therapy prevents further bone loss at any age after menopause"
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_Hormone therapy prevents further bone loss at any age after menopause"
                        value="Don't know"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-long-form">
                      There are no effective treatments for osteoporosis
                      available in India.
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_There are no effective treatments for osteoporosis available in India."
                        value="True"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_There are no effective treatments for osteoporosis available in India."
                        value="False"
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio"
                        onChange={handleInput}
                        name="TheOsteoporosisKnowledgeAssessmentTool_There are no effective treatments for osteoporosis available in India."
                        value="Don't know"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="element"><br/><br/>
              <h4>6 Minute Walk Test</h4>
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="SixMinuteWalkTest"
                onChange={handleInput}
                value={user.SixMinuteWalkTest}
              />
            </div>
              <br />
            <div className="element">
              Grade of Dyspnoea
              <br />
              <input
                className="box"
                type="text"
                placeholder=" Enter the data"
                name="Grade_of_Dyspnoea"
                onChange={handleInput}
                value={user.Grade_of_Dyspnoea}
              />
            </div>
            <div className="element">
              Treatment
              <br />
              <br />
              <textarea
                // style={{ height: "100px", width: "max-content" }}
                className="Additional"
                placeholder=" Enter the treatment information(if necessary)"
                name="Treatment"
                onChange={handleInput}
                value={user.Treatment}
              />
            </div>
            <br/>
            <div className="element" style={{ marginTop:"70px" }}>
              Additional Remarks
              <br />
              <br />
              <textarea
               
                className="Additional"
                placeholder=" Enter the additional information(if necessary)"
                name="Additional_remarks"
                onChange={handleInput}
                value={user.Additional_remarks}
              />
            </div>
            <br />
            <br />
            <br />
            <br />

            <div style={{display:'flex', justifyContent:"space-around",alignItems:"center", marginTop:"3vh", marginBottom:"6vh"}}>
              <div className="wrap">
              <button
                
                onClick={navigatehome}
                className="button-form"
              >
                Back
              </button>
              </div>
              <div className="wrap">
              <button type="submit" className="button-form">
                Submit
              </button>
              </div>

            </div>
          </form>
        </div>
      </body>
    </main>
  );
};
