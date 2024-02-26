export let userData = {name:'', last:''}

let currentProblems = [
  {status:false,name:'Anemia'},
  {status:false, name:'Anxiety'},
  {status:false, name:'Asthma'},
  {status:false, name:'Irregular Heart Beat'},
  {status:false, name:'Bipolar Disorder'},
  {status:false, name:'Breast Cancer'},
  {status:false, name:'Hyperlipidemia'},
  {status:false, name:'Ischemic Heart Disease'},
  {status:false, name:'Chronic Pain'},
  {status:false, name:'Colon Cancer'},
  {status:false, name:'COPD'},
  {status:false, name:'Coronary Artery Disease'},
  {status:false, name:'DVT Blood Clot'},
  {status:false, name:'Depression'},
  {status:false, name:'Diabetes Type 1'},
  {status:false, name:'Diabites Type 2'},
  {status:false, name:'End Stage Renal Disease'},
  {status:false, name:'GERD'},
  {status:false, name:'Hepatitis'},
  {status:false, name:'HIV/AIDS'},
  {status:false, name:'Hypercholesterolemia'},
  {status:false, name:'Hypertension'},
  {status:false, name:'Hyperthyroidism'},
  {status:false, name:'Leukemia'},
  {status:false, name:'Lung Cancer'},
  {status:false, name:'Lymphoma'},
  {status:false, name:'Multiple Myeloma'},
  {status:false, name:'Obesity'},
  {status:false, name:'Prostate Cancer'},
  {status:false, name:'Pulmonary Embolism'},
  {status:false, name:'Fibromyalgia'},
  {status:false, name:'Rheumatoid Arthritis'},
  {status:false, name:'Sleep Apnea'},
  {status:false, name:'Seizures'},
  {status:false, name:'Stroke'}
]

//handedness:'',
//other?

let pastMedical = [
  {status:false, name:'Ankle Fracture'},
  {status:false, name:"Ankylosing Spondylitis"},
  {status:false, name:"Adhesive Capsulitis"},
  {status:false, name:"Bursitis"},
  {status:false, name:"Carpal Tunnel Syndrome"},  
  {status:false, name:"Chronic Low Back Pain"},
  {status:false, name:"DISH"},
  {status:false, name:"Epidural Injections"},
  {status:false, name:"Gout"},
  {status:false, name:"Hip Fracture"},
  {status:false, name:"Metatstatic Bone Disease"},
  {status:false, name:"Osteoporosis"},
  {status:false, name:"Osteoarthritis"},
  {status:false, name:"Osteopenia"},
  {status:false, name:"Polio"},
  {status:false, name:"Primary Bone Sarcoma"},
  {status:false, name:"Psoriatic Arthritis"},
  {status:false, name:"Rickets"},
  {status:false, name:"RSD"},
  {status:false, name:"Sciatica"},
  {status:false, name:"Scoliosis"},
  {status:false, name:"Shoulder Impingememt"},
  {status:false, name:"Spine Fracture"},
  {status:false, name:"Soft Tissue Sarcoma"},
  {status:false, name:"Spinal Stenosis"},
  {status:false, name:"Vertebral Body Compression"},
  {status:false, name:"Vitamin D deficiency"},
  {status:false, name:"Wrist Fracture"},
]

let ifItApplies = [
  {status:false, name:"Pacemaker"},
  {status:false, name:"Blood Thinner"},
  {status:false, name:"Defrimilator"},
  {status:false, name:"Premedication Prior to Procedures"},
  {status:false, name:"RSD"},
]

let ifItAppliesInput = [
  {status:'', name:'allergies'},
  {status:'', name:'Smoking Status'},
  {status:'', name:'Alchohol Intake'},
  {status:'', name:'Exercise Frequency'}
]

let surgeryHistory =[
  {status:false, name:'Achilles Tendon Repair',},
  {status:false, name:'ACL Reconstruction'},
  {status:false, name:'Ankle Fracture ORIF',directionStatus:'Choose Side'},
  {status:false, name:'Bunion Correction'},
  {status:false, name:'Carpal Tunnel Decompression', directionStatus:'Choose Side'},
  {status:false, name:'Cervical Spine Surgery: ACDF'},
  {status:false, name:'Cervical Spine: Disk Replacement'},
  {status:false, name:'CMC Arthroplasty'},
  {status:false, name:'Distal Radius ORIF',directionStatus:'Choose Side'},
  {status:false, name:'Ganglion Cyst Excision'},
  {status:false, name:'Joint Replacement Hip', directionStatus:'Choose Side'},
  {status:false, name:'Joint Replacement Knee', directionStatus:'Choose Side'},
  {status:false, name:'Joint Replacement Shoulder', directionStatus:'Choose Side'},
  {status:false, name:'Knee Arthroscopy', directionStatus:'Choose Side'},
  {status:false, name:'Kyphoplasty / Vertebroplasty'},
  {status:false, name:'Lumbar Fusion'},
  {status:false, name:'Lumbar Laminectomy'},
  {status:false, name:'Lumbar Spine Decompression'},
  {status:false, name:'Lumbar Spine Decompression and Fusion'},
  {status:false, name:'Lumbar Spine: Disk replacement'},
  {status:false, name:'Meniscus Repair'},
  {status:false, name:'Rotator Cuff Repair',directionStatus:'Choose Side'},
  {status:false, name:'Shoulder Arthroscopy'},
  {status:false, name:'Revision of Total Knee Arthroplasty'},
  {status:false, name:'Revision of Total Shoulder Arthroplasty'},
  {status:false, name:'Reverse Total SHoulder Replacement'},
]

let organsPastSurgery = [
  {status:false, name:'Appendix (Appendectomy)'},
  {status:false, name:'Breasts', directionStatus:'Choose Side'},
  {status:false, name:'Colon (Colectomy): Colon Cancer Resection'},
  {status:false, name:'Colon (Colectomy): Diverticulitis'},
  {status:false, name:'Colon (Colectomy): Inflammatory Bowel Disease'},
  {status:false, name:'Colon (Colostomy)'},
  {status:false, name:'Gallbladder (Cholecystectomy)'},
  {status:false, name:'Gastric Bypass'},
  {status:false, name:'Uterus: Hysterectomy',},
  {status:false,name:'Uterus Hysterectomy C-section'},
  {status:false,name:'Uterus Hysterectomy: Uterine Cancer'},
  {status:false,name:'Liver: Hepatectomy'},
  {status:false,name:'Liver Transplant'},
  {status:false,name:'Liver Shunt'},
  {status:false,name:'Rectum: APR'},
  {status:false,name:'Rectum Low Anterior Resection'},
  {status:false,name:'Skin: Basal Cell Carcinoma'},
  {status:false,name:'Ovaries (Oophorectomy): Ovarian Cancer'},
  {status:false,name:'Ovaries: Tubal Ligation'},
  {status:false,name:'Pancrease: Pancreatectomy'},
  {status:false,name:'Prostate (Prostatectomy): Prostate Cancer'},
  {status:false,name:'Heart: Valve replacement'},
  {status:false,name:'Heart: Coronary Artery Bypass Surgery'},
  {status:false,name:'Heart: Heart Transplant'},
  {status:false,name:'Kidney Transplant'},
  {status:false,name:'Kidney Stone Removal'},
  {status:false,name:'Skin: Melanoma'},
  {status:false,name:'Skin: Skin Biopsy'},
  {status:false,name:'Skin: Squamous Celll Carcinoma'},
  {status:false,name:'Tonsillectomy'},


]

export let other = {
  injections:'',
  when:'',
  where:'',
  type:'',
  awv:'',
  awvWhen:'',
  chronicCareManagement:'',
  managementWhere:'',
  preferredPharmacy:'',
  prefferedPharmacyNumber:'',
  prefferedPharmacyCityOrZip:'',
  secondaryPharmacy:'',
  secondaryPharmacyNumber:'',
  secondaryPharmacyCityOrZip:'',
  medication:'',
  supplements:''
}

let variables = [
  currentProblems,
  pastMedical,
  ifItApplies,
  ifItAppliesInput, 
  surgeryHistory,
  organsPastSurgery
  
]



export default variables ;